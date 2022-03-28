import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
  TableUnique,
} from 'typeorm';

export enum EstadoTrabajador {
  ACTIVO = 'ACTIVO',
  INACTIVO = 'INACTIVO',
  CESADO = 'CESADO',
  ELIMINADO = 'ELIMINADO',
}

export class TrabajadorTable1610000000900 implements MigrationInterface {
  private readonly tableName = 'personas.catmaetrabajador';

  private readonly foreignKeys = [
    new TableForeignKey({
      columnNames: ['sexo_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['civilstatus_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['nationality_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['rol_id'],
      referencedTableName: 'personas.catmaerol',
      referencedColumnNames: ['id'],
    }),
    new TableForeignKey({
      columnNames: ['persona_id'],
      referencedTableName: 'personas.catmaepersona',
      referencedColumnNames: ['id'],
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE',
    }),
    new TableForeignKey({
      columnNames: ['centrocosto_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    }),
  ];
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: this.tableName,
        columns: [
          {
            name: 'id',
            type: 'int4',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'foto',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'climalaboral',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'birthday',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'rxh_start',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'rxh_end',
            type: 'timestamp',
            isNullable: true,
          },
          {
            name: 'has_children',
            type: 'boolean',
            isNullable: true,
          },
          {
            name: 'amount_children',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'estado',
            type: 'enum',
            enum: [
              EstadoTrabajador.ACTIVO,
              EstadoTrabajador.CESADO,
              EstadoTrabajador.ELIMINADO,
              EstadoTrabajador.INACTIVO,
            ],
            isNullable: false,
          },
          {
            name: 'sexo_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'civilstatus_id',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'nationality_id',
            type: 'int4',
            isNullable: true,
          },
          {
            name: 'rol_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'persona_id',
            type: 'int4',
            isNullable: false,
          },
          {
            name: 'flag',
            type: 'boolean',
            default: true,
            isNullable: false,
          },
          {
            name: 'centrocosto_id',
            type: 'int4',
            isNullable: true,
          },
        ],
      })
    );

    await queryRunner.createForeignKeys(this.tableName, this.foreignKeys);

    await queryRunner.createUniqueConstraint(
      this.tableName,
      new TableUnique({
        columnNames: ['persona_id'],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKeys(this.tableName, this.foreignKeys);
    await queryRunner.dropTable(this.tableName);
  }
}
