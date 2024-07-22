import {auth} from "@clerk/nextjs/server";
import {db} from "./db";
import {Profile} from "@prisma/client";

export const currentProfile = async (): Promise<null | Profile> => {
  const {userId} = auth();

  if (!userId) {
    return null;
  }

  const profile = await db.profile.findUnique({
    where: {
      userId,
    },
  });

  return profile;
};
