"use client";
import InputByUs from "./Input";
import { useRef, useState } from "react";

export default function FormCompanies() {
  const emailInput = useRef();
  const passwordInput = useRef();
  const passwordVerifInput = useRef();
  const [mentionLegal, setMentionLegal] = useState(false);
  const [newsletters, setNewsletters] = useState(false);

  const handleSubmit = () => {
    // check = mentionlegal must be true,
    // password === passwordVerif
    // emailInput need to be an valid email
    // check password
  };
  return (
    <form onSubmit={handleSubmit} className=" text-whiteSmoke bg-black3"></form>
  );
}