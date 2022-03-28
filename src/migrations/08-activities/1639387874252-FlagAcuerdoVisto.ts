import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class FlagAcuerdoVisto1639387874252 implements MigrationInterface {
  private readonly tableName = 'activities.catdetacuerdovisto';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'flag',
        type: 'boolean',
        default: true,
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'flag');
  }
}
