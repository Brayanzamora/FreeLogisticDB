import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddEstadoToConversacion1632931538092
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaeconversacion';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'estado',
        type: 'boolean',
        isNullable: false,
        default: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'estado');
  }
}
