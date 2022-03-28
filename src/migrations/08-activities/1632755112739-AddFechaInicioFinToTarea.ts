import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddFechaInicioFinToTarea1632755112739
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaetarea';

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
