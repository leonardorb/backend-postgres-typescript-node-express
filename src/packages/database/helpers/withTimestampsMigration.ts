import { TableOptions } from 'typeorm/schema-builder/options/TableOptions'

export function withTimestampsMigration(tableDefinitions: TableOptions) {
  return {
    ...tableDefinitions,
    columns: [
      ...tableDefinitions.columns,
      {
        default: `now()`,
        name: 'created_at',
        type: 'timestamp with time zone',
      },
      {
        default: `now()`,
        name: 'updated_at',
        type: 'timestamp with time zone',
      },
      {
        default: null,
        isNullable: true,
        name: 'deleted_at',
        type: 'timestamp with time zone',
      },
    ],
  }
}
