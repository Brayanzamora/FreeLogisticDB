import { Usuario } from "../../../../entities/02-personas/catmaeusuario.entity";
import * as bcrypt from "bcryptjs";

export const USUARIOS: Usuario[] = [
  {
    username: "isc_example",
    password: bcrypt.hashSync("4yn1T3ch", 10),
    isAdmin: true,
  },
  {
    username: "JorgeC",
    password: bcrypt.hashSync("aynitech", 10),
    isAdmin: true,
  },
  {
    username: "HernanN",
    password: bcrypt.hashSync("aynitech", 10),
    isAdmin: true,
  },
  {
    username: "Inntech",
    password: bcrypt.hashSync("inntech", 10),
    isAdmin: true,
  },
];
