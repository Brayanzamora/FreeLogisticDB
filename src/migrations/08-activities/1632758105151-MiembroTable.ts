import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class MiembroTable1632758105151 implements MigrationInterface {
  private readonly tableName = 'activities.catmaemiembro';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['participante_id'],
      referencedTableName: 'activities.catmaeparticipante',
      referencedColumnNames: ['id'],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'grupo_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'participante_id',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'flag',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
          {
            name: 'nickname',
            type: 'varchar',
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
