import { getAuthSession } from "@/lib/auth-options";
import { prisma } from "@/lib/db";

export type UpdateNameBodyType = {
    name: string;
};

export async function POST(req: Request) {
    const { name }: UpdateNameBodyType = await req.json();

    const session = await getAuthSession();

    try {
        if (!session) {
            return new Response("Unauthorized", { status: 401 });
        }

        await prisma.user.update({
            where: {
                id: session.user.id,
            },
            data: {
                name,
            },
        });

        return new Response("OK", { status: 200 });
    } catch (error) {
        return new Response((error as Error).message, { status: 500 });
    }
}
