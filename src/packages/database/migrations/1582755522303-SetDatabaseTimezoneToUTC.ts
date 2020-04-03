import { MigrationInterface, QueryRunner } from 'typeorm'

export class SetDatabaseTimezoneToUTC1582755522303 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`set timezone = 'utc';`)
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public async down(queryRunner: QueryRunner): Promise<any> {}
}
