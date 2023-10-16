import { ScoresTable } from "@/components/scores-table";
import { db } from "@/db"
import { scoresTable } from "@/db/schemas/scores"
import { desc } from "drizzle-orm"

export default async function LeaderboardPage() {
    const scores = await db.select({ name: scoresTable.name, score: scoresTable.score }).from(scoresTable).orderBy(desc(scoresTable));

    return (
        <ScoresTable scores={scores} />
    )
}