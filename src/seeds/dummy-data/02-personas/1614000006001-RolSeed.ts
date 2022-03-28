import { Rol } from '../../../entities/02-personas/catmaerol.entity';
import { MigrationInterface, QueryRunner } from 'typeorm';
import { ROLES } from './data/catmaerol.seed';

export class RolSeed1614000006001 implements MigrationInterface {
  private readonly tableName = 'personas.catmaerol';

  public async up(queryRunner: QueryRunner): Promise<void> {
    let roles: Partial<Rol>[] = [];

    for (const c of ROLES) {
      roles.push({ ...c, flag: true });
    }

    await queryRunner.manager.getRepository(Rol).save(roles);

    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH ${
        ROLES.length + 1
      };`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.manager.getRepository(Rol).delete('');
    await queryRunner.manager.query(
      `ALTER SEQUENCE ${this.tableName}_id_seq RESTART WITH 1;`
    );
  }
}
