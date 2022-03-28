import { personasSeeder } from './initial-data/02-personas/seeders';
import { commonsSeeder } from './initial-data/01-commons/seeders';
import { contabilidadSeeder } from './initial-data/03-contabilidad/seeders';
import { projectSeeder } from './initial-data/06-project/seeders';
import { masterSeeder } from './initial-data/07-master/seeders';
import { seedersDummy } from './dummy-data/seeders';
import { talentDummySeeder } from './dummy-data/05-talent/seeders';
import { logisticDummySeeder } from './dummy-data/04-logistic/seeders';
import { crmSeeder } from './initial-data/09-crm/seeders';

/**
 * Use this for clients db
 */
// export const seeders = [
//   ...commonsSeeder,
//   ...personasSeeder,
//   ...contabilidadSeeder,
//   ...talentDummySeeder,
// ];

/**
 * Use this for master db
 */
export const seeders = [
  ...commonsSeeder,
  ...personasSeeder,
  ...contabilidadSeeder,
  ...projectSeeder,
  ...masterSeeder,
  ...crmSeeder,
  ...seedersDummy,
];
