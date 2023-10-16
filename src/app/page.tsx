import { ScoresTable } from "@/components/scores-table";
import { db } from "@/db"
import { scoresTable } from "@/db/schemas/scores"
import { desc } from "drizzle-orm"
import Link from "next/link";


export default async function Home() {

  const scores = await db.select({ name: scoresTable.name, score: scoresTable.score }).from(scoresTable).orderBy(desc(scoresTable.score)).limit(10);

  return (
      <div className="text-center">
        <h2 className="text-3xl mb-2">Global Leaderboard</h2>
        <p>for the complete leaderboard,{' '}<Link href="/leaderboard" className="text-blue-400 underline">click here.</Link></p>
        <ScoresTable scores={scores} />
      </div>
  )
}
