import {
    MigrationInterface,
    QueryRunner,
    TableColumn,
    TableForeignKey,
  } from 'typeorm';
  
  export class UpdateUnidadNegocioFKToProyecto1634318115100
    implements MigrationInterface
  {
    private readonly tableName = 'project.catmaeproyecto';
    private readonly newFK = new TableForeignKey({
      columnNames: ['undnegocio_id'],
      referencedTableName: 'commons.catdetcompendio',
      referencedColumnNames: ['id'],
    });
  
    public async up(queryRunner: QueryRunner): Promise<void> {
      let table = await queryRunner.getTable('project.catmaeproyecto');
      const unidadNegocioFK = table!.foreignKeys.find(
        (x) => x.columnNames[0] === 'undnegocio_id'
      );
      await queryRunner.dropForeignKey(this.tableName, unidadNegocioFK!);
      await queryRunner.createForeignKey(this.tableName, this.newFK);
      
    }
  
    public async down(queryRunner: QueryRunner): Promise<void> {
        
      let table = await queryRunner.getTable('project.catmaeproyecto');
      const unidadNegocioFK = table!.foreignKeys.find(
        (x) => x.columnNames[0] === 'undnegocio_id'
      );
      await queryRunner.dropForeignKey(this.tableName, unidadNegocioFK!);
  
      await queryRunner.createForeignKeys(this.tableName, [
        new TableForeignKey({
          columnNames: ['undnegocio_id'],
          referencedTableName: 'contabilidad.catmaecentrocosto',
          referencedColumnNames: ['id'],
        })
      ]);
    }
  }