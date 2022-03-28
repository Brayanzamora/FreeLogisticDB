import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class DeletedColumnToGrupos1636543782864 implements MigrationInterface {
  private readonly tableName = 'activities.catmaegrupo';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'active',
        type: 'boolean',
        default: true,
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'active');
  }
}
