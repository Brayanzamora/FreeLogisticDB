import { Actividadestadotarea, TipoActivacion } from "../../../../entities/06-project/catmaeactividadestadotarea.entity";

export const ACTIVIDAD_ESTADO_TAREA: Actividadestadotarea[] = [
  {
    id:1,
    nombre: "DONE",
    abbr: "DN",
    tipoactivacion: TipoActivacion.FIN,
    color: "#2C2C2C",
    flag: true
  },
  {
    id:2,
    nombre: "IN PROGRESS",
    abbr: "IP",
    tipoactivacion: TipoActivacion.INICIO,
    color: "#9FD895",
    flag: true
  },
  {
    id:3,
    nombre: "NOT ASSIGNED",
    abbr: "NA",
    tipoactivacion: TipoActivacion.NINGUNO,
    color: "#00BCD4",
    flag: true
  },
  {
    id:4,
    nombre: "NOT STARTED",
    abbr: "NS",
    tipoactivacion: TipoActivacion.PREDETERMINADO,
    color: "#5A81FB",
    flag: true
  },
  {
    id:5,
    nombre: "NOTIFIED",
    abbr: "NF",
    tipoactivacion: TipoActivacion.NINGUNO,
    color: "#FFEB3B",
    flag: true
  },
  {
    id:6,
    nombre: "WITHOUT TASK",
    abbr: "WT",
    tipoactivacion: TipoActivacion.NINGUNO,
    color: "#FFBF00",
    flag: true
  },
];
