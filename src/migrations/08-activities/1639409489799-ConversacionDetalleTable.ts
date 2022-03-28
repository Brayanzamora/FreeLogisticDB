import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ConversacionDetalleTable1639409489799
  implements MigrationInterface
{
  private readonly tableName = 'activities.catdetconversacion';
  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['conversation_id'],
      referencedTableName: 'activities.catmaeconversacion',
      referencedColumnNames: ['id'],
    }),
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
            name: 'conversation_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'participante_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'flag',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
