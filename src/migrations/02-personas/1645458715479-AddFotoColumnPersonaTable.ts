import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AddFotoColumnPersonaTable1645458715479
  implements MigrationInterface {
  private readonly tableName = 'personas.catmaeusuario'
  private readonly columnName = 'foto'
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: this.columnName,
        type: 'varchar',
        isNullable: true,
      }),
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, this.columnName)
  }
}
