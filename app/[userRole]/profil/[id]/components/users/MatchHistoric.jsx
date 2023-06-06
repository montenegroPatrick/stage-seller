"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Suspense, use, useEffect, useState } from "react";
import getUserMatches from "@/lib/users/getUserMatches";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import getLikeToMe from "@/lib/users/getLikeToMe";
import Cookies from "js-cookie";
import MiniCard from "./MiniCard";

import Link from "next/link";
import SkeletonLoaderCard from "@/app/utilsComponents/Loaders/skeletonLoaderCard";

export default function MatchHistoric() {
  //todo map des likes in like out match de l'utilisateur
  const token = Cookies.get("jwt");

  const [matches, setMatches] = useState([]);
  const [likeSend, setLikeSend] = useState([]);
  const [likeRecieve, setLikeRecieve] = useState([]);

  const getMatches = async () =>
    getUserMatches(token).then((res) => {
      setMatches(res.data);
    });
  const getLikeSend = async () =>
    getLikeFromMe(token).then((res) => {
      setLikeSend(res.data);
    });
  const getLikeRecieve = async () =>
    getLikeToMe(token).then((res) => {
      setLikeRecieve(res.data);
    });
  useEffect(() => {
    const fetch = async () => {
      await getMatches();
      await getLikeSend();
      await getLikeRecieve();
    };
    fetch();
  }, []);
  if (
    (likeRecieve.length === 0) &
    (matches.length === 0) &
    (likeSend.length === 0)
  ) {
    return (
      <section className="p-5 flex flex-col gap-2 underline text-center">
        <p>Tes likes et matchs seront visible ici</p>
        <Link href={`/companies/lists`} className="underline p-5 text-blue-500">
          {" "}
          Clique ici pour commencer à liker tes entreprises préférées
        </Link>
      </section>
    );
  }
  return (
    <Tabs
      className="scroll-smooth overflow-hidden overflow-y-scroll rounded-3xl"
      value="like émis"
    >
      <TabsHeader className="bg-gray-100">
        <Tab value="like émis">like émis</Tab>
        <Tab value="like reçu">like reçu</Tab>
        <Tab value="match">Match</Tab>
      </TabsHeader>
      <TabsBody className="mt-5 ">
        <TabPanel className="" value="like émis">
          {likeSend.length > 0 &&
            likeSend.map((like, index) => (
              <MiniCard key={index} objectLike={like} matches={false} />
            ))}
        </TabPanel>
        <TabPanel className="" value="like reçu">
          {likeRecieve.length > 0 &&
            likeRecieve.map((like, index) => (
              <MiniCard key={index} objectLike={like} matches={false} />
            ))}
        </TabPanel>
        <TabPanel className="" value="match">
          {matches.length > 0 &&
            matches.map((like, index) => (
              <MiniCard key={index} objectLike={like} matches={true} />
            ))}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
