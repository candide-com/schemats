import {camelCase, upperFirst} from "lodash"

const DEFAULT_OPTIONS: OptionValues = {
  writeHeader: true,
}

export interface OptionValues {
  writeHeader?: boolean // write schemats description header
}

export default class Options {
  public options: OptionValues

  constructor(options: OptionValues = {}) {
    this.options = {...DEFAULT_OPTIONS, ...options}
  }
}

export function transformTypeName(typename: string) {
  return upperFirst(camelCase(typename))
}
