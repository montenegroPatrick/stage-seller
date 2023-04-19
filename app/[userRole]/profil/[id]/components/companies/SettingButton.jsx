'use client'
import {BsPencilSquare}from 'react-icons/bs'

export default function SettingButton({top, right}) {
  return <button className={`absolute top-${top} right-${right} text-blackNext text-xl`}><BsPencilSquare /></button>;
}
