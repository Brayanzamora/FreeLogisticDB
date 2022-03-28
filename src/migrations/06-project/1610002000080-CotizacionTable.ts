import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class CotizacionTable1610002000080 implements MigrationInterface {
  private readonly tableName = "project.catmaecotizacion";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["proyecto_id"],
      referencedTableName: "project.catmaeproyecto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["area_id"],
      referencedTableName: "talent.catmaearea",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipo_forma_pago_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "int4",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "proyecto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "area_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "contacto",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "comentario",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "costo_total_recursos",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "imprevisto",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "descuento",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "redondeo",
            type: "boolean",
            default: true,
            isNullable: false,
          },
          {
            name: "margen",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "impuesto",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "utilidad",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "total",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "tipo_forma_pago_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "valor_forma_pago",
            type: "varchar",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
