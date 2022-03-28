import { Estados } from '../../../../entities/04-logistic/catmaeestados.entity';

export const ESTADOS: Estados[] = [
  {
    id: 1,
    nombre: 'Vigente',
    color: '008f39',
    tipo: 'VENTACOTIZACION',
    flag: true,
  },
  {
    id: 2,
    nombre: 'Aprobado',
    color: '008f39',
    tipo: 'VENTACOTIZACION',
    flag: true,
  },
  {
    id: 3,
    nombre: 'Vencida',
    color: 'FF0000',
    tipo: 'VENTACOTIZACION',
    flag: true,
  },
];
