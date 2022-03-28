import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class DocumentoTable1610001006000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaedocumento';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['categoria_documento_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['creado_por_id'],
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
            name: 'nombre',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'fecha_creacion',
            type: 'timestamp',
            isNullable: false,
          },
          {
            name: 'categoria_documento_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'creado_por_id',
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
