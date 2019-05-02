import * as assert from "power-assert"
import {Database, getDatabase} from "../../src/index"
import {writeTsFile, compare, loadSchema} from "../testUtility"

describe("schemat generation integration testing", () => {
  describe("postgres", () => {
    let db: Database
    before(async function() {
      if (!process.env.POSTGRES_URL) {
        return this.skip()
      }
      db = getDatabase(process.env.POSTGRES_URL)
      await loadSchema(db, "./test/fixture/postgres/initCleanup.sql")
    })

    it("Basic generation", async () => {
      const inputSQLFile = "test/fixture/postgres/osm.sql"
      const outputFile = "./test/actual/postgres/osm.ts"
      const expectedFile = "./test/expected/postgres/osm.ts"
      const config: any = "./fixture/postgres/osm.json"
      await writeTsFile(inputSQLFile, config, outputFile, db)
      return assert(await compare(expectedFile, outputFile))
    })
  })
})
