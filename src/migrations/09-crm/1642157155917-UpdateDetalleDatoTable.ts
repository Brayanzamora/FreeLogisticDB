import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateDetalleDatoTable1642157155917 implements MigrationInterface {
  private readonly tableName = 'crm.catdetdato';
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumns(this.tableName, [
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'telefono',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'georeferencia',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'persona_contacto',
        type: 'varchar',
        isNullable: true,
      }),
    ]);

    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'nombre',
        type: 'varchar',
        isNullable: false,
      }),
      new TableColumn({
        name: 'valor',
        type: 'varchar',
        isNullable: false,
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'email',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'telefono',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'georeferencia',
        type: 'varchar',
        isNullable: true,
      }),
      new TableColumn({
        name: 'persona_contacto',
        type: 'varchar',
        isNullable: true,
      }),
    ]);

    await queryRunner.dropColumns(this.tableName, [
      new TableColumn({
        name: 'nombre',
        type: 'varchar',
        isNullable: false,
      }),
      new TableColumn({
        name: 'valor',
        type: 'varchar',
        isNullable: false,
      }),
    ]);
  }
}
