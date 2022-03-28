import { RecursotrabajadorTable1610002000220 } from "./1610002000220-RecursoTrabajadorTable";
import { RecursoAvanceControlTable1610002000210 } from "./1610002000210-RecursoAvanceControlTable";
import { RecursoActividadHombreTable1610002000190 } from "./1610002000190-RecursoActividadHombreTable";
import { HorarioEmpresaTable1610002000180 } from "./1610002000180-HorarioEmpresaTable";
import { FacturaProyectoTable1610002000170 } from "./1610002000170-FacturaProyectoTable";
import { CondicionPagoTable1610002000160 } from "./1610002000160-CondicionPagoTable";
import { CotizacionEtapaTable1610002000150 } from "./1610002000150-CotizacionEtapaTable";
import { ActividadValoresTable1610002000140 } from "./1610002000140-ActividadValoresTable";
import { RecursoActividadTable1610002000130 } from "./1610002000130-RecursoActividadTable";
import { AvanceControlTable1610002000110 } from "./1610002000110-AvanceControlTable";
import { GastosGeneralesTable1610002000100 } from "./1610002000100-GastosGeneralesTable";
import { CotizacionTable1610002000080 } from "./1610002000080-CotizacionTable";
import { EficienciaTable1610002000060 } from "./1610002000060-EficienciaTable";
import { ProyectoDiaTable1610002000030 } from "./1610002000030-ProyectoDIaTable";
import { ProjectoTable1610002000010 } from "./1610002000010-ProjectoTable";
import { ProjectSchema1610002000000 } from "./1610002000000-ProjectSchema";
import { ProyectoTipoCampoTable1610002000020 } from "./1610002000020-ProjectoTipoCampoTable";
import { ActividadEstadoTareaTable1610002000040 } from "./1610002000040-ActividadEstadoTareaTable";
import { ActividadTable1610002000050 } from "./1610002000050-ActividadTable";
import { EntregableTable1610002000070 } from "./1610002000070-EntregableTable";
import { RecursoTable1610002000090 } from "./1610002000090-RecursoTable";
import { ActividadAvanceControlTable1610002000120 } from "./1610002000120-ActividadAvanceControlTable";
import { RecursoActividadInsumoMaquinariaTable1610002000200 } from "./1610002000200-RecursoActividadInsumoMaquinariaTable";
import { SubCondicionPagoTable1610002000230 } from "./1610002000230-SubCondicionPagoTable";
import { AddColumnsCotizacion1610002000240 } from "./1610002000240-AddColumnsCotizacion"
import { AddColumnsActividad1610002000250 } from "./1610002000250-AddColumnsActividad"
import { UpdateColumnsCondicionPago1610002000260 } from "./1610002000260-UpdateColumnsCondicionPago"
import { UpdateColumnsSubCondicionPago1610002000270} from "./1610002000270-UpdateColumnsSubCondicionPago"
import { AddFKFacturaProyecto1610002000280 } from "./1610002000280-AddFKFacturaProyecto"
import { AddFKEficiencia1610002000290 } from "./1610002000290-AddFKEficiencia"
import { UpdateColumnsRecursoActividad1610002000300 } from "./1610002000300-UpdateColumnsRecursoActividad"
import { UpdateColumnsRecursoActividadHombre1610002000310 } from "./1610002000310-UpdateColumnsRecursoActividadHombre"
import { UpdateColumnsRecursoAvanceControl1610002000320 } from "./1610002000320-UpdateColumnsRecursoAvanceControl"
import { UpdateColumnsCotizacionEtapa1610002000330 } from "./1610002000330-UpdateColumnsCotizacionEtapa"
import { AddColumnsActividadAvanceControl1610002000340 } from "./1610002000340-AddColumnsActividadAvanceControl"
import { AddColumnsProyecto1610002000350 } from "./1610002000350-AddColumnsProyecto"
import { RecursoGastosGeneralesHombreTable1610002000360 } from "./1610002000360-RecursoGastosGeneralesHombreTable"
import { RecursoGastosGeneralesInsumoMaquinariaTable1610002000370 } from "./1610002000370-RecursoGastosGeneralesInsumoMaquinariaTable"
import { AddCrmColumnsToProyecto1632741890744 } from './1632741890744-AddCrmColumnsToProyecto';
import { UpdateNullableColumns1633341102960 } from './1633341102960-UpdateNullableColumns';
import { UpdatePersonasClaveFKToProyecto1633343293666 } from './1633343293666-UpdatePersonasClaveFKToProyecto';
import { UpdateNullableEjecutivoToProyecto1633343431659 } from './1633343431659-UpdateNullableEjecutivoToProyecto';
import { AddTipoControlToActividadAvanceControlControl1634318115000 } from './1634318115000-AddTipoControlToActividadAvanceControl';
import { UpdateUnidadNegocioFKToProyecto1634318115100 } from "./1634318115100-UpdateUnidadNegocioFKToProyecto";
import { AddColumnEstadoControlProyecto1641901841000 } from "./1641901841000-AddColumnEstadoControlProyecto";
import { AlterDataTypeColumnPresupuesto1645200687000 } from "./1645200687000-AlterDataTypeColumnPresupuesto"; 
import { FacturaDesembolsoTable1645435325100 } from "./1645435325100-FacturaDesembolsoTable";

