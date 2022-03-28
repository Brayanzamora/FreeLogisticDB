import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddFechaInicioFinToObjetivo1632755488477
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaeobjetivo';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'fecha_entrega');

    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'fecha_inicio',
        type: 'timestamp',
        isNullable: false,
      }),
      new TableColumn({
        name: 'fecha_fin',
        type: 'timestamp',
        isNullable: false,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'fecha_inicio');
    await queryRunner.dropColumn(this.tableName, 'fecha_fin');

    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'fecha_entrega',
        type: 'timestamp',
        isNullable: true,
      })
    );
  }
}
