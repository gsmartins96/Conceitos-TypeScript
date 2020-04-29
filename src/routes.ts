import { Request, Response } from "express";
import createUser from "./services/CreateUser";

export function helloWorld(request: Request, response: Response) {
  const user = createUser({
    email: "gabrielmartins@cjr.org.br",
    password: "123456789",
    techs: [
      "NodeJS",
      "React Native",
      "TypeScript",
      {
        title: "JavaScript",
        experience: 100,
      },
    ],
  });

  return response.json({ message: "Hello World" });
}
