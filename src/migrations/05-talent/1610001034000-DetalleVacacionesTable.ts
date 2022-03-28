import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class DetalleVacacionesTable1610001034000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaevacacionesdetalle';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['aprobado_por'],
      referencedTableName: 'personas.catmaetrabajador',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['vacaciones_id'],
      referencedTableName: 'talent.catmaevacaciones',
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
            name: 'fechasolicitud',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'inicio',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'fin',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'comentario',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'vacaciones_id',
            type: 'int4',
            isNullable: false,
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
          {
            name: 'estado',
            type: 'boolean',
            default: null,
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
