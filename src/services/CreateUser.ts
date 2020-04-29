/**
 * Para criar: name, email, password
 */

interface TechObject {
  title: string;
  experience: number;
}

interface CreateUserData {
  // ? significa que o nome não é obrigatório ou não precisa ser informado
  name?: string;
  email: string;
  password: string;
  techs: Array<string | TechObject>;
}

export default function CreateUser({ name, email, password }: CreateUserData) {
  const user = {
    name,
    email,
    password,
  };

  return user;
}
