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
  const [matches, setMatches] = useState();
  const [likeSend, setLikeSend] = useState();
  const [likeRecieve, setLikeRecieve] = useState();

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
  if (!likeRecieve && !matches && !likeSend) {
    return (
      <section className="p-5">
        <p>tes likes et matchs seront visible ici</p>
        <Link href={`/companies/lists`}>
          {" "}
          Clique ici pour commencer à liker tes entreprises préférées
        </Link>
      </section>
    );
  }
  return (
    <Tabs className="relative rounded-3xl" value="like in">
      <TabsHeader className="absolute top-0 bg-gray-100 left-0 right-0  ">
        <Tab value="like in">like in</Tab>
        <Tab value="like out">like out</Tab>
        <Tab value="match">Match</Tab>
      </TabsHeader>

      <TabsBody className="  mt-5 scroll-smooth">
        <TabPanel className="" value="like in">
          {likeSend &&
            likeSend.map((like) => (
              <Suspense fallback={<SkeletonLoaderCard />}>
                <MiniCard objectLike={like} />
              </Suspense>
            ))}
        </TabPanel>
        <TabPanel value="like out">
          {likeRecieve &&
            likeRecieve.map((like) => (
              <Suspense fallback={<SkeletonLoaderCard />}>
                <MiniCard objectLike={like} />
              </Suspense>
            ))}
        </TabPanel>
        <TabPanel value="match">
          {matches &&
            matches.map((like) => (
              <Suspense fallback={<SkeletonLoaderCard />}>
                <MiniCard objectLike={like} />
              </Suspense>
            ))}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
