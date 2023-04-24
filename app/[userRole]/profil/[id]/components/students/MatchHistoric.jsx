"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { Suspense, useEffect, useState } from "react";
import getUserMatches from "@/lib/users/getUserMatches";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import getLikeToMe from "@/lib/users/getLikeToMe";
import Cookies from "js-cookie";
import MiniCard from "./MiniCard";
import Loading from "@/app/loading";
import SkeletonLoader from "@/app/utilsComponents/Loaders/skeletonLoader";
import Link from "next/link";
import SkeletonLoaderCard from "@/app/utilsComponents/Loaders/skeletonLoaderCard";
import { matchesMiddleware } from "next/dist/shared/lib/router/router";

export default function MatchHistoric({ currentUser }) {
  //todo map des likes in like out match de l'utilisateur
  const token = Cookies.get("jwt");
  const [matches, setMatches] = useState([]);
  const [likeSend, setLikeSend] = useState([]);
  const [likeRecieve, setLikeRecieve] = useState([]);
  // data
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
        <p>tes likes et matchs seront visible ici</p>
        <Link href={`/companies/lists`} className="underline p-5 text-blue-500">
          {" "}
          Clique ici pour commencer à liker tes entreprises préférées
        </Link>
      </section>
    );
  }
  return (
    <Tabs className="relative rounded-3xl" value="like émis">
      <TabsHeader className="sticky top-0 bg-gray-100 left-0 right-0  ">
        <Tab value="like émis">like émis</Tab>
        <Tab value="like reçu">like reçu</Tab>
        <Tab value="match">Match</Tab>
      </TabsHeader>

      <TabsBody className="mt-5 scroll-smooth">
        <TabPanel
          className="flex bg-whiteSmoke/[0.2] flex-col gap-5"
          value="like émis"
        >
          {likeSend.length > 0 &&
            likeSend.map((like, index) => (
              <Suspense key={index} fallback={<SkeletonLoaderCard />}>
                <MiniCard objectLike={like} matches={false} />
              </Suspense>
            ))}
        </TabPanel>
        <TabPanel className="flex flex-col gap-5" value="like reçu">
          {likeRecieve.length > 0 &&
            likeRecieve.map((like, index) => (
              <Suspense key={index} fallback={<SkeletonLoaderCard />}>
                <MiniCard objectLike={like} matches={false} />
              </Suspense>
            ))}
        </TabPanel>
        <TabPanel className="flex flex-col gap-5" value="match">
          {matches.length > 0 &&
            matches.map((like, index) => (
              <Suspense key={index} fallback={<SkeletonLoaderCard />}>
                <MiniCard objectLike={like} matches={true} />
              </Suspense>
            ))}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
