import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class RespuestaDetalleTipoTable1610001035000
  implements MigrationInterface
{
  private readonly tableName = 'talent.catmaerespuestadetalletipo';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['respuestaencuesta_id'],
      referencedTableName: 'talent.catmaerespuestaencuesta',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['detalletiporespuesta_id'],
      referencedTableName: 'talent.catmaedetalletiporespuesta',
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
            name: 'respuestaencuesta_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'detalletiporespuesta_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'estado',
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
