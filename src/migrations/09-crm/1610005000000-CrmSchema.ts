import { MigrationInterface, QueryRunner } from "typeorm";

export class CrmSchema1610005000000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("crm", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("crm", true, true);
  }
}
