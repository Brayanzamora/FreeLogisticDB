import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class UsuarioTable1610000001000 implements MigrationInterface {
  private readonly tableName = "personas.catmaeusuario";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["trabajador_id"],
      referencedTableName: "personas.catmaetrabajador",
      referencedColumnNames: ["id"],
    }),
    new TableForeignKey({
      columnNames: ["perfil_id"],
      referencedTableName: "commons.catdetcompendio",
      referencedColumnNames: ["id"],
    }),
  ];

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: "id",
            type: "int4",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment",
          },
          {
            name: "username",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "password",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "is_admin",
            type: "boolean",
            default: false,
            isNullable: true,
          },
          {
            name: "is_loggin",
            type: "boolean",
            default: false,
            isNullable: false,
          },
          {
            name: "session",
            type: "varchar",
            isNullable: true,
          },
          {
            name: "trabajador_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "perfil_id",
            type: "int4",
            isNullable: true,
          },
          {
            name: "flag",
            type: "boolean",
            default: true,
            isNullable: false,
          },
        ],
      })
    );
    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        name: "UQ_USERNAME",
        columnNames: ["username"],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
