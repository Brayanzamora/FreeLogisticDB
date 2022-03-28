import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class ParticipanteTable1610004000010 implements MigrationInterface {
  private readonly tableName = 'activities.catmaeparticipante';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['usuario_id'],
      referencedTableName: 'personas.catmaeusuario',
      referencedColumnNames: ['id'],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'nickname',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'usuariosistema',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
          {
            name: 'username',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'password',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'color',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'usuario_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'flag',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
