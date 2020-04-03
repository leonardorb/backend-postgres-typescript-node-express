import { MigrationInterface, QueryRunner } from 'typeorm'
import { auditSQL } from '~/packages/database/helpers/installDatabaseAudit'

export class InstallDatabaseAudit1582815723334 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(auditSQL)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
