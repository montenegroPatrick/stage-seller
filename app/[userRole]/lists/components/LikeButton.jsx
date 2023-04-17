'use client'
import PropTypes from 'prop-types';
import setLike from '@/lib/setLike';
import Cookies from "js-cookie";
import {AiOutlineHeart, AiFillHeart } from "react-icons/ai"
import { useState } from 'react';

export default function LikeButton({userReceivingId}) {
  
  const token = Cookies.get("jwt");
  const [isLike, setLiking] = useState(false)
  

const handleClick = () => {
  setLike(userReceivingId, token)
  setLiking(!isLike)
} 

  return (<>
<button onClick={handleClick} className='absolute top-7 right-5 '>{isLike ? <AiFillHeart className='text-red-500'/> : <AiOutlineHeart className='text-red-500'/>}</button>
  </>);
}

LikeButton.propTypes = {
    userReceivingId: PropTypes.number.isRequired,
  };