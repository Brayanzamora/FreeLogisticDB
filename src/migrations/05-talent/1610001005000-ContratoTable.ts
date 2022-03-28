import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ContratoTable1610001005000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaecontrato';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['tipocontrato_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['clasecontrato_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['tipomoneda_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['trabajador_id'],
      referencedTableName: 'personas.catmaetrabajador',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['tiemporenovacioncontrato_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['tiporenovacioncontrato_id'],
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
            name: 'sueldo',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'haber1',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'haber2',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'haber3',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'haber4',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'egreso1',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'egreso2',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'egreso3',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'egreso4',
            type: 'decimal',
            precision: 9,
            scale: 3,
            isNullable: true,
          },
          {
            name: 'tipocontrato_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'clasecontrato_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'tipomoneda_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'trabajador_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'horario_rotativo',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
          {
            name: 'tiporenovacioncontrato_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'tiemporenovacioncontrato_id',
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