export const project = [
  ProjectSchema1610002000000,
  ProjectoTable1610002000010,
  ProyectoTipoCampoTable1610002000020,
  ProyectoDiaTable1610002000030,
  ActividadEstadoTareaTable1610002000040,
  ActividadTable1610002000050,
  EficienciaTable1610002000060,
  EntregableTable1610002000070,
  CotizacionTable1610002000080,
  RecursoTable1610002000090,
  GastosGeneralesTable1610002000100,
  AvanceControlTable1610002000110,
  ActividadAvanceControlTable1610002000120,
  RecursoActividadTable1610002000130,
  ActividadValoresTable1610002000140,
  CotizacionEtapaTable1610002000150,
  CondicionPagoTable1610002000160,
  FacturaProyectoTable1610002000170,
  HorarioEmpresaTable1610002000180,
  RecursoActividadHombreTable1610002000190,
  RecursoActividadInsumoMaquinariaTable1610002000200,
  RecursoAvanceControlTable1610002000210,
  RecursotrabajadorTable1610002000220,
  SubCondicionPagoTable1610002000230,
  AddColumnsCotizacion1610002000240,
  AddColumnsActividad1610002000250,
  UpdateColumnsCondicionPago1610002000260,
  UpdateColumnsSubCondicionPago1610002000270,
  AddFKFacturaProyecto1610002000280,
  AddFKEficiencia1610002000290,
  UpdateColumnsRecursoActividad1610002000300,
  UpdateColumnsRecursoActividadHombre1610002000310,
  UpdateColumnsRecursoAvanceControl1610002000320,
  UpdateColumnsCotizacionEtapa1610002000330,
  AddColumnsActividadAvanceControl1610002000340,
  AddColumnsProyecto1610002000350,
  RecursoGastosGeneralesHombreTable1610002000360,
  RecursoGastosGeneralesInsumoMaquinariaTable1610002000370,
  AddCrmColumnsToProyecto1632741890744,
  UpdateNullableColumns1633341102960,
  UpdatePersonasClaveFKToProyecto1633343293666,
  UpdateNullableEjecutivoToProyecto1633343431659,
  AddTipoControlToActividadAvanceControlControl1634318115000,
  UpdateUnidadNegocioFKToProyecto1634318115100,
  AddColumnEstadoControlProyecto1641901841000,
  AlterDataTypeColumnPresupuesto1645200687000,
  FacturaDesembolsoTable1645435325100,
];
