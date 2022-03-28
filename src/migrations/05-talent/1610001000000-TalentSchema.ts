import { MigrationInterface, QueryRunner } from "typeorm";

export class TalentSchema1610001000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("talent", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("talent", true, true);
  }
}
