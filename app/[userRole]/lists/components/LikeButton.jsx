"use client";
import PropTypes from "prop-types";
import setLike from "@/lib/matches/setLike.jsx";
import Cookies from "js-cookie";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useState } from "react";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import Loading from "@/app/loading";

export default function LikeButton({ userReceivingId }) {
  const token = Cookies.get("jwt");
  const [isLike, setIsLike] = useState(false);
  const [likes, setLikes] = useState();

  useEffect(() => {
    const getLikes = async () =>
      await getLikeFromMe(token).then(({ data }) => {
        console.log(data);
        data.map(() => {
          setIsLike(true);
        });
        setLikes(data);
      });
    getLikes();
    console.log("Alllike", likes);
  }, []);

  const handleClick = () => {
    const data = { receiver: userReceivingId };
    if (!isLike) {
      setLike(data, token);
    } else {
      //todo remove like
    }
    setIsLike(!isLike);
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
