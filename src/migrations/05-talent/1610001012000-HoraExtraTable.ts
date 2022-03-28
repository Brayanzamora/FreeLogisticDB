import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class HoraExtraTable1610001012000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaehoraextra';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['trabajador_id'],
      referencedTableName: 'personas.catmaetrabajador',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['aprobado_por'],
      referencedTableName: 'personas.catmaetrabajador',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['tipo_hora_extra_id'],
      referencedTableName: 'commons.catdetcompendio',
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
            name: 'hora_extra_inicio',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'hora_extra_fin',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'incidente_inicio',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'incidente_fin',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'hora_inicio',
            type: 'time',
            isNullable: false,
          },
          {
            name: 'hora_fin',
            type: 'time',
            isNullable: false,
          },
          {
            name: 'comentario',
            type: 'varchar',
            default: true,
            isNullable: true,
          },
          {
            name: 'estado',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'trabajador_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'aprobado_por',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'tipo_hora_extra_id',
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
