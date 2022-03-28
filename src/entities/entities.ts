import { commonsEntities } from './01-commons/entities';
import { contabilidadEntities } from './03-contabiliad/entities';
import { personasEntities } from './02-personas/entities';
import { projectEntities } from './06-project/entities';
import { masterEntities } from './07-master/entities';
import { talentEntities } from './05-talent/entities';
import { logisticEntities } from './04-logistic/entities';
import { crmEntities } from './09-crm/entities';

// CLIENTS ENTITIES
// export const entities = [
//   ...commonsEntities,
//   ...personasEntities,
//   ...contabilidadEntities,
// ];

// MASTER ENTITIES
export const entities = [
  ...commonsEntities,
  ...personasEntities,
  ...contabilidadEntities,
  ...projectEntities,
  ...talentEntities,
  ...logisticEntities,
  ...masterEntities,
  ...crmEntities,
];
