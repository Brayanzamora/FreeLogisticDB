import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateNullableEjecutivoToProyecto1633343431659
  implements MigrationInterface
{
  private readonly tableName = 'project.catmaeproyecto';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'ejecutivodecuenta_id',
        type: 'int4',
        isNullable: false,
      }),
      new TableColumn({
        name: 'ejecutivodecuenta_id',
        type: 'int4',
        isNullable: true,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.changeColumn(
      this.tableName,
      new TableColumn({
        name: 'ejecutivodecuenta_id',
        type: 'int4',
        isNullable: true,
      }),
      new TableColumn({
        name: 'ejecutivodecuenta_id',
        type: 'int4',
        isNullable: false,
      })
    );
  }
}
