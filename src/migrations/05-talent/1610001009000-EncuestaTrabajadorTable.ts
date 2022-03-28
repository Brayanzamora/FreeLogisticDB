import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from 'typeorm';

export class EncuestaTrabajadorTable1610001009000
  implements MigrationInterface
{
  private readonly tableName = 'talent.catmaeencuestatrabajador';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['trabajador_id'],
      referencedTableName: 'personas.catmaetrabajador',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['encuesta_id'],
      referencedTableName: 'talent.catmaeencuesta',
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
            name: 'trabajador_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'encuesta_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'fechacreacion',
            type: 'timestamp',
            default: 'now()',
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

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: 'UQ_ENCUESTATRABAJADOR',
        columnNames: ['trabajador_id', 'encuesta_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
