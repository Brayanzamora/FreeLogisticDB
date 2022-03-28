import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCompletedDateToObjetivo1637052407168
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaeobjetivo';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'fecha_completada',
        type: 'timestamp',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'fecha_completada');
  }
}
