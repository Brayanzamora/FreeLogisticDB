import { CentroCosto } from '../../../../entities/03-contabiliad/catmaecentrocosto.entity';
export const CENTRO_COSTOS: CentroCosto[] = [
  {
    id: 1,
    codigo: '001',
    nombre: 'Bienes',
    flag: true,
    debe_id: 35,
    haber_id: 59,
  },
  {
    id: 2,
    codigo: '002',
    nombre: 'Servicios',
    flag: true,
    debe_id: 296,
    haber_id: 296,
  },
];
