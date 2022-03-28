import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class EstudioTable1610001010000 implements MigrationInterface {
  private readonly tableName = "talent.catmaeestudio";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["categoriaestudio_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["creado_por"],
      referencedTableName: "personas.catmaetrabajador",
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
            name: "nombre",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "inicio",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "fin",
            type: "timestamp",
            isNullable: false,
          },
          {
            name: "categoriaestudio_id",
            type: "int4",
            isNullable: false,
          },
          {
            name: "creado_por",
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_NOMBRE_ESTUDIO",
        columnNames: ["nombre"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
