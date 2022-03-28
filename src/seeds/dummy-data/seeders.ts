import { contabilidadDummySeeder } from './01-contabilidad/seeders';
import { personasDummySeeder } from './02-personas/seeders';
import { logisticDummySeeder } from './04-logistic/seeders';
import { talentDummySeeder } from './05-talent/seeders';
import { masterDummySeeder } from './07-master/seeders';

export const seedersDummy = [
  ...personasDummySeeder,
  ...masterDummySeeder,
  ...talentDummySeeder,
  ...contabilidadDummySeeder,
  ...logisticDummySeeder,
];
