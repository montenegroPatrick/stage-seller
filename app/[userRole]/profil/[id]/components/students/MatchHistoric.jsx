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

export default function MatchHistoric({ currentUser }) {
  //todo map des likes in like out match de l'utilisateur
  const token = Cookies.get("jwt");
  const [matches, setMatches] = useState([]);
  const [likeSend, setLikeSend] = useState([]);
  const [likeRecieve, setLikeRecieve] = useState([]);
  console.log(matches, likeSend, likeRecieve);
  // data
  const getMatches = async () =>
    getUserMatches(token).then((res) => {
      setMatches(res);
    });
  const getLikeSend = async () =>
    getLikeFromMe(token).then((res) => {
      setLikeSend(res);
    });
  const getLikeRecieve = async () =>
    getLikeToMe(token).then((res) => {
      setLikeRecieve(res);
    });

  useEffect(() => {
    getMatches();
    getLikeSend();
    getLikeRecieve();
  }, []);

  return (
    <Suspense fallback={<h1>loading data</h1>}>
      <Tabs value="like in">
        <TabsHeader>
          <Tab value="like in">like in</Tab>
          <Tab value="like out">like out</Tab>
          <Tab value="match">Match</Tab>
        </TabsHeader>

        <TabsBody className="w-full h-full scroll-smooth">
          <TabPanel value="like in">
            {<MiniCard objectLike={likeSend} />}
          </TabPanel>
          <TabPanel value="like out">
            {<MiniCard objectLike={likeRecieve} />}
          </TabPanel>
          <TabPanel value="match">{<MiniCard objectLike={matches} />}</TabPanel>
        </TabsBody>
      </Tabs>
    </Suspense>
  );
}
