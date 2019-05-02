import * as _ from "lodash"

import {TableDefinition, ColumnDefinition} from "./schemaInterfaces"
import Options from "./options"

function makeInterfaceNameFromTableName(name: string): string {
  return name + "Row"
}

export function generateTableInterface(
  tableNameRaw: string,
  tableDefinition: TableDefinition,
  options: Options,
) {
  const tableName = options.transformTypeName(tableNameRaw)
  const members = Object.keys(tableDefinition)
    .map(columnName => {
      return generateColumnType(columnName, tableDefinition[columnName])
    })
    .join("\n")

  return `
        export interface ${makeInterfaceNameFromTableName(tableName)} {
        ${members}
        }
    `
}

function generateColumnType(
  columnName: string,
  column: ColumnDefinition,
): string {
  return `${columnName}: ${column.tsType}${column.nullable ? "| null" : ""};`
}

export function generateEnumType(enumObject: any, options: Options) {
  let enumString = ""
  for (const enumNameRaw in enumObject) {
    if (enumObject.hasOwnProperty(enumNameRaw)) {
      const enumName = options.transformTypeName(enumNameRaw)
      enumString += `export type ${enumName} = `
      enumString += enumObject[enumNameRaw]
        .map((v: string) => `'${v}'`)
        .join(" | ")
      enumString += ";\n"
    }
  }
  return enumString
}
