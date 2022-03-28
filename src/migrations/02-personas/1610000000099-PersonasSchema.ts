import { MigrationInterface, QueryRunner } from "typeorm";

export class PersonasSchema1610000000099 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("personas", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("personas", true, true);
  }
}
