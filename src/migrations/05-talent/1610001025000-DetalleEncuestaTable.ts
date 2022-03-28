import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export enum TipoInputPregunta {
  TEXTO = 'TEXTO',
  SELECT = 'SELECT',
  MULTISELECT = 'MULTISELECT',
}

export class DetalleEncuestaTable1610001025000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaedetalleencuesta';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['pregunta_id'],
      referencedTableName: 'talent.catmaepregunta',
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
            name: 'estado',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
          {
            name: 'orden',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'tipoinput',
            type: 'enum',
            enum: [
              TipoInputPregunta.TEXTO,
              TipoInputPregunta.SELECT,
              TipoInputPregunta.MULTISELECT,
            ],
            isNullable: false,
          },
          {
            name: 'pregunta_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'encuesta_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'tipo_respuesta_id',
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
