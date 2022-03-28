import { MigrationInterface, QueryRunner } from "typeorm";

export class CommonsSchema1610000000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("commons", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("commons", true, true);
  }
}
