import { EstadosFinancierosTable1610000003200 } from "./1610000003200-EstadosFinancierosTable";
import { DetalleVoucherTable1610000004900 } from "./1610000004900-DetalleVoucherTable";
import { DocumentosTable1610000004800 } from "./1610000004800-DocumentosTable";
import { LibroContableTable1610000004700 } from "./1610000004700-LibroContableTable";
import { DetalleConciliacionBancariaTable1610000004600 } from "./1610000004600-DetalleConciliacionBancariaTable";
import { EnlaceTable1610000004400 } from "./1610000004400-EnlaceTable";
import { DetallePresupuestoTesoreriaTable1610000004300 } from "./1610000004300-DetallePresupuestoTesoreriaTable";
import { PresupuestoTesoreriaTable1610000004100 } from "./1610000004100-PresupuestoTesoreriaTable";
import { DiferenciaTipoCambioTable1610000003700 } from "./1610000003700-DiferenciaTipoCambioTable";
import { PlanCuentasTable1610000002300 } from "./1610000002300-PlanCuentasTable";
import { ContabilidadSchema1610000002000 } from "./1610000002000-ContabilidadSchema";
import { AsientoTipoTable1610000002100 } from "./1610000002100-AsientoTipoTable";
import { BalanceTable1610000002200 } from "./1610000002200-BalanceTable";
import { UnidadNegocioTable1610000002400 } from "./1610000002400-UnidadNegocioTable";
import { TipoCambioTable1610000002500 } from "./1610000002500-TipoCambioTable";
import { OrigenTable1610000002600 } from "./1610000002600-OrigenTable";
import { DetalleOrigenTable1610000002700 } from "./1610000002700-DetalleOrigenTable";
import { ParametroCuentaTable1610000002800 } from "./1610000002800-ParametroCuentaTable";
import { VoucherTable1610000002900 } from "./1610000002900-VoucherTable";
import { CierreMesTable1610000003000 } from "./1610000003000-CierreMesTable";
import { EpgTable1610000003100 } from "./1610000003100-EstadoPerdidaGananciaTable";
import { ClasificarCuentaTable1610000003400 } from "./1610000003400-ClasificarCuentaTable";
import { DetalleClasificarCuentaTable1610000003500 } from "./1610000003500-DetalleClasificarCuentaTable";
import { OrigenVoucherTable1610000003600 } from "./1610000003600-OrigenVoucherTable";
import { FlujoEfectivoTable1610000003800 } from "./1610000003800-FlujoEfectivoTable";
import { PresupuestoEconomicoTable1610000003900 } from "./1610000003900-PresupuestoEconomicoTable";
import { DetallePresupuestoEconomicoTable1610000004000 } from "./1610000004000-DetallePresupuestoEconomicoTable";
import { PresupuestoPartidaTable1610000004200 } from "./1610000004200-PresupuestoPartidaTable";
import { ConciliacionBancariaTable1610000004500 } from "./1610000004500-ConciliacionBancariaTable";
import { DetalleAsientoTipoTable1610000005000 } from "./1610000005000-DetalleAsientoTipoTable";
import { AddFKTrabajdoCentroCostos1610000003300 } from "./1610000003300-AddFKTrabajdoCentroCostos";
import { AlterDocumentosCentroCosto1631901893052 } from "./1631901893052-AlterDocumentosCentroCosto";
import { AlterPresupuestoEconomicoCentroCosto1631901894052 } from "./1631901894052-AlterPresupuestoEconomicoCentroCosto";
import { AlterPresupuestoTesoreriaCentroCosto1631901895052 } from "./1631901895052-AlterPresupuestoTesoreriaCentroCosto";
import { RemoveYearColumnTableDetallePresupuestoTesoreria1631920536169 } from "./1631920536169-RemoveYearColumnTableDetallePresupuestoTesoreria";
import { AddFKSubCategotiaToCentroCosto1640877459100 } from "./1640877459100-AddFKSubCategotiaToCentroCosto";
import { BalanceComprobacionFK1642774431051 } from "./1642774431051-BalanceComprobacionFK";

export const contabilidad = [
  ContabilidadSchema1610000002000,
  AsientoTipoTable1610000002100,
  BalanceTable1610000002200,
  PlanCuentasTable1610000002300,
  UnidadNegocioTable1610000002400,
  TipoCambioTable1610000002500,
  OrigenTable1610000002600,
  DetalleOrigenTable1610000002700,
  ParametroCuentaTable1610000002800,
  VoucherTable1610000002900,
  CierreMesTable1610000003000,
  EpgTable1610000003100,
  EstadosFinancierosTable1610000003200,
  AddFKTrabajdoCentroCostos1610000003300,
  ClasificarCuentaTable1610000003400,
  DetalleClasificarCuentaTable1610000003500,
  OrigenVoucherTable1610000003600,
  DiferenciaTipoCambioTable1610000003700,
  FlujoEfectivoTable1610000003800,
  PresupuestoEconomicoTable1610000003900,
  DetallePresupuestoEconomicoTable1610000004000,
  PresupuestoTesoreriaTable1610000004100,
  PresupuestoPartidaTable1610000004200,
  DetallePresupuestoTesoreriaTable1610000004300,
  EnlaceTable1610000004400,
  ConciliacionBancariaTable1610000004500,
  DetalleConciliacionBancariaTable1610000004600,
  LibroContableTable1610000004700,
  DocumentosTable1610000004800,
  DetalleVoucherTable1610000004900,
  DetalleAsientoTipoTable1610000005000,
  AlterDocumentosCentroCosto1631901893052,
  AlterPresupuestoEconomicoCentroCosto1631901894052,
  AlterPresupuestoTesoreriaCentroCosto1631901895052,
  RemoveYearColumnTableDetallePresupuestoTesoreria1631920536169,
  AddFKSubCategotiaToCentroCosto1640877459100,
  BalanceComprobacionFK1642774431051,
];
