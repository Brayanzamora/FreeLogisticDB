import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from "typeorm";

export class MetasTable1610000005700 implements MigrationInterface {
  private readonly tableName = "facturacion.catmaemetas";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["articulo_id"],
      referencedTableName: "facturacion.catmaeproducto",
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
            name: "year",
            type: "int4",
            isNullable: false,
          },
          {
            name: "promediomes",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "promediodia",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "maximodia",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "stockseguridad",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "puntoorden",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "stockmedio",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "rotacioninventario",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "tasacobertura",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "selltrougth",
            type: "decimal",
            precision: 9,
            scale: 3,
            isNullable: false,
          },
          {
            name: "articulo_id",
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
