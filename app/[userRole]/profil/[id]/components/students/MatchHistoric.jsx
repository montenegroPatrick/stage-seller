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
    getMatches();
    getLikeSend();
    getLikeRecieve();
  }, []);

  return (
    <Tabs className="relative glassMorph" value="like in">
      <TabsHeader className="bg-transparent">
        <Tab value="like in">like in</Tab>
        <Tab value="like out">like out</Tab>
        <Tab value="match">Match</Tab>
      </TabsHeader>

      <TabsBody className="w-full h-full scroll-smooth">
        <TabPanel value="like in">
          {likeSend &&
            likeSend.map((like) => (
              <Suspense fallback={<SkeletonLoader />}>
                <MiniCard objectLike={like} />
              </Suspense>
            ))}
        </TabPanel>
        <TabPanel value="like out">
          {likeRecieve &&
            likeRecieve.map((like) => (
              <Suspense fallback={<SkeletonLoader />}>
                <MiniCard objectLike={like} />
              </Suspense>
            ))}
        </TabPanel>
        <TabPanel value="match">
          {matches &&
            matches.map((like) => (
              <Suspense fallback={<SkeletonLoader />}>
                <MiniCard objectLike={like} />
              </Suspense>
            ))}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
