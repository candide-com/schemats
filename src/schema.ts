import {Database} from "./schemaInterfaces"
import {PostgresDatabase} from "./schemaPostgres"

export function getDatabase(connection: string): Database {
  return new PostgresDatabase(connection)
}

export {Database} from "./schemaInterfaces"
