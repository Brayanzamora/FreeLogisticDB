import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class EntregaMercaderiaTable1610000007900 implements MigrationInterface {
  private readonly tableName = "facturacion.movmaeentregamercaderia";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["estado_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["despacho_id"],
      referencedTableName: "facturacion.movmaedespacho",
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
            name: "codigo",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "despacho_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "direccion_entrega",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "fecha_entrega",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "contacto_recibe",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "estado_id",
            type: "int4",
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_CODIGO_ENTREGA_MERCADERIA",
        columnNames: ["codigo"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
