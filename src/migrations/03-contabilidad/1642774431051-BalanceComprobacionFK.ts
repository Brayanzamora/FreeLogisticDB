import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class BalanceComprobacionFK1642774431051 implements MigrationInterface {

    private readonly tableName = "contabilidad.catmaeplancuenta";

    private readonly foreignKeys = [
        new TableForeignKey({
        columnNames: ["equivalente_id"],
        referencedTableName: "contabilidad.catmaeplancuenta",
        referencedColumnNames: ["id"],
        }),
    ];
  
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.changeColumn(
            this.tableName, 
            "equivalente",
            new TableColumn({
                name: "equivalente_id",
                type: "int4",
                isNullable: true,
            }),
        );
      
          await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
        await queryRunner.dropColumn(this.tableName, "equivalente_id");
    }

}
