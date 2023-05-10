'use client'
import {BsPencilSquare}from 'react-icons/bs'

export default function SettingButton({setState}) {
  return <button onClick={setState} className='text-black text-lg '><BsPencilSquare /></button>;
}
