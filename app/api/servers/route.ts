import {currentProfile} from "@/lib/current-user";
import {v4 as uuidv4} from "uuid";
import {db} from "@/lib/db";
import {NextResponse} from "next/server";
import {memberRole} from "@prisma/client";

export async function POST(req: Request) {
  try {
    const profile = await currentProfile();
    if (!profile) {
      return new NextResponse("unauthorized", {status: 401});
    }

    const {serverName, imageUrl} = await req.json();
    if (!imageUrl || !serverName) {
      console.error("[POST] [/SERVER]", "imageurl or servername is null");
      return new NextResponse("imageurl or servername is null", {status: 401});
    }

    console.log("profile.id .....", profile.id);
    const server = await db.server.create({
      data: {
        imageUrl,
        name: serverName,
        inviteCode: uuidv4(),
        profileId: profile.userId,
        channels: {
          create: [{name: "general", profileId: profile.userId}],
        },
        members: {
          create: [{profileId: profile.userId, role: memberRole.ADMIN}],
        },
      },
    });

    return NextResponse.json(server);
  } catch (err) {
    console.error("[POST] [/SERVER]", err);
    return new NextResponse("internal server error", {status: 500});
  }
}
