import {currentUser} from "@clerk/nextjs/server";
import {db} from "./db";
import {Profile} from "@prisma/client";
import {redirect} from "next/navigation";

export const intialProfile = async (): Promise<Profile> => {
  const user = await currentUser();

  if (!user) {
    return redirect("/sign-in");
  }

  const profile = await db.profile.findUnique({
    where: {
      userId: user.id,
    },
  });

  if (profile) {
    return profile;
  }

  const newProfile = await db.profile.create({
    data: {
      userId: user.id,
      name: `${user.firstName} ${user.lastName}`,
      imageUrl: user.imageUrl,
      email: user.primaryEmailAddress?.emailAddress || "",
    },
  });

  return newProfile;
};
