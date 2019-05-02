import * as assert from "assert"
import * as Typescript from "../../src/typescript"
import Options from "../../src/options"

const options = new Options({})

describe("Typescript", () => {
  describe("generateEnumType", () => {
    it("empty object", () => {
      const enumType = Typescript.generateEnumType({}, options)
      assert.equal(enumType, "")
    })
    it("with enumerations", () => {
      const enumType = Typescript.generateEnumType(
        {
          enum1: ["val1", "val2", "val3", "val4"],
          enum2: ["val5", "val6", "val7", "val8"],
        },
        options,
      )
      assert.equal(
        enumType,
        "export type enum1 = 'val1' | 'val2' | 'val3' | 'val4';\n" +
          "export type enum2 = 'val5' | 'val6' | 'val7' | 'val8';\n",
      )
    })
  })
  describe("generateEnumType", () => {
    it("empty object", () => {
      const enumType = Typescript.generateEnumType({}, options)
      assert.equal(enumType, "")
    })
    it("with enumerations", () => {
      const enumType = Typescript.generateEnumType(
        {
          enum1: ["val1", "val2", "val3", "val4"],
          enum2: ["val5", "val6", "val7", "val8"],
        },
        options,
      )
      assert.equal(
        enumType,
        "export type enum1 = 'val1' | 'val2' | 'val3' | 'val4';\n" +
          "export type enum2 = 'val5' | 'val6' | 'val7' | 'val8';\n",
      )
    })
  })
})
