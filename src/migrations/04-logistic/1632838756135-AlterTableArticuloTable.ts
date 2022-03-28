import {
    MigrationInterface,
    QueryRunner,
    TableForeignKey,
    TableColumn,
  } from "typeorm";

export class AlterTableArticuloTable1632838756135 implements MigrationInterface {

    private readonly tableName = "facturacion.catmaeproducto";

    public async up(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.addColumn(
            this.tableName,
            new TableColumn({
              name: "centrocosto_id",
              type: "int4",
              isNullable: false,
            })
          );

        await queryRunner.createForeignKey(
            this.tableName,
            new TableForeignKey({
              columnNames: ["centrocosto_id"],
              referencedTableName: "commons.catdetcompendio",
              referencedColumnNames: ["id"],
            })
          );
        }

        public async down(queryRunner: QueryRunner): Promise<void> {

          await queryRunner.dropColumn(
            this.tableName,
            new TableColumn({
                name: "centrocosto_id",
                type: "int4",
                isNullable: false,
            })
          );

          await queryRunner.dropForeignKey(
            this.tableName,
            new TableForeignKey({
              columnNames: ["centrocosto_id"],
              referencedTableName: "commons.catdetcompendio",
              referencedColumnNames: ["id"],
            })
          );
        }
      }