import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableColumn,
  TableForeignKey,
} from "typeorm";

export class UpdateFKCentroCostoToProducto1640877460200
  implements MigrationInterface
{
  private readonly tableName = "facturacion.catmaeproducto";
  
  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["undnegocio_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('undnegocio_id') !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey); 

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  //To Down
  private readonly foreignKeysOld = [
    new TableForeignKey({
      columnNames: ["undnegocio_id"],
      referencedTableName: "contabilidad.catmaecentrocosto",
      referencedColumnNames: ["id"],
    }),
  ];

  public async down(queryRunner: QueryRunner): Promise<void> {    

    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.createForeignKeys(this.tableName, this.foreignKeysOld);
  }
}
