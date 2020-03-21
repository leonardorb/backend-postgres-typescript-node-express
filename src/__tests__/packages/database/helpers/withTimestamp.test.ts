import { Table } from 'typeorm'
import { withTimestampsMigration } from '~/packages/database/helpers/withTimestampsMigration'

describe('withTimestampsMigration', () => {
  it('should generate a TypeORM table with timestamps', () => {
    const table = new Table(
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
        name: 'users',
      }),
    )

    expect(table.columns).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'created_at' })]))
    expect(table.columns).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'updated_at' })]))
    expect(table.columns).toEqual(expect.arrayContaining([expect.objectContaining({ name: 'deleted_at' })]))
  })
})
