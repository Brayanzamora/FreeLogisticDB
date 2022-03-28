import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from "typeorm";

export class TenantTable1610003000160 implements MigrationInterface {
  private readonly tableName = "master.tenant";

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ["empresa_id"],
      referencedTableName: "master.catmaeempresa",
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
            name: "name",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "host",
            type: "varchar",
            isNullable: false,
          },
          {
            name: "database",
            type: "varchar",
            isNullable: false,
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
            name: "port",
            type: "int4",
            isNullable: false,
          },
          {
            name: "empresa_id",
            type: "int4",
            isNullable: false,
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

    await queryRunner.createUniqueConstraints(this.tableName, [
      new TableUnique({
        name: "UQ_EMPRESA_TENANT",
        columnNames: ["empresa_id"],
      }),
      new TableUnique({
        name: "UQ_NAME_TENANT",
        columnNames: ["name"],
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
