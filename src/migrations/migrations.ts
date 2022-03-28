import { commons } from './01-commons/migrations';
import { personas } from './02-personas/migrations';
import { contabilidad } from './03-contabilidad/migrations';
import { logistic } from './04-logistic/migrations';
import { talent } from './05-talent/migrations';
import { project } from './06-project/migrations';
import { master } from './07-master/migrations';
import { activities } from './08-activities/migrations';
import { crm } from './09-crm/migrations';

// Migrations must be explicitly imported. Otherwise, serverless won't
// include the migration files in the final build.

// CLIENT DATABASE
export const migrations = commons.concat(
  personas,
  contabilidad,
  logistic,
  talent,
  project,
  activities,
  master,
  crm
);

// MASTER DATABASE
// export const migrations = commons.concat(
//   personas,
//   contabilidad,
//   logistic,
//   talent,
//   project,
//   master,
//   activities,
//   crm
// );
