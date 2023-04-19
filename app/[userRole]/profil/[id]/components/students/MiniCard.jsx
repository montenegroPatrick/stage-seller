"use client";
import { Avatar, Typography } from "@material-tailwind/react";
import Skills from "./Skills";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import getAllUsers from "@/lib/users/getAllUsers";

export default function MiniCard({ objectLike }) {
  if (!objectLike === []) {
    const token = Cookies.get("jwt");
    const [users, setUsers] = useState();

    useEffect(() => {
      const getDataUsers = async () =>
        await getAllUsers(token).then((data) => setUsers(data));
      getDataUsers();
    }, []);

    const userForCard =
      users &&
      users.find((user) => user.id === objectLike.map((obj) => obj.id));
    console.log("userForMiniCard", userForCard);
    if (!userForCard) {
      return;
    }
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
            <Typography variant="h5">{userForCard.companyName}</Typography>
            <Typography variant="paragraph">
              {userForCard.companyName}
            </Typography>
          </div>
        </div>
        <Skills />
      </section>
    );
  }
  return;
}
