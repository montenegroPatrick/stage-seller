'use client'
import {BsPencilSquare}from 'react-icons/bs'

export default function SettingButton({top, right, setState}) {
  return <button onClick={setState} className='text-black text-xl '><BsPencilSquare /></button>;
}
