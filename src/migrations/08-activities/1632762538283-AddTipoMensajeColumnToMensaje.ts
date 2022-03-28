import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export enum TipoMensaje {
  MESSAGE = 'MESSAGE',
  FILE = 'FILE',
  IMAGE = 'IMAGE',
}

export class AddTipoMensajeColumnToMensaje1632762538283
  implements MigrationInterface
{
  private readonly tableName = 'activities.catmaemensaje';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      this.tableName,
      new TableColumn({
        name: 'tipo_mensaje',
        type: 'enum',
        enum: [TipoMensaje.MESSAGE, TipoMensaje.FILE, TipoMensaje.IMAGE],
        isNullable: false,
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'tipo_mensaje');
  }
}
