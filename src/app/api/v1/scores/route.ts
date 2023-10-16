import { db } from "@/db";
import { scoresTable, scoresValidationSchema } from "@/db/schemas/scores";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const body = await req.json();

    const scoreValidation = scoresValidationSchema.safeParse(body);

    if (!scoreValidation.success) {
        return NextResponse.json({ ...scoreValidation.error }, {
            status: 400
        });
    }

    try {
        const { data: validatedScore } = scoreValidation
        const insertedScores = await db.insert(scoresTable).values({
            name: validatedScore.name,
            score: validatedScore.score.toString(),
        }).returning();

        const insertedScore = insertedScores[0];
        return NextResponse.json(insertedScore);
    } catch (e: any) {
        return NextResponse.json(
            { error: "Internal Server Error" },
            {
                status: 500,
            }
        );
    }
}