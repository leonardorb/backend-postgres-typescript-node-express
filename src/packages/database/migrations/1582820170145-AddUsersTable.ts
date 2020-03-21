import { MigrationInterface, QueryRunner, Table } from 'typeorm'
import config from '~/config'
import { withTimestampsMigration } from '~/packages/database/helpers/withTimestampsMigration'

const tableName = `${config.DB.MAIN_SCHEMA}.users`

export class AddUsersTable1582820170145 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(
      new Table(
        withTimestampsMigration({
          columns: [
            {
              generationStrategy: 'uuid',
              isGenerated: true,
              isPrimary: true,
              name: 'id',
              type: 'uuid',
            },
            {
              isNullable: false,
              name: 'email',
              type: 'varchar',
            },
          ],
          name: tableName,
        }),
      ),
    )
    await queryRunner.query(`select app_audit.audit_table('${tableName}')`)
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable(`${tableName}`)
  }
}
