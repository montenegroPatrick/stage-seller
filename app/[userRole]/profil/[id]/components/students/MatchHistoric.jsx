"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import getUserMatches from "@/lib/users/getUserMatches";
import getLikeFromMe from "@/lib/users/getLikeFromMe";
import getLikeToMe from "@/lib/users/getLikeToMe";
import Cookies from "js-cookie";
import MiniCard from "./MiniCard";

export default function MatchHistoric({ currentUser }) {
  //todo map des likes in like out match de l'utilisateur
  const token = Cookies.get("jwt");
  const [matches, setMatches] = useState();
  const [likeSend, setLikeSend] = useState();
  const [likeRecieve, setLikeRecieve] = useState();
  console.log(matches, likeSend, likeRecieve);
  // data
  const getMatches = async () =>
    await getUserMatches(token).then((data) => setMatches(data));
  const getLikeSend = async () =>
    await getLikeFromMe(token).then((data) => setLikeSend(data));
  const getLikeRecieve = async () =>
    await getLikeToMe(token).then((data) => setLikeRecieve(data));

  useEffect(() => {
    getMatches();
    getLikeSend();
    getLikeRecieve();
  }, []);

  return (
    <Tabs value="I'd like" className="p-5">
      <TabsHeader>
        <Tab value="I'd like">I'd like</Tab>
        <Tab value="like from">like from</Tab>
        <Tab value="matches">matches</Tab>
      </TabsHeader>

      <TabsBody className="w-full h-1/3 overflow-scroll">
        <TabPanel value="I'd like">
          {likeSend && likeSend.map((like) => <MiniCard likeArray={like} />)}
        </TabPanel>
        <TabPanel className="h-56" value="like from">
          {likeRecieve &&
            likeRecieve.map((like) => <MiniCard likeArray={like} />)}
        </TabPanel>
        <TabPanel value="matches">
          {matches && matches.map((like) => <MiniCard likeArray={like} />)}
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
