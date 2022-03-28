import { DetalleSalidaTable1610000008900 } from './1610000008900-DetalleSalidaTable';
import { DetalleInventarioTable1610000008800 } from './1610000008800-DetalleInventarioTable';
import { DetalleDespachoTable1610000008700 } from './1610000008700-DetalleDespachoTable';
import { CondicionPagoFacturacionTable1610000008500 } from './1610000008500-CondicionPagoFacturacionTable';
import { AlmacenTable1610000008400 } from './1610000008400-AlmacenTable';
import { AutorizacionTable1610000008300 } from './1610000008300-AutorizacionTable';
import { DetalleCompraCotizacionTable1610000008200 } from './1610000008200-DetalleCompraCotizacionTable';
import { DetalleCompraOrdenTable1610000008000 } from './1610000008000-DetalleCompraOrdenTable';
import { FacturaCompraTable1610000007600 } from './1610000007600-FacturaCompraTable';
import { PagoTable1610000007400 } from './1610000007400-PagoTable';
import { SalidaInventarioTable1610000007300 } from './1610000007300-SalidaInventarioTable';
import { VentaFacturaTable1610000007000 } from './1610000007000-VentaFacturaTable';
import { VentaNotaCreditoTable1610000006800 } from './1610000006800-VentaNotaCreditoTable';
import { RecepcionTable1610000006600 } from './1610000006600-RecepcionTable';
import { VentaCotizacionTable1610000006500 } from './1610000006500-VentaCotizacionTable';
import { CompraOrdenTable1610000006400 } from './1610000006400-CompraOrdenTable';
import { TipoTransaccionTable1610000006000 } from './1610000006000-TipoTransaccionTable';
import { MetasTable1610000005700 } from './1610000005700-MetasTable';
import { ArticuloTable1610000005500 } from './1610000005500-ArticuloTable';
import { BodegaTable1610000005400 } from './1610000005400-BodegaTable';
import { LogisticSchema1610000002001 } from './1610000002001-LogisticSchema';
import { CategoriaTable1610000002402 } from './1610000002402-CategoriaTable';
import { SubCategoriaTable1610000002403 } from './1610000002403-SubCategoriaTable';
import { DetalleMetasTable1610000005800 } from './1610000005800-DetalleMetasTable';
import { VentaOrdenTable1610000006100 } from './1610000006100-VentaOrdenTable';
import { SalidaTable1610000006200 } from './1610000006200-SalidaTable';
import { DespachoTable1610000006300 } from './1610000006300-DespachoTable';
import { DetalleVentaOrdenTable1610000006700 } from './1610000006700-DetalleVentaOrdenTable';
import { DetalleVentaNotaCreditoTable1610000006900 } from './1610000006900-DetalleVentaNotaCreditoTable';
import { DetalleVentaFacturaTable1610000007100 } from './1610000007100-DetalleVentaFacturaTable';
import { DetalleVentaCotizacionTable1610000007200 } from './1610000007200-DetalleVentaCotizacionTable';
import { InventarioArticuloTable1610000005600 } from './1610000005600-InventarioArticuloTable';
import { InventarioTable1610000007500 } from './1610000007500-InventarioTable';
import { DetalleFacturaCompraTable1610000007700 } from './1610000007700-DetalleFacturaCompraTable';
import { EnvioTable1610000007800 } from './1610000007800-EnvioTable';
import { EntregaMercaderiaTable1610000007900 } from './1610000007900-EntregaMercaderiaTable';
import { CompraCotizacionTable1610000008100 } from './1610000008100-CompraCotizacionTable';
import { SubCondicionPagoFaturacionTable1610000008600 } from './1610000008600-SubCondicionPagoFacturacionTable';
import { DetalleSalidaInventarioTable1610000009000 } from './1610000009000-DetalleSalidaInventarioTable';
import { AddFKCateSubCateTrabajador1610000005900 } from './1610000005900-AddFKCateSubCateTrabajador';
import { AddFKCateSubCatePresupuestoTesoreria1610000009100 } from './1610000009100-AddFKCateSubCatePresupuestoTesoreria';
import { AddFKCateSubCatePresupuestoTesoreria1610000009200 } from './1610000009200-AddFKCateSubCatePresupuestoEconomico';
import { AddFKCateSubCateDocumentos1610000009300 } from './1610000009300-AddFKCateSubCateDocumentos';
import { AddFKCateSubCateDetalleVoucher1610000009400 } from './1610000009400-AddFKCateSubCateDetalleVoucher';
import { AddFKCateSubCateAsientoTipo1610000009500 } from './1610000009500-AddFKCateSubCateAsientoTipo';
import { UpdateFKCategotia1640877460100 } from './1640877460100-UpdateFKCategotia';
import { UpdateFKCentroCostoToProducto1640877460200 } from './1640877460200-UpdateFKCentroCostoToProducto';

