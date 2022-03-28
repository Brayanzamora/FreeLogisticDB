import {
  ReglasNegocio,
  TipoValor,
} from '../../../../entities/01-commons/catmaereglasdenegocio.entity';

export const REGLAS_NEGOCIO: ReglasNegocio[] = [
  {
    id: 1,
    nombre: 'I.G.V.',
    descripcion: 'Es el Impuesto General a las Ventas',
    clave: 'CONTABILIDAD',
    valor: '18',
    tipoValor: TipoValor.NUMBER,
    modulo: 'CONTABILIDAD',
  },
  {
    id: 2,
    nombre: 'Hora extra regular.',
    descripcion: 'Indica el porcentaje por hora extra en dia no festivo.',
    clave: 'HORA_EXTRA_REGULAR',
    valor: '20',
    tipoValor: TipoValor.PERCENT,
    modulo: 'TALENT',
  },
  {
    id: 3,
    nombre: 'Hora extra en dia festivo',
    descripcion: 'Indica el porcentaje por hora extra en dia festivo',
    clave: 'HORA_EXTRA_FESTIVO',
    valor: '30',
    tipoValor: TipoValor.PERCENT,
    modulo: 'TALENT',
  },
  {
    id: 4,
    nombre: 'Essalud',
    descripcion: 'Aporte a Essalud',
    clave: 'CONTRATO_HABER1',
    valor: 'Essalud',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 5,
    nombre: 'Póliza de Seguro',
    descripcion: 'Póliza Seguro',
    clave: 'CONTRATO_HABER2',
    valor: 'Póliza de seguro',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 6,
    nombre: 'Asignación Familiar',
    descripcion: 'Asignación Familiar',
    clave: 'CONTRATO_HABER3',
    valor: 'Asig. Familiar',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 7,
    nombre: 'Bono de productividad',
    descripcion: 'Bono de productividad',
    clave: 'CONTRATO_HABER4',
    valor: 'Bono',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 8,
    nombre: 'Quinta categoría',
    descripcion: 'Quinta categoría',
    clave: 'CONTRATO_EGRESO1',
    valor: '5ta Categoría',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 9,
    nombre: 'Fondo para la Jubiliación',
    descripcion: 'Fondo para la Jubiliación',
    clave: 'CONTRATO_EGRESO2',
    valor: 'Pensión',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 10,
    nombre: 'Egreso 3',
    descripcion: 'Egreso 3',
    clave: 'CONTRATO_EGRESO3',
    valor: 'Egreso 3',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 11,
    nombre: 'Egreso 4',
    descripcion: 'Egreso 4',
    clave: 'CONTRATO_EGRESO4',
    valor: 'EXTRA',
    tipoValor: TipoValor.STRING,
    modulo: 'TALENT',
  },
  {
    id: 12,
    nombre: 'Muestra fecha de incidente segun tipo de hora extra',
    descripcion:
      'Almacena el id del compendio en el que se quiere mostrar las fechas de incidente',
    clave: 'TIPOHORAEXTRA_MUESTRAINCIDENTES',
    valor: '264',
    tipoValor: TipoValor.NUMBER,
    modulo: 'TALENT',
  },
  {
    id: 13,
    nombre: 'ID de TIPO DOCUMENTO de RAZON SOCIAL',
    descripcion:
      'Almacena el id del tipo de documento razon social. Se utiliza para identificar si el campo que se va a ingresar es razon social, si es asi se muestra el campo',
    clave: 'PERSONA_ID_RAZONSOCIAL',
    valor: '133',
    tipoValor: TipoValor.NUMBER,
    modulo: 'TALENT',
  },
  {
    id: 14,
    nombre: 'Fecha inicio PERIODICIDAD',
    descripcion:
      'A partir del primer dia de la semana o mes donde se encuentre la fecha ingresada, se da inicio al contador general de SEMANAS - BISEMANAS - MESES',
    clave: 'FECHA_INICIO_PERIODICIDAD',
    valor: '2021-01-01',
    tipoValor: TipoValor.DATE,
    modulo: 'PROJECT',
  },
  {
    id: 15,
    nombre: 'Centro Costo por default para Trabajador',
    descripcion: 'Se registra el id del centro de costo  para el trabajador',
    clave: 'CENTRO_COSTO_ID_TRABAJADOR',
    valor: '395',
    tipoValor: TipoValor.NUMBER,
    modulo: 'TALENT',
  },
  {
    id: 16,
    nombre: 'Validación por default para Programación Standard',
    descripcion:
      'Se registra el id del tipo de validación LABORAL (detalle compendio)',
    clave: 'PROGRAMACION_STANDARD_VALIDACION_ID',
    valor: '176',
    tipoValor: TipoValor.NUMBER,
    modulo: 'TALENT',
  },
];