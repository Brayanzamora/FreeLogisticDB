import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCorreoToPersonasClave1640514573241
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaepersonaclave';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'correo',
        type: 'varchar',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'correo');
  }
}
