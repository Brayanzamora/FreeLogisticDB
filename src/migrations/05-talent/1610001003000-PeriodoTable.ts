import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class PeriodoTable1610001003000 implements MigrationInterface {
  private readonly tableName = 'talent.catmaeperiodo';

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
            name: 'parent_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'estado',
            type: 'boolean',
            default: null,
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
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['parent_id'],
        referencedTableName: 'talent.catmaearea',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const foreignKey = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('parent_id') !== -1
    );
    await queryRunner.dropForeignKey(this.tableName, foreignKey);
    await queryRunner.dropTable(this.tableName);
  }
}
