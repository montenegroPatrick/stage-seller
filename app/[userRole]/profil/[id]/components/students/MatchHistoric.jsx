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
    getUserMatches(token).then((data) => setMatches(data));
  const getLikeSend = async () =>
    getLikeFromMe(token).then((data) => setLikeSend(data));
  const getLikeRecieve = async () =>
    getLikeToMe(token).then((data) => setLikeRecieve(data));

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

        <TabsBody className="w-full h-1/3 overflow-scroll">
          <TabPanel value="like in">
            {likeSend.map((like) => (
              <MiniCard objectLike={like} />
            ))}
            <MiniCard />
          </TabPanel>
          <TabPanel className="h-56" value="like out">
            {likeRecieve.map((like) => (
              <MiniCard objectLike={like} />
            ))}
          </TabPanel>
          <TabPanel value="match">
            {matches.map((like) => (
              <MiniCard objectLike={like} />
            ))}
          </TabPanel>
        </TabsBody>
      </Tabs>
    </Suspense>
  );
}
