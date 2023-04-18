"use client";
import { Avatar, Typography } from "@material-tailwind/react";
import Skills from "./Skills";
import { useEffect, useState } from "react";

export default function MiniCard({ likeArray }) {
  const [user, setUser] = useState();
  const users = async () =>
    await getAllUsers(token).then((data) => setUser(data));
  const userForCard = user.filter(
    (user) => user.id === likeArray.map((like) => like.receiver.id)
  );
  console.log(user);
  useEffect(() => {
    users();
  }, []);
  console.log("userForMiniCard", userForCard);
  return (
    <section className="bg-transparent rounded-lg p-3 mb-3">
      <div className="flex gap-5 bg-transparent ">
        <Avatar
          size="lg"
          variant="rounded"
          alt="php"
          src="https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          className="border-2 border-whiteSmoke hover:z-10  bg-cover"
        />
        <div className="flex w-4/5 justify-between">
          <Typography variant="h5">Name</Typography>
          <Typography variant="paragraph">Frontend Lead @Apple</Typography>
        </div>
      </div>
      <Skills />
    </section>
  );
}
