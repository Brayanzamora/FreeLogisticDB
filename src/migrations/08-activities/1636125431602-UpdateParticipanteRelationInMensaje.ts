import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class UpdateParticipanteRelationInMensaje1636125431602
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaemensaje';
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = await queryRunner.getTable(this.tableName);
    let fk = table?.foreignKeys.find(
      (fk) => fk.columnNames[0] === 'participante_id'
    );

    await queryRunner.dropForeignKey(this.tableName, fk!);
    await queryRunner.createForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['participante_id'],
        referencedTableName: 'activities.catmaeparticipante',
        referencedColumnNames: ['id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      this.tableName,
      new TableForeignKey({
        columnNames: ['participante_id'],
        referencedTableName: 'crm.catmaeparticipante',
        referencedColumnNames: ['id'],
      })
    );
  }
}
