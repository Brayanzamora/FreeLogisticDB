import { MigrationInterface, QueryRunner } from "typeorm";

export class ProjectSchema1610002000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("project", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("project", true, true);
  }
}
