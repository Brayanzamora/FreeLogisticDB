import { MigrationInterface, QueryRunner } from "typeorm";

export class MasterSchema1610003000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("master", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("master", true, true);
  }
}
