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

export default function LikeButton({ userReceivingId }) {
  const token = Cookies.get("jwt");
  const [isMatch, setIsMatch] = useState(false);
  const [isLike, setIsLike] = useState(false);
  const [likesFromMe, setLikesFromMe] = useState();
  const [likesToMe, setLikesToMe] = useState();

  const getLikesToMe = async () =>
    await getLikeToMe(token).then((res) => {
      if (res.data) {
        setLikesToMe(res.data);
      }
    });

  const getLikesFromMe = async () =>
    await getLikeFromMe(token).then(({ data }) => {
      console.log("dans le fetch", data);
      setLikesFromMe(data);
      data.map((data) => {
        if (data.user.id === userReceivingId) {
          setIsLike(true);
        } else {
          setIsLike(false);
        }
      });
    });

  // const foundMatches = async () => {
  //   if (likesToMe && likesFromMe) {
  //     const theMatch = likesToMe.find((likeTo) =>
  //       likesFromMe.find((likeFrom) => likeFrom.matchId === likeTo.matchId)
  //     );
  //     await setMatch(token, theMatch.matchId);
  //     setIsMatch(true);
  //   }
  //   setIsMatch(false);
  // };

  useEffect(() => {
    const fetch = async () => {
      await getLikesToMe();
      await getLikesFromMe();
      // await foundMatches();
    };
    fetch();
  }, [isLike]);

  const handleClick = async () => {
    await getLikesFromMe();

    const userClickedId =
      likesFromMe &&
      likesFromMe.find((like) => like.user.id === userReceivingId);

    if (!userClickedId) {
      const data = { receiver: userReceivingId };
      setIsLike(true);
      setLike(data, token).then((res) => console.log("setLike", res));
    } else {
      setIsLike(false);
      unLike(token, userClickedId.matchId).then((res) => console.log(res));
    }
  };
  // if (!likesFromMe) {
  //   return
  // }

  return (
    <>
      <button onClick={handleClick} className="absolute top-7 right-5 ">
        {isLike ? (
          <AiFillHeart className="text-red-500" />
        ) : (
          <AiOutlineHeart className="text-red-500" />
        )}
      </button>
    </>
  );
}
