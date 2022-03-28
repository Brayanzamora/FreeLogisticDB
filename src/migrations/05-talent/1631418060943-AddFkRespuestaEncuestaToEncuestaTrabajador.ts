import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class AddFkRespuestaEncuestaToEncuestaTrabajador1631418060943
  implements MigrationInterface
{
  private readonly tableName = 'talent.catmaerespuestatexto';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table: any = await queryRunner.getTable(this.tableName);
    const perfil = table.foreignKeys.find(
      (fk: any) => fk.columnNames.indexOf('perfil_id') !== -1
    );

    const fkRespuestaEncuesta = new TableForeignKey({
      columnNames: ['respuestaencuesta_id'],
      referencedTableName: 'talent.catmaerespuestaencuesta',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    });

    await queryRunner.dropForeignKeys(this.tableName, [perfil]);
    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ALTER COLUMN "perfil_id" DROP NOT NULL;`
    );

    await queryRunner.query(
      `ALTER TABLE ${this.tableName} ADD "respuestaencuesta_id" int4 NULL;`
    );
    await queryRunner.createForeignKeys(this.tableName, [fkRespuestaEncuesta]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
