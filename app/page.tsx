import {db} from "@/lib/db";
import {intialProfile} from "@/lib/initial-profile";

export default async function Home() {
  const profile = await intialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.id,
        },
      },
    },
  });

  if (!server) {
    return <h1>Create a server</h1>;
  }
  return <main>Server created</main>;
}
