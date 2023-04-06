"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import CardProfile from "./cardProfile";
import MiniCard from "./miniCard";

export default function MatchHistoric() {
  return (
    <Tabs value="like in">
      <TabsHeader>
        <Tab value="like in">like in</Tab>
        <Tab value="like out">like out</Tab>
        <Tab value="match">Match</Tab>
      </TabsHeader>

      <TabsBody className="w-full h-1/3 overflow-scroll">
        <TabPanel value="like in">
          <MiniCard />
        </TabPanel>
        <TabPanel className="h-56" value="like out">
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
          <MiniCard />
        </TabPanel>
        <TabPanel value="match">
          <MiniCard />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
