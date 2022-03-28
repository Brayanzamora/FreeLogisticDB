import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateNullableNumdocInContacto1635332641929
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaecontacto';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({ name: 'num_doc', type: 'varchar', isNullable: false }),
      new TableColumn({ name: 'num_doc', type: 'varchar', isNullable: true })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({ name: 'num_doc', type: 'varchar', isNullable: true }),
      new TableColumn({ name: 'num_doc', type: 'varchar', isNullable: false })
    );
  }
}
