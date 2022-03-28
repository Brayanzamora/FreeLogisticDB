import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class RespuestaEncuestaTable1610001026000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaerespuestaencuesta';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['encuestatrabajador_id'],
      referencedTableName: 'talent.catmaeencuestatrabajador',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['detalleencuesta_id'],
      referencedTableName: 'talent.catmaedetalleencuesta',
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
            name: 'encuestatrabajador_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'detalleencuesta_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'flag',
            type: 'boolean',
            default: true,
            isNullable: true,
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
