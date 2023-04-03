'use client'

import {
  Kysely,
  Generated,
} from 'kysely';

import { NeonDialect } from "kysely-neon";

interface playing_with_neon_Table {
  id: Generated<number>
  name: string
  value: number
}

interface Database {
  playing_with_neon: playing_with_neon_Table
}

export default async function Home() {
  const db = new Kysely<Database>({
    dialect: new NeonDialect({
      connectionString: "NEON_DATABASE_URL=postgres://ai-work:rxia5S1LZMjq@lingering-flower-232313.eu-central-1.aws.neon.tech/neondb",
    }),
  });
  
  const result = await db
  .selectFrom("playing_with_neon")
  .selectAll()
  .execute()
  
  console.log("backend result ", result);

  return (
    <div>result</div>
  )
}
