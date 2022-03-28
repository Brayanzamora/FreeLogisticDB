import { PlanCuenta } from './catmaeplancuenta.entity';
import { Origen } from './catmaeorigen.entity';
import { DetalleOrigen } from './catdetorigen.entity';
import { Balance } from './catmaebalance.entity';
import { DetalleEnlace } from './catdetenlace.entity';
import { OrigenVoucher } from './catorigenvoucher.entity';
import { ParametroCuenta } from './catmaeparemetrocuenta.entity';
import { CentroCosto } from './catmaecentrocosto.entity';

export const contabilidadEntities = [
  PlanCuenta,
  Origen,
  DetalleOrigen,
  Balance,
  DetalleEnlace,
  OrigenVoucher,
  ParametroCuenta,
  CentroCosto,
];
