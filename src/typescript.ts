import * as _ from "lodash"

import {TableDefinition, ColumnDefinition} from "./schemaInterfaces"
import {transformTypeName} from "./options"

function makeInterfaceNameFromTableName(name: string): string {
  return name + "Row"
}

export function generateTableInterface(
  tableNameRaw: string,
  tableDefinition: TableDefinition,
) {
  const tableName = transformTypeName(tableNameRaw)
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
  return `${columnName}: ${column.outputTsType}${
    column.nullable ? "| null" : ""
  };`
}

export function generateTableInputInterface(
  tableNameRaw: string,
  tableDefinition: TableDefinition,
) {
  const tableName = transformTypeName(tableNameRaw)
  const members = Object.keys(tableDefinition)
    .map(columnName => {
      return generateInputColumnType(columnName, tableDefinition[columnName])
    })
    .join("\n")

  return `
        export interface ${makeInterfaceNameFromTableName(tableName)}Input {
        ${members}
        }
    `
}

function generateInputColumnType(
  columnName: string,
  column: ColumnDefinition,
): string {
  return `${columnName}${
    column.hasDefault || column.nullable ? "?" : ""
  }: ${column.inputTsType || column.outputTsType}${
    column.nullable ? "| null" : ""
  };`
}

export function generateTableList(tableNames: Array<string>) {
  const one = (name: string) => `${name}: {
      read: ${makeInterfaceNameFromTableName(transformTypeName(name))}
      write: ${makeInterfaceNameFromTableName(transformTypeName(name))}Input
    }`

  return `export interface Tables {
    ${tableNames.map(one).join("\n")}
  }`
}

export function generateEnumType(enumObject: any) {
  let enumString = ""
  for (const enumNameRaw in enumObject) {
    if (enumObject.hasOwnProperty(enumNameRaw)) {
      const enumName = transformTypeName(enumNameRaw)
      enumString += `export type ${enumName} = `
      enumString += enumObject[enumNameRaw]
        .map((v: string) => `'${v}'`)
        .join(" | ")
      enumString += ";\n"
    }
  }
  return enumString
}
