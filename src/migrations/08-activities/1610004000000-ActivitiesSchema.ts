import { MigrationInterface, QueryRunner } from "typeorm";

export class ActivitiesSchema1610004000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("activities", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("activities", true, true);
  }
}
