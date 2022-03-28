import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class UpdateFKCategotia1640877460100
  implements MigrationInterface
{
  private readonly tableName = "facturacion.catmaecategoria";
  
  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["centrocosto_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('centrocosto_id') !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey); 

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  private readonly foreignKeysOld = [
    new TableForeignKey({
      columnNames: ["centrocosto_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
  ];

  public async down(queryRunner: QueryRunner): Promise<void> {    

    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.createForeignKeys(this.tableName, this.foreignKeysOld);
  }
}
