import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class AsistenciaTable1610001004000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaeasistencia';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['periodo_id'],
      referencedTableName: 'talent.catmaearea',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['trabajador_id'],
      referencedTableName: 'personas.catmaetrabajador',
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
            name: 'fecha',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'inicio',
            type: 'time',
            isNullable: false,
          },
          {
            name: 'break',
            type: 'time',
            isNullable: true,
          },
          {
            name: 'back',
            type: 'time',
            isNullable: true,
          },
          {
            name: 'fin',
            type: 'time',
            isNullable: true,
          },
          {
            name: 'periodo_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'trabajador_id',
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

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
