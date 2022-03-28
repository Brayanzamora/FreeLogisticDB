import { MigrationInterface, QueryRunner } from "typeorm";

export class LogisticSchema1610000002001 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("facturacion", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("facturacion", true, true);
  }
}
