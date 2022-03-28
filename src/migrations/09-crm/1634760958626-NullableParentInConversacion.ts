import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class NullableParentInConversacion1634760958626
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeconversacion';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'parent_id',
        type: 'int4',
        isNullable: false,
      }),
      new TableColumn({
        name: 'parent_id',
        type: 'int4',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'parent_id',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'parent_id',
        type: 'int4',
        isNullable: false,
      })
    );
  }
}
