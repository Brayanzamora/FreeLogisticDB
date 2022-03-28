import { MigrationInterface, QueryRunner } from "typeorm";

export class ContabilidadSchema1610000002000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    queryRunner.createSchema("contabilidad", true);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.dropSchema("contabilidad", true, true);
  }
}
