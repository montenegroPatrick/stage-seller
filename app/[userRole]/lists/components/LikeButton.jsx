"use client";
import PropTypes from "prop-types";
import setLike from "@/lib/matches/setLike.jsx";
import Cookies from "js-cookie";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import Loading from "@/app/loading";
import deleteLike from "@/lib/matches/deleteLike";
import unLike from "@/lib/matches/deleteLike";
import getLikeToMe from "@/lib/users/getLikeToMe";
import SkeletonLoader from "@/app/utilsComponents/Loaders/skeletonLoader";

export default function LikeButton({ userReceivingId }) {
  const token = Cookies.get("jwt");
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
      setLikesFromMe(data);
    });
  const newArrayLikesFromMe =
    likesFromMe &&
    likesFromMe.filter((like) => like.user.id === userReceivingId);

  //const matches = likesToMe.find((likeTo) => likesFromMe.find((likeFrom) => likeFrom. ))

  useEffect(() => {
    getLikesToMe();
    getLikesFromMe();
  }, [isLike]);
  console.log("likesFromeMe", likesFromMe);

  const handleClick = () => {
    const userClickedId = likesFromMe.find(
      (like) => like.user.id === userReceivingId
    );
    console.log(userClickedId);

    if (!userClickedId) {
      const data = { receiver: userReceivingId };
      setIsLike(true);
      setLike(data, token);
    } else {
      unLike(token, userClickedId.matchId);
      setIsLike(false);
    }
  };
  if (!likesFromMe) {
    return <SkeletonLoader />;
  }

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

LikeButton.propTypes = {
  userReceivingId: PropTypes.number.isRequired,
};
