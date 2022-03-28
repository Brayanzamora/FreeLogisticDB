import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class PermisoTable1610001017000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaepermiso';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['razon_id'],
      referencedTableName: 'talent.catmaerazon',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['justificacion_id'],
      referencedTableName: 'talent.catmaejustificacion',
      referencedColumnNames: ['id'],
    }),
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
            name: 'razon_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'justificacion_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'trabajador_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'total_dias',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'permisobtw',
            type: 'boolean',
            default: true,
            isNullable: true,
          },
          {
            name: 'total_horas',
            type: 'int4',
            default: 0,
            isNullable: true,
          },
          {
            name: 'total_minutos',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'fecha',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'hora_inicio',
            type: 'time',
            isNullable: true,
          },
          {
            name: 'hora_fin',
            type: 'time',
            isNullable: true,
          },
          {
            name: 'comentario',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'estado',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'aprobado_por',
            type: 'int4',
            isNullable: true,
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
