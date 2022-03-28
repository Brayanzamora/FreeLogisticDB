import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddEmailColumPersonaTable1644423501792
  implements MigrationInterface {
  private readonly tableName = 'personas.catmaepersona'
  private readonly columnName = 'email'
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: this.columnName,
        type: 'varchar',
        isNullable: true,
      }),
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnName)
  }
}
