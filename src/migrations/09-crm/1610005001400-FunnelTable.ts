import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class FunnelTable1610005001400 implements MigrationInterface {
  private readonly tableName = "crm.catmaefunnel";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["contacto_id"],
      referencedTableName: "crm.catmaecontacto",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["etapa_id"],
      referencedTableName: "crm.catmaeetapa",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["responsable_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["moneda_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["oportunidad_id"],
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
            name: "contacto_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "etapa_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "responsable_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "fecha_ini",
            type: "timestamp",
            isNullable: true,
          },
          {
            name: "updatable",
            type: "boolean",
            default: false,
            isNullable: true,
          },
          {
            name: "nombre",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "monto",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: "moneda_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "oportunidad_id",
            type: "int4",
            isNullable: false,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
