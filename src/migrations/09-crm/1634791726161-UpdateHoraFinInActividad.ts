import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateHoraFinInActividad1634791726161
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeactividad';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'duracion',
        type: 'time',
        isNullable: false,
      }),
      new TableColumn({
        name: 'hora_fin',
        type: 'time',
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'hora_fin',
        type: 'time',
        isNullable: false,
      }),
      new TableColumn({
        name: 'duracion',
        type: 'time',
        isNullable: false,
      })
    );
  }
}
