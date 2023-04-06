"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SignUpForm from "./SignUpForm";

export default function SignUpTabs() {
  return (
    <Tabs value="students">
      <TabsHeader className="mb-16">
        <Tab value="companies">
          <div className="">Entreprises</div>
        </Tab>
        <Tab value="students">
          <div className="">Elèves</div>
        </Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="companies">
          <SignUpForm role="companies" />
        </TabPanel>
        <TabPanel value="students">
          <SignUpForm role="students" />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
