"use client";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
import FormCompanies from "./FormsCompanies";

export default function SignUp() {
  return (
    <Tabs value="dashboard">
      <TabsHeader>
        <Tab value="companies">
          <div className="">Entreprises</div>
        </Tab>
        <Tab value="students">
          <div className="">Elèves</div>
        </Tab>
      </TabsHeader>
      <TabsBody>
        <TabPanel value="companies">
          <FormCompanies role="companies" />
        </TabPanel>
        <TabPanel value="students">
          <FormCompanies role="students" />
        </TabPanel>
      </TabsBody>
    </Tabs>
  );
}
