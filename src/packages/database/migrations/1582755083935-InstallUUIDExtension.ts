import { MigrationInterface, QueryRunner } from 'typeorm'

export class InstallUUIDExtension1582755083935 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('create extension if not exists "uuid-ossp";')
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('drop extension if exists "uuid-ossp";')
  }
}
