"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
  Input,
} from "@material-tailwind/react";
import Skills from "./Skills";
import { MdAddAPhoto } from "react-icons/md";
export default function ImageProfile({
  isSettings,
  setShowSettings,
  show,
  student,
}) {
  return (
    <Card className=" lg:relative grid h-full w-full items-end justify-center text-center">
      <CardHeader
        color="transparent"
        className="absolute inset-0 m-0  w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        {" "}
        <div className="to-bg-black-10 lg:absolute inset-0 h-full w-full bg-gradient-to-t from-black/90 via-black/80" />
      </CardHeader>
      <CardBody className="hidden lg:block relative px-6 md:px-12">
        {isSettings && (
          <Input
            variant="standard"
            className=" border-0 p-5 w-50vh"
            icon={<MdAddAPhoto size={20} />}
            label="update your picture"
          />
        )}
        <Typography variant="h5" className=" text-gray-400">
          {`${student.firstName} ${student.lastName}`}
        </Typography>

        <Skills
          isSettings={isSettings}
          setShowSettings={setShowSettings}
          show={show}
          classes="flex "
        />
      </CardBody>
    </Card>
  );
}
