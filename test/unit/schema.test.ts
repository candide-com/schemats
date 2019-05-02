import * as assert from "assert"
import {getDatabase} from "../../src/schema"

describe("Schema", () => {
  describe("getDatabase", () => {
    it("invalid connection", () => {
      try {
        getDatabase("mongodb://localhost:27017")
      } catch (e) {
        assert.equal(
          e.message,
          "SQL version unsupported in connection: mongodb://localhost:27017",
        )
      }
    })
    it("postgres connection", () => {
      const db = getDatabase("postgres://user:password@localhost/test")
      assert.equal(db.constructor.name, "PostgresDatabase")
    })
  })
})