import { EstadosTable1633890138514 } from './1633890138514-EstadosTable';
import { DropFKEstadosCompraCotizacion1633890248341 } from './1633890248341-DropFKEstadosCompraCotizacion';
import { AddFKEstadosCompraCotizacion1633890277367 } from './1633890277367-AddFKEstadosCompraCotizacion';
import { AddColumnCompraCotizacion1633890293541 } from './1633890293541-AddColumnCompraCotizacion';
import { DropColumnCondicionPago1633890308164 } from './1633890308164-DropColumnCondicionPago';

import { DropFKEstadoVentaCotizacion1634063046724 } from './1634063046724-DropFKEstadoVentaCotizacion';
import { AddFKEstadosVentaCotizacion1634063073585 } from './1634063073585-AddFKEstadosVentaCotizacion';

import { AlterTableArticuloTable1632838756135 } from './1632838756135-AlterTableArticuloTable';
import { AddCrmColumnsToVentaCotizacion1634466083654 } from './1634466083654-AddCrmColumnsToVentaCotizacion';
import { AddPersonaContactoToVentaCotizacion1634633679880 } from './1634633679880-AddPersonaContactoToVentaCotizacion';

export const logistic = [
  LogisticSchema1610000002001,
  CategoriaTable1610000002402,
  SubCategoriaTable1610000002403,
  BodegaTable1610000005400,
  ArticuloTable1610000005500,
  InventarioArticuloTable1610000005600,
  MetasTable1610000005700,
  DetalleMetasTable1610000005800,
  AddFKCateSubCateTrabajador1610000005900,
  TipoTransaccionTable1610000006000,
  VentaOrdenTable1610000006100,
  SalidaTable1610000006200,
  DespachoTable1610000006300,
  CompraOrdenTable1610000006400,
  VentaCotizacionTable1610000006500,
  RecepcionTable1610000006600,
  DetalleVentaOrdenTable1610000006700,
  VentaNotaCreditoTable1610000006800,
  DetalleVentaNotaCreditoTable1610000006900,
  VentaFacturaTable1610000007000,
  DetalleVentaFacturaTable1610000007100,
  DetalleVentaCotizacionTable1610000007200,
  SalidaInventarioTable1610000007300,
  PagoTable1610000007400,
  InventarioTable1610000007500,
  FacturaCompraTable1610000007600,
  DetalleFacturaCompraTable1610000007700,
  EnvioTable1610000007800,
  EntregaMercaderiaTable1610000007900,
  DetalleCompraOrdenTable1610000008000,
  CompraCotizacionTable1610000008100,
  DetalleCompraCotizacionTable1610000008200,
  AutorizacionTable1610000008300,
  AlmacenTable1610000008400,
  CondicionPagoFacturacionTable1610000008500,
  SubCondicionPagoFaturacionTable1610000008600,
  DetalleDespachoTable1610000008700,
  DetalleInventarioTable1610000008800,
  DetalleSalidaTable1610000008900,
  DetalleSalidaInventarioTable1610000009000,
  // AddFKCateSubCatePresupuestoTesoreria1610000009100,
  // AddFKCateSubCatePresupuestoTesoreria1610000009200,
  AddFKCateSubCateDocumentos1610000009300,
  AddFKCateSubCateDetalleVoucher1610000009400,
  AddFKCateSubCateAsientoTipo1610000009500,
  EstadosTable1633890138514,
  DropFKEstadosCompraCotizacion1633890248341,
  AddFKEstadosCompraCotizacion1633890277367,
  AddColumnCompraCotizacion1633890293541,
  DropColumnCondicionPago1633890308164,
  DropFKEstadoVentaCotizacion1634063046724,
  AddFKEstadosVentaCotizacion1634063073585,
  UpdateFKCategotia1640877460100,
  UpdateFKCentroCostoToProducto1640877460200,
  AlterTableArticuloTable1632838756135,
  AddCrmColumnsToVentaCotizacion1634466083654,
  AddPersonaContactoToVentaCotizacion1634633679880,
];
