import { DetalleCompendio } from '../../../../entities/01-commons/catdetcompendio.entity';

export const DETALLE_COMPENDIO: DetalleCompendio[] = [
  // TABLA DE ACCESOS AL SISTEMA
  {
    id: 1,
    codigo: '01',
    nombre: 'Administrador',
    abbr: 'Admin',
    orden: 1,
    compendio_id: 1,
  },
  // TABLA DE PERFILES DEL SISTEMA
  // TABLA DE DOCUMENTOS DE LA PERSONA
  {
    id: 2,
    codigo: '01',
    nombre: 'DNI',
    orden: 1,
    compendio_id: 3,
  },
  {
    id: 3,
    codigo: '02',
    nombre: 'RUC',
    orden: 2,
    compendio_id: 3,
  },
  {
    id: 4,
    codigo: '03',
    nombre: 'Carnet de Extranjería',
    orden: 3,
    compendio_id: 3,
  },
  {
    id: 5,
    codigo: '04',
    nombre: 'Pase laboral',
    orden: 4,
    compendio_id: 3,
  },
  {
    id: 6,
    codigo: '05',
    nombre: 'Permiso de Conducir',
    orden: 5,
    compendio_id: 3,
  },
  {
    id: 7,
    codigo: '06',
    nombre: 'CARNET DE POLICIA',
    orden: 6,
    compendio_id: 3,
  },
  {
    id: 8,
    codigo: '07',
    nombre: 'CARNET DE SERVICIO MILITAR',
    orden: 7,
    compendio_id: 3,
  },
  // TABLA DE AREAS--
  // TABLA DE TIPOS DE SEXO
  {
    id: 9,
    codigo: '01',
    nombre: 'MASCULINO',
    abbr: 'M',
    orden: 1,
    compendio_id: 5,
  },
  {
    id: 10,
    codigo: '02',
    nombre: 'FEMENINO',
    abbr: 'F',
    orden: 2,
    compendio_id: 5,
  },
  {
    id: 11,
    codigo: '03',
    nombre: 'NO ESPECIFICA',
    abbr: 'NE',
    orden: 3,
    compendio_id: 5,
  },
  // TABLA DE ENTIDADES FINANCIERAS
  {
    id: 12,
    codigo: '01',
    nombre: 'NO ESPECIFICA',
    orden: 1,
    compendio_id: 6,
  },
  {
    id: 13,
    codigo: '01',
    nombre: 'CENTRAL RESERVA DEL PERU',
    orden: 1,
    compendio_id: 6,
  },
  {
    id: 14,
    codigo: '02',
    nombre: 'DE CREDITO DEL PERU',
    orden: 2,
    compendio_id: 6,
  },
  {
    id: 15,
    codigo: '03',
    nombre: 'INTERNACIONAL DEL PERU',
    orden: 3,
    compendio_id: 6,
  },
  { id: 16, codigo: '05', nombre: 'LATINO', orden: 4, compendio_id: 6 },
  {
    id: 17,
    codigo: '07',
    nombre: 'CITIBANK DEL PERU S.A.',
    orden: 5,
    compendio_id: 6,
  },
  {
    id: 18,
    codigo: '08',
    nombre: 'STANDARD CHARTERED',
    orden: 6,
    compendio_id: 6,
  },
  {
    id: 19,
    codigo: '09',
    nombre: 'SCOTIABANK PERU',
    orden: 7,
    compendio_id: 6,
  },
  { id: 20, codigo: '11', nombre: 'CONTINENTAL', orden: 8, compendio_id: 6 },
  { id: 21, codigo: '12', nombre: 'DE LIMA', orden: 9, compendio_id: 6 },
  { id: 22, codigo: '16', nombre: 'MERCANTIL', orden: 10, compendio_id: 6 },
  { id: 23, codigo: '18', nombre: 'NACION', orden: 11, compendio_id: 6 },
  {
    id: 24,
    codigo: '22',
    nombre: 'SANTANDER CENTRAL HISPANO',
    orden: 12,
    compendio_id: 6,
  },
  { id: 25, codigo: '23', nombre: 'DE COMERCIO', orden: 13, compendio_id: 6 },
  { id: 26, codigo: '25', nombre: 'REPUBLICA', orden: 14, compendio_id: 6 },
  { id: 27, codigo: '26', nombre: 'NBK BANK', orden: 15, compendio_id: 6 },
  { id: 28, codigo: '29', nombre: 'BANCOSUR', orden: 16, compendio_id: 6 },
  {
    id: 29,
    codigo: '35',
    nombre: 'FINANCIERO DEL PERU',
    orden: 17,
    compendio_id: 6,
  },
  { id: 30, codigo: '37', nombre: 'DEL PROGRESO', orden: 18, compendio_id: 6 },
  {
    id: 31,
    codigo: '38',
    nombre: 'INTERAMERICANO FINANZAS',
    orden: 19,
    compendio_id: 6,
  },
  { id: 32, codigo: '39', nombre: 'BANEX', orden: 20, compendio_id: 6 },
  { id: 33, codigo: '40', nombre: 'NUEVO MUNDO', orden: 21, compendio_id: 6 },
  { id: 34, codigo: '41', nombre: 'SUDAMERICANO', orden: 22, compendio_id: 6 },
  {
    id: 35,
    codigo: '42',
    nombre: 'DEL LIBERTADOR',
    orden: 23,
    compendio_id: 6,
  },
  { id: 36, codigo: '43', nombre: 'DEL TRABAJO', orden: 24, compendio_id: 6 },
  { id: 37, codigo: '44', nombre: 'SOLVENTA', orden: 25, compendio_id: 6 },
  { id: 38, codigo: '45', nombre: 'SERBANCO SA.', orden: 26, compendio_id: 6 },
  {
    id: 39,
    codigo: '46',
    nombre: 'BANK OF BOSTON',
    orden: 27,
    compendio_id: 6,
  },
  { id: 40, codigo: '47', nombre: 'ORION', orden: 28, compendio_id: 6 },
  { id: 41, codigo: '48', nombre: 'DEL PAIS', orden: 29, compendio_id: 6 },
  { id: 42, codigo: '49', nombre: 'MI BANCO', orden: 30, compendio_id: 6 },
  { id: 43, codigo: '50', nombre: 'BNP PARIBAS', orden: 31, compendio_id: 6 },
  {
    id: 44,
    codigo: '53',
    nombre: 'HSBC BANK PERU S.A.',
    orden: 32,
    compendio_id: 6,
  },
  { id: 45, codigo: '99', nombre: 'OTROS', orden: 33, compendio_id: 6 },
  // TABLA DE ZONAS
  { id: 46, codigo: 'C01', nombre: 'CALLAO', orden: 1, compendio_id: 7 },
  { id: 47, codigo: 'C02', nombre: 'BELLAVISTA', orden: 2, compendio_id: 7 },
  {
    id: 48,
    codigo: 'C03',
    nombre: 'CARMEN DE LA LEGUA',
    orden: 3,
    compendio_id: 7,
  },
  { id: 49, codigo: 'C04', nombre: 'LA PERLA', orden: 4, compendio_id: 7 },
  { id: 50, codigo: 'C05', nombre: 'LA PUNTA', orden: 5, compendio_id: 7 },
  { id: 51, codigo: 'C06', nombre: 'VENTANILLA', orden: 6, compendio_id: 7 },
  {
    id: 52,
    codigo: 'L01',
    nombre: 'CERCADO DE LIMA',
    orden: 7,
    compendio_id: 7,
  },
  { id: 53, codigo: 'L02', nombre: 'ANCON', orden: 8, compendio_id: 7 },
  { id: 54, codigo: 'L03', nombre: 'ATE', orden: 9, compendio_id: 7 },
  { id: 55, codigo: 'L04', nombre: 'BARRANCO', orden: 10, compendio_id: 7 },
  { id: 56, codigo: 'L05', nombre: 'BREÑA', orden: 11, compendio_id: 7 },
  { id: 57, codigo: 'L06', nombre: 'CARABAYLLO', orden: 12, compendio_id: 7 },
  { id: 58, codigo: 'L07', nombre: 'COMAS', orden: 13, compendio_id: 7 },
  { id: 59, codigo: 'L08', nombre: 'CHACLACAYO', orden: 14, compendio_id: 7 },
  { id: 60, codigo: 'L09', nombre: 'CHORRILLOS', orden: 15, compendio_id: 7 },
  { id: 61, codigo: 'L10', nombre: 'EL AGUSTINO', orden: 16, compendio_id: 7 },
  { id: 62, codigo: 'L11', nombre: 'JESUS MARIA', orden: 17, compendio_id: 7 },
  { id: 63, codigo: 'L12', nombre: 'LA MOLINA', orden: 18, compendio_id: 7 },
  { id: 64, codigo: 'L13', nombre: 'LA VICTORIA', orden: 19, compendio_id: 7 },
  { id: 65, codigo: 'L14', nombre: 'LINCE', orden: 20, compendio_id: 7 },
  {
    id: 66,
    codigo: 'L15',
    nombre: 'LURIGANCHO (CHOSICA)',
    orden: 21,
    compendio_id: 7,
  },
  { id: 67, codigo: 'L16', nombre: 'LURIN', orden: 22, compendio_id: 7 },
  { id: 68, codigo: 'L17', nombre: 'MAGDALENA', orden: 23, compendio_id: 7 },
  { id: 69, codigo: 'L18', nombre: 'MIRAFLORES', orden: 24, compendio_id: 7 },
  { id: 70, codigo: 'L19', nombre: 'PACHACAMAC', orden: 25, compendio_id: 7 },
  { id: 71, codigo: 'L20', nombre: 'PUCUSANA', orden: 26, compendio_id: 7 },
  { id: 72, codigo: 'L21', nombre: 'PUEBLO LIBRE', orden: 27, compendio_id: 7 },
  {
    id: 73,
    codigo: 'L22',
    nombre: 'PUENTE PIEDRA',
    orden: 28,
    compendio_id: 7,
  },
  { id: 74, codigo: 'L23', nombre: 'PUNTA NEGRA', orden: 29, compendio_id: 7 },
  {
    id: 75,
    codigo: 'L24',
    nombre: 'PUNTA HERMOSA',
    orden: 30,
    compendio_id: 7,
  },
  { id: 76, codigo: 'L25', nombre: 'RIMAC', orden: 31, compendio_id: 7 },
  { id: 77, codigo: 'L26', nombre: 'SAN BARTOLO', orden: 32, compendio_id: 7 },
  { id: 78, codigo: 'L27', nombre: 'SAN ISIDRO', orden: 33, compendio_id: 7 },
  {
    id: 79,
    codigo: 'L28',
    nombre: 'INDEPENDENCIA',
    orden: 34,
    compendio_id: 7,
  },
  {
    id: 80,
    codigo: 'L29',
    nombre: 'SAN JUAN DE MIRAFLORES',
    orden: 35,
    compendio_id: 7,
  },
  { id: 81, codigo: 'L30', nombre: 'SAN LUIS', orden: 36, compendio_id: 7 },
  {
    id: 82,
    codigo: 'L31',
    nombre: 'SAN MARTIN DE PORRES',
    orden: 37,
    compendio_id: 7,
  },
  { id: 83, codigo: 'L32', nombre: 'SAN MIGUEL', orden: 38, compendio_id: 7 },
  {
    id: 84,
    codigo: 'L33',
    nombre: 'SANTIAGO DE SURCO',
    orden: 39,
    compendio_id: 7,
  },
  { id: 85, codigo: 'L34', nombre: 'SURQUILLO', orden: 40, compendio_id: 7 },
  {
    id: 86,
    codigo: 'L35',
    nombre: 'VILLA MARIA DEL TRIUNFO',
    orden: 41,
    compendio_id: 7,
  },
  {
    id: 87,
    codigo: 'L36',
    nombre: 'SAN JUAN DE LURIGANCHO',
    orden: 42,
    compendio_id: 7,
  },
  {
    id: 88,
    codigo: 'L37',
    nombre: 'SANTA MARIA DEL MAR',
    orden: 43,
    compendio_id: 7,
  },
  { id: 89, codigo: 'L38', nombre: 'SANTA ROSA', orden: 44, compendio_id: 7 },
  { id: 90, codigo: 'L39', nombre: 'LOS OLIVOS', orden: 45, compendio_id: 7 },
  { id: 91, codigo: 'L40', nombre: 'CIENEGUILLA', orden: 46, compendio_id: 7 },
  { id: 92, codigo: 'L41', nombre: 'SAN BORJA', orden: 47, compendio_id: 7 },
  {
    id: 93,
    codigo: 'L42',
    nombre: 'VILLA EL SALVADOR',
    orden: 48,
    compendio_id: 7,
  },
  { id: 94, codigo: 'L43', nombre: 'SANTA ANITA', orden: 49, compendio_id: 7 },
  {
    id: 95,
    codigo: 'L91',
    nombre: 'RICARDO PALMA',
    orden: 50,
    compendio_id: 7,
  },
  {
    id: 96,
    codigo: 'L92',
    nombre: 'SANTA EULALIA',
    orden: 51,
    compendio_id: 7,
  },
  // TABLA DE MONEDAS
  {
    id: 97,
    codigo: '01',
    nombre: 'Soles',
    abbr: 'S',
    orden: 1,
    compendio_id: 8,
  },
  {
    id: 98,
    codigo: '02',
    nombre: 'Dolares',
    abbr: 'USD',
    orden: 2,
    compendio_id: 8,
  },
  // TABLA DE MEDIOS DE PAGO
  {
    id: 99,
    codigo: '006',
    nombre: 'TARJETA DE CREDITO',
    orden: 1,
    compendio_id: 9,
  },
  {
    id: 100,
    codigo: '007',
    nombre: 'CHEQUE NO NEGOCIABLE',
    orden: 2,
    compendio_id: 9,
  },
  {
    id: 101,
    codigo: '008',
    nombre: 'EFECTIVO N.E.O.U.M.P.',
    orden: 3,
    compendio_id: 9,
  },
  {
    id: 102,
    codigo: '009',
    nombre: 'EFECTIVO EN LOS DEMAS CASOS',
    orden: 4,
    compendio_id: 9,
  },
  {
    id: 103,
    codigo: '010',
    nombre: 'M.P. DE COMERCIO EXTERIOR',
    orden: 5,
    compendio_id: 9,
  },
  {
    id: 12,
    codigo: '011',
    nombre: 'LETRAS DE CAMBIO',
    orden: 6,
    compendio_id: 9,
  },
  {
    id: 104,
    codigo: '101',
    nombre: 'TRANSFERENCIAS COM. EXT.',
    orden: 7,
    compendio_id: 9,
  },
  {
    id: 105,
    codigo: '102',
    nombre: 'CHEQUES BANCO COM. EXT.',
    orden: 8,
    compendio_id: 9,
  },
  {
    id: 106,
    codigo: '103',
    nombre: 'ORDEN DE PAGO SIMPLE COM. EXT.',
    orden: 9,
    compendio_id: 9,
  },
  {
    id: 107,
    codigo: '104',
    nombre: 'ORDEN DE PAGO DOCUM. COM. EXT.',
    orden: 10,
    compendio_id: 9,
  },
  {
    id: 108,
    codigo: '105',
    nombre: 'REMESA SIMPLE COM. EXT.',
    orden: 11,
    compendio_id: 9,
  },
  {
    id: 109,
    codigo: '106',
    nombre: 'REMESA DOCU. COM. EXT.',
    orden: 12,
    compendio_id: 9,
  },
  {
    id: 110,
    codigo: '107',
    nombre: 'CARTA DE CREDITO SIMPLE COM. EXT.',
    orden: 13,
    compendio_id: 9,
  },
  {
    id: 111,
    codigo: '108',
    nombre: 'CARTA DE CREDITO DOCU. COM. EXT.',
    orden: 14,
    compendio_id: 9,
  },
  {
    id: 112,
    codigo: '999',
    nombre: 'OTROS MEDIOS DE PAGO',
    orden: 15,
    compendio_id: 9,
  },
  // TABLA DE PRESUPUESTOS--
  // TABLA DE TIPOS DE COMPROBANTE DE PAGO O DOCUMENTO
  { id: 113, codigo: '00', nombre: 'OTROS', orden: 1, compendio_id: 11 },
  { id: 114, codigo: '01', nombre: 'FACTURA', orden: 2, compendio_id: 11 },
  {
    id: 115,
    codigo: '02',
    nombre: 'RECIBO POR HONORARIOS',
    orden: 3,
    compendio_id: 11,
  },
  {
    id: 116,
    codigo: '03',
    nombre: 'BOLETA DE VENTA',
    orden: 4,
    compendio_id: 11,
  },
  {
    id: 117,
    codigo: '04',
    nombre: 'LIQUIDACION DE COMPRA',
    orden: 5,
    compendio_id: 11,
  },
  {
    id: 118,
    codigo: '05',
    nombre: 'BOLETO DE AVION',
    orden: 6,
    compendio_id: 11,
  },
  {
    id: 119,
    codigo: '06',
    nombre: 'CARTA DE PORTE AEREO',
    orden: 7,
    compendio_id: 11,
  },
  {
    id: 120,
    codigo: '07',
    nombre: 'NOTA DE CREDITO',
    orden: 8,
    compendio_id: 11,
  },
  {
    id: 121,
    codigo: '08',
    nombre: 'NOTA DE DEBITO',
    orden: 9,
    compendio_id: 11,
  },
  {
    id: 122,
    codigo: '09',
    nombre: 'GUIA DE REMISION',
    orden: 10,
    compendio_id: 11,
  },
  {
    id: 123,
    codigo: '10',
    nombre: 'RECIBO DE ARRENDAMIENTO',
    orden: 11,
    compendio_id: 11,
  },
  {
    id: 124,
    codigo: '11',
    nombre: '	POLIZA BOLSA DE VALORES',
    orden: 12,
    compendio_id: 11,
  },
  {
    id: 125,
    codigo: '12',
    nombre: 'TICKET MAQUINA REGISTRADORA',
    orden: 13,
    compendio_id: 11,
  },
  {
    id: 126,
    codigo: '13',
    nombre: 'DOCUMENTO BANCOS',
    orden: 14,
    compendio_id: 11,
  },
  {
    id: 127,
    codigo: '14',
    nombre: 'RECIBO SERVICIOS PUBLICOS',
    orden: 15,
    compendio_id: 11,
  },
  {
    id: 128,
    codigo: '15',
    nombre: 'BOLETO TRANSPORTE PUBLICO',
    orden: 16,
    compendio_id: 11,
  },
  {
    id: 129,
    codigo: '16',
    nombre: 'BOLETO DE VIAJE T.P.',
    orden: 17,
    compendio_id: 11,
  },
  {
    id: 130,
    codigo: '17',
    nombre: 'DOCUMENTO IGLESIA CATOLICA',
    orden: 18,
    compendio_id: 11,
  },
  {
    id: 131,
    codigo: '18',
    nombre: 'DOCUMENTO AFP',
    orden: 1,
    compendio_id: 11,
  },
  {
    id: 132,
    codigo: '19',
    nombre: 'BOLETO ESPECT. PUBLICOS',
    orden: 19,
    compendio_id: 11,
  },
  {
    id: 133,
    codigo: '20',
    nombre: 'COMP. DE RETENCION',
    orden: 20,
    compendio_id: 11,
  },
  {
    id: 134,
    codigo: '21',
    nombre: 'CONOCIMIENTO DE EMBARQUE',
    orden: 21,
    compendio_id: 11,
  },
  {
    id: 135,
    codigo: '22',
    nombre: 'COMPROBANTE NO HABITUAL',
    orden: 22,
    compendio_id: 11,
  },
  {
    id: 136,
    codigo: '23',
    nombre: 'POLIZA DE ADJUDICACION',
    orden: 23,
    compendio_id: 11,
  },
  {
    id: 137,
    codigo: '24',
    nombre: 'CERTIFICADO REGALIAS',
    orden: 24,
    compendio_id: 11,
  },
  {
    id: 138,
    codigo: '25',
    nombre: 'DOC. ATRIB. ISC.',
    orden: 25,
    compendio_id: 11,
  },
  {
    id: 139,
    codigo: '26',
    nombre: 'RECIBO UNIDAD DE AGUA',
    orden: 26,
    compendio_id: 11,
  },
  {
    id: 140,
    codigo: '27',
    nombre: 'SEGURO C.T.R.',
    orden: 27,
    compendio_id: 11,
  },
  {
    id: 141,
    codigo: '28',
    nombre: 'TARIFA U. AEROPUERTO',
    orden: 28,
    compendio_id: 11,
  },
  {
    id: 142,
    codigo: '29',
    nombre: 'DOC. COFOPRI',
    orden: 29,
    compendio_id: 11,
  },
  {
    id: 143,
    codigo: '30',
    nombre: 'DOC. EMP. EN T.CRED.',
    orden: 30,
    compendio_id: 11,
  },
  {
    id: 144,
    codigo: '31',
    nombre: 'GUIA DE REMISION TRANSPORTISTA',
    orden: 31,
    compendio_id: 11,
  },
  {
    id: 145,
    codigo: '32',
    nombre: 'DOC. IND. GAS NATURAL',
    orden: 32,
    compendio_id: 11,
  },
  {
    id: 146,
    codigo: '34',
    nombre: 'DOC. OPERADOR	',
    orden: 33,
    compendio_id: 11,
  },
  {
    id: 147,
    codigo: '35',
    nombre: 'DOC. PARTICIPE	',
    orden: 34,
    compendio_id: 11,
  },
  {
    id: 148,
    codigo: '36',
    nombre: 'REC. DIST. GAS NATURAL',
    orden: 35,
    compendio_id: 11,
  },
  {
    id: 149,
    codigo: '37',
    nombre: 'DOC. REV. TEC. VEHICULAR',
    orden: 36,
    compendio_id: 11,
  },
  {
    id: 150,
    codigo: '50',
    nombre: 'D.U.A. IMPORTACION',
    orden: 37,
    compendio_id: 11,
  },
  {
    id: 151,
    codigo: '52',
    nombre: 'DESP. SIMP. IMP. SIMP.',
    orden: 38,
    compendio_id: 11,
  },
  {
    id: 152,
    codigo: '53',
    nombre: 'DECLARAC. MENSAJERIA',
    orden: 39,
    compendio_id: 11,
  },
  {
    id: 153,
    codigo: '54',
    nombre: 'LIQUID. COBRANZAS',
    orden: 40,
    compendio_id: 11,
  },
  {
    id: 154,
    codigo: '87',
    nombre: 'NOTA DE CREDITO ES.',
    orden: 41,
    compendio_id: 11,
  },
  {
    id: 155,
    codigo: '88',
    nombre: 'NOTA DE DEBITO ES.',
    orden: 42,
    compendio_id: 11,
  },
  {
    id: 156,
    codigo: '91',
    nombre: 'COMP. DE NO DOMICILIADO',
    orden: 43,
    compendio_id: 11,
  },
  {
    id: 157,
    codigo: '96',
    nombre: 'EXC. CRED. FISC. RETIRO DE BIENES',
    orden: 44,
    compendio_id: 11,
  },
  {
    id: 158,
    codigo: '97',
    nombre: 'N.C. NO DOMICILIADO',
    orden: 45,
    compendio_id: 11,
  },
  {
    id: 159,
    codigo: '98',
    nombre: 'N.D. NO DOMICILIADO',
    orden: 46,
    compendio_id: 11,
  },
  {
    id: 160,
    codigo: '99',
    nombre: 'CONSOLID. BOLETAS VN',
    orden: 47,
    compendio_id: 11,
  },
  {
    id: 161,
    codigo: 'BP',
    nombre: 'BOLETA DE PAGO',
    orden: 48,
    compendio_id: 11,
  },
  {
    id: 162,
    codigo: 'BS',
    nombre: 'BOLETA DE SUELDO',
    orden: 49,
    compendio_id: 11,
  },
  { id: 163, codigo: 'CH', nombre: 'CHEQUE', orden: 50, compendio_id: 11 },
  {
    id: 164,
    codigo: 'CP',
    nombre: 'COMPROBANTE DE PERCEPCION',
    orden: 51,
    compendio_id: 11,
  },
  { id: 165, codigo: 'DP', nombre: 'DEPOSITO	', orden: 52, compendio_id: 11 },
  { id: 166, codigo: 'LE', nombre: 'LETRA	', orden: 53, compendio_id: 11 },
  {
    id: 167,
    codigo: 'RE',
    nombre: 'RECIBO DE EGRESO',
    orden: 54,
    compendio_id: 11,
  },
  {
    id: 168,
    codigo: 'RI',
    nombre: 'RECIBO DE INGRESO',
    orden: 55,
    compendio_id: 11,
  },
  // TABLA DE ESTADO DE VACACIONES--
  // TABLA DE HORAS EXTRA
  { id: 169, codigo: '01', nombre: 'BACKUP', orden: 1, compendio_id: 13 },
  { id: 170, codigo: '02', nombre: 'CAPACITACION', orden: 2, compendio_id: 13 },
  { id: 171, codigo: '03', nombre: 'PRIMARY', orden: 3, compendio_id: 13 },
  { id: 172, codigo: '04', nombre: 'ONCALL', orden: 4, compendio_id: 13 },
  { id: 173, codigo: '05', nombre: 'TASK', orden: 5, compendio_id: 13 },
  // TABLA DE ESTADOS DE PERIODO--
  // TABLA DE ESTADOS DE VALIDACION
  { id: 174, codigo: '01', nombre: 'Descanso', orden: 1, compendio_id: 15 },
  { id: 175, codigo: '02', nombre: 'Feriado', orden: 2, compendio_id: 15 },
  { id: 176, codigo: '03', nombre: 'Laboral', orden: 3, compendio_id: 15 },
  { id: 177, codigo: '04', nombre: 'Vacaciones', orden: 4, compendio_id: 15 },
  { id: 178, codigo: '05', nombre: 'Cliente', orden: 5, compendio_id: 15 },

  // TABLA DE AREA DE CLIENTE
  {
    id: 179,
    codigo: '01',
    nombre: 'Administracion',
    orden: 1,
    compendio_id: 16,
  },
  { id: 180, codigo: '02', nombre: 'Contabilidad', orden: 2, compendio_id: 16 },
  { id: 181, codigo: '03', nombre: 'Comercial', orden: 3, compendio_id: 16 },
  {
    id: 182,
    codigo: '04',
    nombre: 'Ingenieria Comercial',
    orden: 4,
    compendio_id: 16,
  },
  {
    id: 183,
    codigo: '05',
    nombre: 'Ingenieria Sistemas',
    orden: 5,
    compendio_id: 16,
  },
  // TABLA DE ESTADOS DE FACTURA
  { id: 184, codigo: '01', nombre: 'INVOICE PAID', orden: 1, compendio_id: 17 },
  {
    id: 185,
    codigo: '02',
    nombre: 'INVOICE TO COLLECT',
    orden: 2,
    compendio_id: 17,
  },
  { id: 186, codigo: '03', nombre: 'PO ACTIVE', orden: 3, compendio_id: 17 },
  { id: 187, codigo: '04', nombre: 'PO PENDINGS', orden: 4, compendio_id: 17 },
  // TABLA DE FASE DE PROYECTO
  { id: 188, codigo: '01', nombre: 'ANALISIS', orden: 1, compendio_id: 18 },
  { id: 189, codigo: '02', nombre: 'DESPLIEGUE', orden: 2, compendio_id: 18 },
  { id: 190, codigo: '03', nombre: 'DISEÑO', orden: 3, compendio_id: 18 },
  { id: 191, codigo: '04', nombre: 'DESARROLLO', orden: 4, compendio_id: 18 },
  { id: 192, codigo: '05', nombre: 'PRE KICK-OFF', orden: 5, compendio_id: 18 },
  { id: 193, codigo: '06', nombre: 'TESTING', orden: 6, compendio_id: 18 },
  { id: 194, codigo: '07', nombre: 'SIN FASE', orden: 7, compendio_id: 18 },
  // TABLA DE PRIORIDAD DEL PROYECTO
  { id: 195, codigo: '01', nombre: 'ALTA', orden: 1, compendio_id: 19 },
  { id: 196, codigo: '02', nombre: 'MEDIA', orden: 2, compendio_id: 19 },
  { id: 197, codigo: '03', nombre: 'BAJA', orden: 3, compendio_id: 19 },
  // TABLA DE ESTADO DE PROYECTO
  { id: 198, codigo: '01', nombre: 'REGISTRO', orden: 1, compendio_id: 20 },
  {
    id: 199,
    codigo: '02',
    nombre: 'DESCUBRIMIENTO',
    orden: 2,
    compendio_id: 20,
  },
  { id: 200, codigo: '03', nombre: 'CALIFICACION', orden: 3, compendio_id: 20 },
  { id: 201, codigo: '04', nombre: 'PROPUESTA', orden: 4, compendio_id: 20 },
  { id: 202, codigo: '05', nombre: 'NEGOCIACION', orden: 5, compendio_id: 20 },
  // TABLA DE TIPO DE PROYECTO
  {
    id: 203,
    codigo: '01',
    nombre: 'BUILDING PROJECTS',
    orden: 1,
    compendio_id: 21,
  },
  {
    id: 204,
    codigo: '02',
    nombre: 'CEMENT PROJECTS',
    orden: 2,
    compendio_id: 21,
  },
  { id: 205, codigo: '03', nombre: 'FABRICA', orden: 3, compendio_id: 21 },
  { id: 206, codigo: '04', nombre: 'GERENCIA', orden: 4, compendio_id: 21 },
  { id: 207, codigo: '05', nombre: 'INGENIERIA', orden: 5, compendio_id: 21 },
  {
    id: 208,
    codigo: '06',
    nombre: 'LICENCIAMIENTO',
    orden: 6,
    compendio_id: 21,
  },
  { id: 209, codigo: '07', nombre: 'ONG', orden: 7, compendio_id: 21 },
  { id: 210, codigo: '08', nombre: 'OPERACIONES', orden: 8, compendio_id: 21 },
  // TABLA RAZON PROYECTO
  { id: 211, codigo: '01', nombre: 'ALERTA', orden: 1, compendio_id: 22 },
  { id: 212, codigo: '02', nombre: 'PERMISO', orden: 2, compendio_id: 22 },
  { id: 213, codigo: '03', nombre: 'SOLICITUD', orden: 3, compendio_id: 22 },
  // TABLA DE ESTADO DE LA TAREA
  { id: 214, codigo: '01', nombre: 'COMPLETADO', orden: 1, compendio_id: 23 },
  { id: 215, codigo: '02', nombre: 'EN PROGRESO', orden: 2, compendio_id: 23 },
  { id: 216, codigo: '03', nombre: 'NO ASIGNADO', orden: 3, compendio_id: 23 },
  { id: 217, codigo: '04', nombre: 'SIN EMPEZAR', orden: 4, compendio_id: 23 },
  { id: 218, codigo: '05', nombre: 'NOTIFICADO', orden: 5, compendio_id: 23 },
  { id: 219, codigo: '06', nombre: 'SIN TAREA', orden: 6, compendio_id: 23 },
  // TABLA DE CALIFICACION RECURSO
  {
    id: 220,
    codigo: '01',
    nombre: 'SIN CALIFICACION',
    orden: 1,
    compendio_id: 24,
  },
  // TABLA DE CATEGORIA DE RECURSO
  { id: 221, codigo: '01', nombre: 'JUNIOR', orden: 1, compendio_id: 25 },
  { id: 222, codigo: '02', nombre: 'SEMI SENIOR', orden: 2, compendio_id: 25 },
  { id: 223, codigo: '03', nombre: 'SENIOR', orden: 3, compendio_id: 25 },
  {
    id: 224,
    codigo: '04',
    nombre: 'SIN CATEGORIA',
    orden: 4,
    compendio_id: 25,
  },
  // TABLA DE TIPO CONTRATO
  {
    id: 225,
    codigo: '01',
    nombre: 'TIEMPO COMPLETO',
    orden: 1,
    compendio_id: 26,
  },
  {
    id: 226,
    codigo: '02',
    nombre: 'RECURSO FANTASMA',
    orden: 2,
    compendio_id: 26,
  },
  { id: 227, codigo: '03', nombre: 'MEDIO TIEMPO', orden: 3, compendio_id: 26 },
  { id: 228, codigo: '04', nombre: 'SIN CONTRATO', orden: 4, compendio_id: 26 },
  // TABLA DE PERFIL RECURSO
  {
    id: 229,
    codigo: '01',
    nombre: 'DASHBOARD DESIGNER',
    orden: 1,
    compendio_id: 27,
  },
  // TABLA DE ESTADO RECURSO
  {
    id: 230,
    codigo: '01',
    nombre: 'ACTIVO',
    orden: 1,
    compendio_id: 28,
  },
  // TABLA DE TIPO DE RECURSO
  { id: 231, codigo: '01', nombre: 'Trabajo', orden: 1, compendio_id: 29 },
  { id: 232, codigo: '02', nombre: 'Material', orden: 2, compendio_id: 29 },
  { id: 233, codigo: '03', nombre: 'Costo', orden: 3, compendio_id: 29 },
  // TABLA DE MEDIOS DE CONTACTO
  { id: 234, codigo: '01', nombre: 'Celular', orden: 1, compendio_id: 30 },
  { id: 235, codigo: '02', nombre: 'Correo', orden: 2, compendio_id: 30 },
  {
    id: 236,
    codigo: '03',
    nombre: 'Teléfono Fijo',
    orden: 3,
    compendio_id: 30,
  },
  {
    id: 237,
    codigo: '04',
    nombre: 'Correo Corporativo',
    orden: 4,
    compendio_id: 30,
  },
  {
    id: 238,
    codigo: '05',
    nombre: 'Número de oficina',
    orden: 5,
    compendio_id: 30,
  },
  // TABLA DE NOMBRES DE TIPO PERSONA
  { id: 239, codigo: '01', nombre: 'CLIENTE', orden: 1, compendio_id: 31 },
  { id: 240, codigo: '02', nombre: 'TRABAJADOR', orden: 2, compendio_id: 31 },
  { id: 241, codigo: '03', nombre: 'PROVEEDOR', orden: 3, compendio_id: 31 },
  { id: 242, codigo: '04', nombre: 'OTROS', orden: 4, compendio_id: 31 },
  // TABLA DE TIPOS DE CONTRATO
  {
    id: 243,
    codigo: '01',
    nombre: 'Honorarios',
    orden: 1,
    color: 'FF7E7E',
    compendio_id: 32,
  },
  {
    id: 244,
    codigo: '02',
    nombre: 'Planilla',
    orden: 2,
    color: 'FFBF00',
    compendio_id: 32,
  },
  {
    id: 245,
    codigo: '03',
    nombre: 'Pasantía',
    orden: 3,
    color: '5A81FB',
    compendio_id: 32,
  },
  {
    id: 246,
    codigo: '04',
    nombre: 'Terceros',
    orden: 4,
    color: '9FD895',
    compendio_id: 32,
  },
  // TABLA DE CLASE DE CONTRATO
  { id: 247, codigo: '01', nombre: 'Indefinido', orden: 1, compendio_id: 33 },
  {
    id: 248,
    codigo: '02',
    nombre: 'Contrato Personal Extranjero',
    orden: 2,
    compendio_id: 33,
  },
  {
    id: 249,
    codigo: '03',
    nombre: 'Indeterminano',
    orden: 3,
    compendio_id: 33,
  },
  { id: 250, codigo: '04', nombre: 'Plazo Fijo', orden: 4, compendio_id: 33 },
  {
    id: 251,
    codigo: '05',
    nombre: 'Locación de Servicios Profesionales',
    orden: 5,
    compendio_id: 33,
  },
  {
    id: 252,
    codigo: '06',
    nombre: 'Convenio de Pasantía',
    orden: 6,
    compendio_id: 33,
  },
  // TABLA DE DIA DE SEMANA
  { id: 253, codigo: '01', nombre: 'Lunes', orden: 1, compendio_id: 34 },
  { id: 254, codigo: '02', nombre: 'Martes', orden: 2, compendio_id: 34 },
  { id: 255, codigo: '03', nombre: 'Miercoles', orden: 3, compendio_id: 34 },
  { id: 256, codigo: '04', nombre: 'Jueves', orden: 4, compendio_id: 34 },
  { id: 257, codigo: '05', nombre: 'Viernes', orden: 5, compendio_id: 34 },
  { id: 258, codigo: '06', nombre: 'Sábado', orden: 6, compendio_id: 34 },
  { id: 259, codigo: '07', nombre: 'Domingo', orden: 7, compendio_id: 34 },
  // TABLA DE RAZON DE PERMISOS--
  // TABLA DE JUSTIFICACION DE PERMISOS--
  // TABLA DE CAMPO
  { id: 260, codigo: '01', nombre: 'string', orden: 1, compendio_id: 37 },
  { id: 261, codigo: '02', nombre: 'number', orden: 2, compendio_id: 37 },
  { id: 262, codigo: '03', nombre: 'date', orden: 3, compendio_id: 37 },
  // TABLA DE GRUPO DE PREGUNTA
  { id: 263, codigo: '01', nombre: 'Recursos', orden: 1, compendio_id: 39 },
  { id: 264, codigo: '02', nombre: 'Team Leader', orden: 2, compendio_id: 39 },
  { id: 265, codigo: '03', nombre: 'Equipo', orden: 3, compendio_id: 39 },
  {
    id: 266,
    codigo: '04',
    nombre: 'Desarrollo Profesional',
    orden: 4,
    compendio_id: 39,
  },
  {
    id: 267,
    codigo: '05',
    nombre: 'Factor Gallup',
    orden: 5,
    compendio_id: 39,
  },
  // TABLA DE GIROS--
  // TABLA DE PAIS
  { id: 268, codigo: '01', nombre: 'PERÚ', orden: 1, compendio_id: 41 },
  { id: 269, codigo: '02', nombre: 'CHILE', orden: 2, compendio_id: 41 },
  {
    id: 270,
    codigo: '03',
    nombre: 'ESTADOS UNIDOS',
    orden: 3,
    compendio_id: 41,
  },
  // TABLA TIPO DE PROVEEDOR--
  // TABLA DE CATEGORIA DEL PROVEEDOR--
  // TABLA ESTADOS DEL PROVEEDOR--
  // TABLA DE UNIDAD DE NEGOCIOS PARA ARTICULOS--
  // TABLA DE UNIDAD DE MEDIDA PARA ARTICULOS
  { id: 271, codigo: '01', nombre: 'UNIDAD', orden: 1, compendio_id: 46 },
  { id: 272, codigo: '02', nombre: 'KILOGRAMO', orden: 2, compendio_id: 46 },
  // TABLA DE TIPOS DE CLIENTES--
  // TABLA DE TIPO DE IDENTIFICACION--
  // TABLA DE CONDICION DE PAGO
  { id: 273, codigo: '01', nombre: 'Contado', orden: 1, compendio_id: 49 },
  {
    id: 274,
    codigo: '02',
    nombre: 'Crédito 30 días',
    orden: 2,
    compendio_id: 49,
  },
  {
    id: 275,
    codigo: '03',
    nombre: 'Crédito 60 días',
    orden: 3,
    compendio_id: 49,
  },
  {
    id: 276,
    codigo: '04',
    nombre: 'Crédito 90 días',
    orden: 4,
    compendio_id: 49,
  },
  { id: 277, codigo: '05', nombre: 'Otro', orden: 5, compendio_id: 49 },
  // TABLA DE MOTIVO DE MOVIMIENTO
  { id: 278, codigo: '01', nombre: 'Salida', orden: 1, compendio_id: 50 },
  { id: 279, codigo: '02', nombre: 'Traspaso', orden: 2, compendio_id: 50 },
  { id: 280, codigo: '03', nombre: 'Venta', orden: 3, compendio_id: 50 },
  // TABLA DE TIPO TRANSACCIONES
  { id: 281, codigo: '01', nombre: 'Ingreso', orden: 1, compendio_id: 51 },
  // TABLA DE ESTADO DE RECEPCION DEL PEDIDO
  { id: 282, codigo: '01', nombre: 'Exelente', orden: 1, compendio_id: 52 },
  { id: 283, codigo: '02', nombre: 'Bueno', orden: 2, compendio_id: 52 },
  { id: 284, codigo: '03', nombre: 'Regular', orden: 3, compendio_id: 52 },
  { id: 285, codigo: '04', nombre: 'Deficiente', orden: 4, compendio_id: 52 },
  // TABLA DE ESTADO DE LA DOCUMENTACION
  { id: 286, codigo: '01', nombre: 'Perfecto', orden: 1, compendio_id: 53 },
  { id: 287, codigo: '02', nombre: 'A Tiempo', orden: 2, compendio_id: 53 },
  { id: 288, codigo: '03', nombre: 'Completo', orden: 3, compendio_id: 53 },
  { id: 289, codigo: '04', nombre: 'Urgente', orden: 4, compendio_id: 53 },
  // TABLA DE CALIFICACION DEL PROVEEDOR
  { id: 290, codigo: '01', nombre: 'Buena', orden: 1, compendio_id: 54 },
  { id: 291, codigo: '02', nombre: 'Mala', orden: 2, compendio_id: 54 },
  // TABLA DE DESPACHO--
  // TABLA PERIODO DE ENCUESTA
  {
    id: 292,
    codigo: '01',
    nombre: 'PRIMER SEMESTRE',
    orden: 1,
    compendio_id: 56,
  },
  {
    id: 293,
    codigo: '02',
    nombre: 'SEGUNDO SEMESTRE',
    orden: 2,
    compendio_id: 56,
  },
  {
    id: 294,
    codigo: '03',
    nombre: 'PRIMER BIMESTRE',
    orden: 3,
    compendio_id: 56,
  },
  {
    id: 295,
    codigo: '04',
    nombre: 'SEGUNDO BIMESTRE',
    orden: 4,
    compendio_id: 56,
  },
  {
    id: 296,
    codigo: '05',
    nombre: 'TERCER BIMESTRE',
    orden: 5,
    compendio_id: 56,
  },
  // TABLA DE UNIDAD DE MEDIDA PRODUCTOS--
  // TABLA TIPO TITI
  {
    id: 297,
    codigo: '01',
    nombre: 'TIT TRANSACCION',
    orden: 1,
    compendio_id: 58,
  },
  {
    id: 298,
    codigo: '02',
    nombre: 'TITI DECISIONS',
    orden: 2,
    compendio_id: 58,
  },
  // TABLA TIPO META
  {
    id: 297,
    codigo: '01',
    nombre: 'Estimacion demanda',
    orden: 1,
    compendio_id: 59,
  },
  {
    id: 298,
    codigo: '02',
    nombre: 'Estimacion de pedido',
    orden: 2,
    compendio_id: 59,
  },
  {
    id: 299,
    codigo: '03',
    nombre: 'Estimacion de merma',
    orden: 3,
    compendio_id: 59,
  },
  {
    id: 300,
    codigo: '04',
    nombre: 'Estimacion Lead time',
    orden: 4,
    compendio_id: 59,
  },
  // TABLA DE ESTADOS COMPRA Y VENTA
  { id: 301, codigo: '01', nombre: 'Vigente', orden: 1, compendio_id: 60 },
  { id: 302, codigo: '02', nombre: 'Vencida', orden: 2, compendio_id: 60 },
  // TABLA PLAZO PAGO
  { id: 303, codigo: '01', nombre: '30', orden: 1, compendio_id: 61 },
  { id: 304, codigo: '02', nombre: '60', orden: 2, compendio_id: 61 },
  { id: 305, codigo: '03', nombre: '90', orden: 3, compendio_id: 61 },
  // TABLA DE CATEGORIA DE ESTUDIOS
  { id: 306, codigo: '01', nombre: 'Técnicos', orden: 1, compendio_id: 62 },
  {
    id: 307,
    codigo: '02',
    nombre: 'Universitarios',
    orden: 2,
    compendio_id: 62,
  },
  { id: 308, codigo: '03', nombre: 'Bachiller', orden: 3, compendio_id: 62 },
  { id: 309, codigo: '04', nombre: 'Sin estudios', orden: 4, compendio_id: 62 },
  // TABLA DE TIPO RENOVACION DE CONTRATO
  {
    id: 310,
    codigo: '01',
    nombre: 'Indefinido',
    orden: 1,
    color: 'C5D0E4',
    compendio_id: 63,
  },
  {
    id: 311,
    codigo: '02',
    nombre: 'Renovarcontrato',
    orden: 2,
    color: '5A81FB',
    compendio_id: 63,
  },
  {
    id: 312,
    codigo: '03',
    nombre: 'NoRenovarContrato',
    orden: 3,
    color: 'FF7E7E',
    compendio_id: 63,
  },
  {
    id: 313,
    codigo: '04',
    nombre: 'Pendiente',
    orden: 4,
    color: 'FFBF00',
    compendio_id: 63,
  },
  // TABLA DE TIEMPO DE RENOVACION DE CONTRATO
  {
    id: 314,
    codigo: '01',
    nombre: '1 Mes',
    orden: 1,
    color: '299C2B',
    compendio_id: 64,
  },
  {
    id: 315,
    codigo: '02',
    nombre: '3 Meses',
    orden: 2,
    color: 'FFBF00',
    compendio_id: 64,
  },
  {
    id: 316,
    codigo: '03',
    nombre: '6 meses',
    orden: 3,
    color: '5A81FB',
    compendio_id: 64,
  },
  {
    id: 317,
    codigo: '04',
    nombre: '12 meses',
    orden: 4,
    color: '9FD895',
    compendio_id: 64,
  },
  {
    id: 318,
    codigo: '05',
    nombre: 'Indeterminado',
    orden: 5,
    color: 'C5D0E4',
    compendio_id: 64,
  },
  // TABLA DE ESTADO CIVIL
  { id: 319, codigo: '01', nombre: 'Soltero', orden: 1, compendio_id: 65 },
  { id: 320, codigo: '02', nombre: 'Casado', orden: 2, compendio_id: 65 },
  { id: 321, codigo: '03', nombre: 'Viudo', orden: 3, compendio_id: 65 },
  { id: 322, codigo: '04', nombre: 'Divorciado', orden: 4, compendio_id: 65 },
  // TABLA DE NACIONALIDAD
  { id: 323, codigo: '01', nombre: 'Peruano', orden: 1, compendio_id: 66 },
  { id: 324, codigo: '02', nombre: 'Chileno', orden: 2, compendio_id: 66 },
  { id: 325, codigo: '03', nombre: 'Colombiano', orden: 3, compendio_id: 66 },
  { id: 326, codigo: '04', nombre: 'Argentino', orden: 4, compendio_id: 66 },
  { id: 327, codigo: '05', nombre: 'Camerunés', orden: 5, compendio_id: 66 },
  { id: 328, codigo: '06', nombre: 'Español', orden: 6, compendio_id: 66 },
  { id: 329, codigo: '07', nombre: 'Canadiense', orden: 7, compendio_id: 66 },
  // TABLA TIPO DE VOUCHER
  { id: 330, codigo: '01', nombre: 'MAGO', orden: 1, compendio_id: 67 },
  { id: 331, codigo: '02', nombre: 'TIPO', orden: 2, compendio_id: 67 },
  { id: 332, codigo: '03', nombre: 'MANUAL', orden: 3, compendio_id: 67 },
  // TABLA ACCIONES DE MENU
  { id: 333, codigo: '01', nombre: 'Ver', orden: 1, compendio_id: 68 },
  { id: 334, codigo: '02', nombre: 'Crear', orden: 2, compendio_id: 68 },
  { id: 335, codigo: '03', nombre: 'Editar', orden: 3, compendio_id: 68 },
  { id: 336, codigo: '04', nombre: 'Eliminar', orden: 4, compendio_id: 68 },
  { id: 337, codigo: '05', nombre: 'Estudios', orden: 5, compendio_id: 68 },
  {
    id: 338,
    codigo: '06',
    nombre: 'MedioRequerido',
    orden: 6,
    compendio_id: 68,
  },
  { id: 339, codigo: '07', nombre: 'Preguntas', orden: 7, compendio_id: 68 },
  { id: 340, codigo: '08', nombre: 'Horario', orden: 8, compendio_id: 68 },
  // TABLA DE CANALES
  {
    id: 341,
    codigo: 'C01',
    nombre: 'Mailing',
    abbr: 'MAIL',
    orden: 1,
    compendio_id: 69,
  },
  {
    id: 342,
    codigo: 'C02',
    nombre: 'Instagram',
    abbr: 'IN',
    orden: 2,
    compendio_id: 69,
  },
  {
    id: 343,
    codigo: 'C03',
    nombre: 'Facebook',
    abbr: 'FB',
    orden: 3,
    compendio_id: 69,
  },
  {
    id: 344,
    codigo: 'C04',
    nombre: 'Llamada',
    abbr: 'LLAM',
    orden: 4,
    compendio_id: 69,
  },
  {
    id: 345,
    codigo: 'C05',
    nombre: 'Reuniones',
    abbr: 'REU',
    orden: 5,
    compendio_id: 69,
  },
  {
    id: 346,
    codigo: 'C06',
    nombre: 'LinkedIn',
    abbr: 'LKDIN',
    orden: 6,
    compendio_id: 69,
  },
  {
    id: 347,
    codigo: 'C07',
    nombre: 'Twitter',
    abbr: 'TWIT',
    orden: 7,
    compendio_id: 69,
  },
  {
    id: 348,
    codigo: 'C08',
    nombre: 'Otros',
    abbr: 'OTR',
    orden: 8,
    compendio_id: 69,
  },
  // TABLA DE DEPARTAMENTOS
  { id: 349, codigo: 'D01', nombre: 'Amazonas', orden: 1, compendio_id: 70 },
  { id: 350, codigo: 'D02', nombre: 'Ancash', orden: 2, compendio_id: 70 },
  { id: 351, codigo: 'D03', nombre: 'Apurimac', orden: 3, compendio_id: 70 },
  { id: 352, codigo: 'D04', nombre: 'Arequipa', orden: 4, compendio_id: 70 },
  { id: 353, codigo: 'D05', nombre: 'Tarapacá', orden: 5, compendio_id: 70 },
  { id: 354, codigo: 'D06', nombre: 'Antofagasta', orden: 6, compendio_id: 70 },
  { id: 355, codigo: 'D07', nombre: 'Atacama', orden: 7, compendio_id: 70 },
  {
    id: 356,
    codigo: 'D08',
    nombre: 'Arica y Parinacota',
    orden: 8,
    compendio_id: 70,
  },
  {
    id: 357,
    codigo: 'D09',
    nombre: 'Huancavelica',
    orden: 9,
    compendio_id: 70,
  },
  // TABLA DE PROVINCIAS
  { id: 358, codigo: 'P01', nombre: 'Camana', orden: 1, compendio_id: 71 },
  { id: 359, codigo: 'P02', nombre: 'Arequipa', orden: 2, compendio_id: 71 },
  { id: 360, codigo: 'P03', nombre: 'Antofagasta', orden: 3, compendio_id: 71 },
  { id: 361, codigo: 'P04', nombre: 'Tocopilla', orden: 4, compendio_id: 71 },
  // TABLA DE DISTRITOS
  {
    id: 362,
    codigo: 'R01',
    nombre: 'Alto Selva Alegre',
    orden: 1,
    compendio_id: 72,
  },
  { id: 363, codigo: 'R02', nombre: 'Cayma', orden: 2, compendio_id: 72 },
  { id: 364, codigo: 'R03', nombre: 'Maria Elena', orden: 3, compendio_id: 72 },
  { id: 365, codigo: 'R04', nombre: 'Tocopilla', orden: 4, compendio_id: 72 },
  // TABLA DE TIPO DE CONTACTO
  { id: 366, codigo: '01', nombre: 'Persona', orden: 1, compendio_id: 73 },
  { id: 367, codigo: '02', nombre: 'Empresa', orden: 2, compendio_id: 73 },
  // TABLA DE ESTADO DE ACTIVIDAD
  { id: 368, codigo: '01', nombre: 'Nuevo', orden: 1, compendio_id: 74 },
  { id: 369, codigo: '02', nombre: 'Por hacer', orden: 2, compendio_id: 74 },
  { id: 370, codigo: '03', nombre: 'En Progreso', orden: 3, compendio_id: 74 },
  { id: 371, codigo: '04', nombre: 'Completado', orden: 4, compendio_id: 74 },
  // TABLA DE PRIORIDAD DE ACTIVIDAD
  { id: 372, codigo: '01', nombre: 'Alta', orden: 1, compendio_id: 75 },
  { id: 373, codigo: '02', nombre: 'Media', orden: 2, compendio_id: 75 },
  { id: 374, codigo: '03', nombre: 'Baja', orden: 3, compendio_id: 75 },
  // TABLA DE TIPO DE RECLAMO
  { id: 375, codigo: '01', nombre: 'Devolucion', orden: 1, compendio_id: 76 },
  { id: 376, codigo: '02', nombre: 'Incidencia', orden: 2, compendio_id: 76 },
  {
    id: 377,
    codigo: '03',
    nombre: 'Envío incompleto',
    orden: 3,
    compendio_id: 76,
  },
  {
    id: 378,
    codigo: '04',
    nombre: 'Producto vencido',
    orden: 4,
    compendio_id: 76,
  },

  // TABLA DE ESTADO DE RECLAMO
  { id: 379, codigo: '01', nombre: 'Acogido', orden: 1, compendio_id: 77 },
  { id: 380, codigo: '02', nombre: 'No acogido', orden: 2, compendio_id: 77 },
  { id: 381, codigo: '03', nombre: 'Programado', orden: 3, compendio_id: 77 },
  { id: 382, codigo: '04', nombre: 'Resuelto', orden: 4, compendio_id: 77 },
  // TABLA DE TIPO DE CONDICION DE PAGO
  { id: 383, codigo: '01', nombre: 'Avance', orden: 1, compendio_id: 78 },
  // TABLA DE NOMBRE DE CONDICION DE PAGO
  { id: 384, codigo: '01', nombre: '30% Anticipo', orden: 1, compendio_id: 79 },
  {
    id: 385,
    codigo: '02',
    nombre: '60% Entregable',
    orden: 2,
    compendio_id: 79,
  },
  { id: 386, codigo: '03', nombre: '75% Testing', orden: 3, compendio_id: 79 },
  { id: 387, codigo: '04', nombre: '10% Termino', orden: 4, compendio_id: 79 },
  // TABLA DE FORMAS DE PAGO COTIZACION
  { id: 388, codigo: '01', nombre: 'Deposito', orden: 1, compendio_id: 80 },
  {
    id: 389,
    codigo: '02',
    nombre: 'Boleta de Pago',
    orden: 2,
    compendio_id: 80,
  },
  // TABLA DE CATEGORIA DE DOCUMENTO--
  // TABLA DE TIPOS DE OPORTUNIDAD
  { id: 390, codigo: '01', nombre: 'Bien', orden: 1, compendio_id: 82 },
  { id: 391, codigo: '02', nombre: 'Servicio', orden: 2, compendio_id: 82 },
];

/** compendio_idS SIN DATOS
  02 TABLA DE PERFILES DEL SISTEMA
  04 TABLA DE AREAS
  12 TABLA DE ESTADO DE VACACIONES
  14 TABLA DE ESTADOS DE PERIODO
	35 TABLA DE RAZON DE PERMISOS
	36 TABLA DE JUSTIFICACION DE PERMISOS
	38 TABLA DE AGRUPACION POR CONCEPTO
	42 TABLA TIPO DE PROVEEDOR
	-- compendio_id 25 IGUAL AL 32 TIPO CONTRATO
**/
