import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class DocumentoVersionTable1610001007000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaedocumentoversion';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['documento_id'],
      referencedTableName: 'talent.catmaedocumento',
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
            name: 'version',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'nombre_archivo',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'url',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'visible',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
          {
            name: 'created_at', //fechaCreacion
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'updated_at', //dateModificacion
            type: 'timestamp',
            default: 'now()',
            isNullable: false,
          },
          {
            name: 'documento_id',
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
