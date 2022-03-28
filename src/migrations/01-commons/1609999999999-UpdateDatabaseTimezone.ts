import { MigrationInterface, QueryRunner } from "typeorm";

export class UpdateDatabaseTimezone1609999999999 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.query(
      `SELECT * FROM pg_timezone_names; ALTER DATABASE ${process.env.DB_NAME} SET timezone TO 'Etc/UTC'; SET TIME ZONE 'UTC';`
    );
  }

  public async down(_: QueryRunner): Promise<void> {}
}
