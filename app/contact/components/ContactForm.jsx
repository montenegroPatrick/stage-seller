"use client";
import ButtonForm from "@/app/[userRole]/profil/[id]/components/companies/ButtonForm";
import SendMessageToUs from "@/lib/contact/sendMessageToUs";
import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Textarea,
  Alert,
} from "@material-tailwind/react";
import Cookies from "js-cookie";
import { useState } from "react";

export default function ContactForm() {
  const token = Cookies.get("jwt");
  const [message, setMessage] = useState("");
  const [input, setInput] = useState({
    email: "",
    textBody: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await SendMessageToUs(token, input);

    if (!response.status) {
      switch (response.response) {
        case 401:
          setMessage(
            "vous n'êtes pas autorisé à nous contacter, merci de vous connecter d'abord"
          );
          break;
        case 502:
          setMessage("veuillez remplir les champs demandées");
          break;
        default:
          break;
      }
      setMessage("veuillez remplir les champs demandées");
    }
    switch (response.status) {
      case 200:
        setMessage("mail envoyé merci");

        break;
    }
  };
  return (
    <Card
      color="transparent"
      className="flex flex-col justify-center items-center
    w-screen h-screen"
      shadow={false}
    >
      <Typography variant="h4" color="blue-gray">
        Contactez-nous
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        <p>Entrer votre nom, email et votre message</p>
        <p>On vous repondra dès les meilleurs délai</p>
      </Typography>
      <form
        onSubmit={handleSubmit}
        className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96"
      >
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" />
          <Input
            size="lg"
            label="Email"
            onChange={handleChange}
            name="email"
            value={input.email}
          />
          <Textarea
            type="text"
            size="lg"
            onChange={handleChange}
            label="votre message"
            name="textBody"
            value={input.textBody}
          />
        </div>

        <ButtonForm type="submit" className="mt-6" fullWidth>
          Envoyer
        </ButtonForm>
        {message && (
          <>
            <Alert
              show={message}
              dismissible={{
                onClose: () => setMessage(""),
              }}
              className="duration-700"
              color="gray"
            >
              {message}
            </Alert>
          </>
        )}
      </form>
    </Card>
  );
}
