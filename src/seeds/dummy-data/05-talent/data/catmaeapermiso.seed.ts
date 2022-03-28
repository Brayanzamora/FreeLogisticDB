import { Permiso } from '../../../../entities/05-talent/catmaepermiso.entity';

export const PERMISOS: Permiso[] = [
  {
    id: 1,
    total_dias: 2,
    permisobtw: false,
    total_horas: 0,
    total_minutos: 0,
    fecha: new Date('2021-07-22 00:00:00'),
    hora_inicio: '06:00:00',
    hora_fin: '09:00:00',
    comentario: 'TESTT',
    flag: true,
    razon_id: 5,
    justificacion_id: 18,
    trabajador_id: 8,
  },
  {
    id: 2,
    total_dias: 10,
    permisobtw: false,
    total_horas: 0,
    total_minutos: 0,
    fecha: new Date('2021-07-30 00:00:00'),
    comentario: '',
    flag: true,
    razon_id: 6,
    justificacion_id: 19,
    trabajador_id: 4,
  },
];
