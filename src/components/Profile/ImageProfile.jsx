"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Skills from "./skills";

export default function ImageProfile() {
  return (
    <Card className=" lg:relative grid h-full w-full items-end overflow-hidden justify-center text-center">
      <CardHeader
        color="transparent"
        className="absolute inset-0 m-0 h-full w-full rounded-xl bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center"
      >
        <div className="to-bg-black-10 lg:absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
      </CardHeader>
      <CardBody className="hidden lg:block relative py-14 px-6 md:px-12">
        <Typography variant="h5" className="mb-4 text-gray-400">
          Name firstName
        </Typography>
        <Skills classes="flex " />
      </CardBody>
    </Card>
  );
}
