import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class PlanCuentasTable1610000002300 implements MigrationInterface {
  private readonly tableName = "contabilidad.catmaeplancuenta";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["entidadfinanciera_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["tipomoneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["amarredebe_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["amarrehaber_id"],
      referencedTableName: "contabilidad.catmaeplancuenta",
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
            name: "numero",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "nivel",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "tipo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "analisis",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "banco",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "cuenta", // nº de cuenta
            type: "varchar",
            isNullable: true,
          },
          {
            name: "balance", // balance de comprobacion -> tal vez sea un fk
            type: "varchar",
            isNullable: true,
          },
          {
            name: "conversion",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "equivalente", // cuenta equivalente
            type: "varchar",
            isNullable: true,
          },
          {
            name: "entidadfinanciera_id", // codigo entidad financiera
            type: "int4",
            isNullable: true,
          },
          {
            name: "tipomoneda_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "amarredebe_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "amarrehaber_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flag",
            type: "boolean",
            default: true,
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_NUMERO",
        columnNames: ["numero"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
