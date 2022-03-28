import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export enum TipoValor {
  STRING = 'STRING',
  NUMBER = 'NUMBER',
  PERCENT = 'PERCENT',
  DATE = 'DATE',
}

export class ReglasDeNegocioTable1610000000090 implements MigrationInterface {
  private readonly tableName = 'commons.catmaereglasdenegocio';

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
            isNullable: true,
          },
          {
            name: 'descripcion',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'clave',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'valor',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'tipo_valor',
            type: 'enum',
            enum: [
              TipoValor.STRING,
              TipoValor.NUMBER,
              TipoValor.PERCENT,
              TipoValor.DATE,
            ],
            isNullable: true,
          },
          {
            name: 'modulo',
            type: 'varchar',
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.tableName);
  }
}
