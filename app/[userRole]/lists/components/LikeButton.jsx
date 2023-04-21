"use client";
import PropTypes from "prop-types";
import setLike from "@/lib/matches/setLike.jsx";
import Cookies from "js-cookie";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import Loading from "@/app/loading";
import deleteLike from "@/lib/matches/deleteLike";

export default function LikeButton({ userReceivingId }) {
  const token = Cookies.get("jwt");
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState();

  const getLikes = async () =>
    await getLikeFromMe(token).then(({ data }) => {
      console.log("data likeFRome ", data);
      // data.map(() => {
      //   setIsLike(true);
      // });
      setLikes(data);
    });

  useEffect(() => {
    getLikes();
  }, []);

  const handleClick = () => {
    const data = { receiver: userReceivingId };
    if (!isLike) {
      setLike(data, token);
    } else {
      setIsLike(!isLike);
      //const idMatches = deleteLike(token);
    }
  };
  if (!likes) {
    return <Loading />;
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
