import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class UpdatePersonaClaveFromParticipante1640518761095
  implements MigrationInterface
{
  private readonly tableName = 'crm.catmaeparticipante';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'personaclave_id',
        type: 'int4',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['personaclave_id'],
        referencedTableName: 'crm.catmaepersonaclave',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['personaclave_id'],
        referencedTableName: 'crm.catmaepersonaclave',
        referencedColumnNames: ['id'],
      })
    );

    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'personaclave_id',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: true,
      })
    );
  }
}
