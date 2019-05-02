/**
 * Generate typescript interface from table schema
 * Created by xiamx on 2016-08-10.
 */

import * as _ from "lodash"

import {TableDefinition, ColumnDefinition} from "./schemaInterfaces"
import Options from "./options"

function nameIsReservedKeyword(name: string): boolean {
  const reservedKeywords = ["string", "number", "package"]
  return reservedKeywords.indexOf(name) !== -1
}

function normalizeName(name: string, options: Options): string {
  if (nameIsReservedKeyword(name)) {
    return name + "_"
  } else {
    return name
  }
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
        export interface ${normalizeName(tableName, options)} {
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

// export function generateTableTypes(
//   tableNameRaw: string,
//   tableDefinition: TableDefinition,
//   options: Options,
// ) {
//   const tableName = options.transformTypeName(tableNameRaw)
//   let fields = ""
//   Object.keys(tableDefinition).forEach(columnNameRaw => {
//     const type = tableDefinition[columnNameRaw].tsType
//     const nullable = tableDefinition[columnNameRaw].nullable ? "| null" : ""
//     const columnName = options.transformColumnName(columnNameRaw)
//     fields += `export type ${normalizeName(
//       columnName,
//       options,
//     )} = ${type}${nullable};\n`
//   })

//   return `
//         export namespace ${tableName}Fields {
//         ${fields}
//         }
//     `
// }
