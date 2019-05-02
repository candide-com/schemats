import * as osm from "../../expected/postgres/osm"
import * as PgPromise from "pg-promise"
const pgp = PgPromise()
const db = pgp("postgres://username:password@host:port/databaset")
;(async () => {
  const emailAndDisplayName: {
    email: osm.UsersRow["email"]
    display_name: osm.UsersRow["display_name"]
  } = await db.query("SELECT (email, display_name) FROM users")

  console.log(emailAndDisplayName)
})()
