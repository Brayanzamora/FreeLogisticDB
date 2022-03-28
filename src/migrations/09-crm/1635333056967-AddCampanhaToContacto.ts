import {
  MigrationInterface,
  QueryRunner,
  TableColumn,
  TableForeignKey,
} from 'typeorm';

export class AddCampanhaToContacto1635333056967 implements MigrationInterface {
  private readonly tableName = 'crm.catmaecontacto';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'campanha_id',
        type: 'int4',
        isNullable: true,
      })
    );

    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['campanha_id'],
        referencedTableName: 'crm.catmaecampanha',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['campanha_id'],
        referencedTableName: 'crm.catmaecampanha',
        referencedColumnNames: ['id'],
      })
    );

    await queryRunner.dropColumn(
      this.tableName,
      new TableColumn({
        name: 'campanha_id',
        type: 'int4',
        isNullable: true,
      })
    );
  }
}
