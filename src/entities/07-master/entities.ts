import { SegDetModuloPlan } from "./segdetmoduloplan.entity";
import { Modulo } from "./catmaemodulo.entity";
import { Plan } from "./catmaeplan.entity";
import { Menu } from "./catmaemenu.entity";
import { Tenant } from "./catmaetenant.entity";
import { Empresa } from "./catmaeempresa.entity";
import { Suscripcion } from "./catmaesuscripcion.entity";
import { SegDetMenuModulo } from "./segdetmenumodulo.entity";

export const masterEntities = [
  Modulo,
  Plan,
  SegDetModuloPlan,
  Menu,
  Tenant,
  Suscripcion,
  Empresa,
  SegDetMenuModulo,
];
