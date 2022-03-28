import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UpdateObjetivoRelationInTarea1637148469405
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaetarea';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);
    let fk = table!.foreignKeys.find(
      (fk) => fk.columnNames[0] === 'objetivo_id'
    );
    await queryRunner.dropForeignKey(this.tableName, fk!);

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['objetivo_id'],
        referencedTableName: 'activities.catmaeobjetivo',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['objetivo_id'],
        referencedTableName: 'activities.catmaeobjetivo',
        referencedColumnNames: ['id'],
      })
    );
  }
}
