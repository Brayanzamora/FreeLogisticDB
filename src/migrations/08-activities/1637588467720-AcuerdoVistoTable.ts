import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from 'typeorm';

export class AcuerdoVistoTable1637588467720 implements MigrationInterface {
  private readonly tableName = 'activities.catdetacuerdovisto';
  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['acuerdo_id'],
      referencedTableName: 'activities.catmaeacuerdo',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['participante_id'],
      referencedTableName: 'activities.catmaeintegrante',
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
            name: 'visto',
            type: 'boolean',
            default: false,
            isNullable: false,
          },
          {
            name: 'acuerdo_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'participante_id',
            type: 'int4',
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: 'UQ_ACUERDOVISTO',
        columnNames: ['participante_id', 'acuerdo_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
