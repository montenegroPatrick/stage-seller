"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import SignUpForm from "./SignUpForm";
import NavBarMarginContainer from "../../../components/NavBarMarginContainer";

export default function SignUpTabs({ userRole }) {
  return (
    <NavBarMarginContainer classes="w-full text-center flex justify-center items-center">
      <section className="w-full md:w-3/6 mt-5">
        <Tabs className="text-black" value={userRole}>
          <TabsHeader className="mb-5">
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
      </section>
    </NavBarMarginContainer>
  );
}
