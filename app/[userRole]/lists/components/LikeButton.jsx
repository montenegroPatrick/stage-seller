"use client";
import PropTypes from "prop-types";
import setLike from "@/lib/matches/setLike.jsx";
import Cookies from "js-cookie";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import unLike from "@/lib/matches/unLike";
import getLikeToMe from "@/lib/users/getLikeToMe";
import SkeletonLoader from "@/app/utilsComponents/Loaders/skeletonLoader";
import setMatch from "@/lib/matches/setMatch";
import { usePathname, useRouter } from "next/navigation";
import TheMath from "../../components/TheMatch";
import getUserMatches from "@/lib/users/getUserMatches";

export default function LikeButton({ userReceivingId }) {
  const token = Cookies.get("jwt");
  const [matches, setMatches] = useState();
  const [isMatch, setIsMatch] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likesFromMe, setLikesFromMe] = useState();
  const [likesToMe, setLikesToMe] = useState();
  const path = usePathname();
  const router = useRouter();
  const getMatchesOfUser = async () => {
    await getUserMatches(token).then((res) => {
      if (res.data) {
        setMatches(res.data);
        res.data.map(() => setIsMatch(true));
      }
    });
  };
  const getLikesToMe = async () =>
    await getLikeToMe(token).then((res) => {
      if (res.data) {
        setLikesToMe(res.data);
      }
    });

  const getLikesFromMe = async () =>
    await getLikeFromMe(token).then(({ data }) => {
      setLikesFromMe(data);
      data.map((data) => {
        data.user.id === userReceivingId && setIsLike(true);
      });
    });

  const foundMatches = async () => {
    if (likesToMe) {
      const theMatch = likesToMe.find(
        (likeTo) => likeTo.user.id === userReceivingId
      );
      console.log("the Match", theMatch);
      theMatch &&
        (await setMatch(token, theMatch.matchId).then(() => setIsMatch(true)));
    } else {
      setIsMatch(false);
    }
  };

  useEffect(() => {
    const fetch = async () => {
      await getLikesToMe();
      await getLikesFromMe();
      await getMatchesOfUser();
    };
    fetch();
  }, [isLike, path]);

  const handleClick = async () => {
    await getLikesFromMe();
    await getLikesToMe();
    await foundMatches();
    console.log("likesFromMe on handleClick", likesFromMe);
    if (!isMatch) {
      const userClickedId =
        likesFromMe &&
        likesFromMe.find((like) => like.user.id === userReceivingId);

      if (!userClickedId) {
        const data = { receiver: userReceivingId };
        setIsLike(true);
        setLike(data, token);
      } else {
        setIsLike(false);
        unLike(token, userClickedId.matchId);
      }
    }
    router.refresh();
  };
  console.log("matches", matches);
  if (isMatch) {
    return <TheMath openMatch={isMatch} setIsMatch={setIsMatch} />;
  }

  return (
    <>
      <button onClick={handleClick} className="absolute top-2 right-4 ">
        {isMatch ? (
          <AiFillHeart className="text-red-500" />
        ) : isLike ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart className="text-red-500" />
        )}
      </button>
    </>
  );
}
