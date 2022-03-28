import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class DetalleGrupoTable1639736883716 implements MigrationInterface {
  private readonly tableName = 'activities.catdetgrupo';
  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['grupo_id'],
      referencedTableName: 'activities.catmaegrupo',
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
            name: 'grupo_id',
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
