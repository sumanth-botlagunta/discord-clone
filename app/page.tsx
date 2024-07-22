import CreateServer from "@/components/modals/create-server";
import {db} from "@/lib/db";
import {intialProfile} from "@/lib/initial-profile";
import "@uploadthing/react/styles.css";

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
    return (
      <div>
        {" "}
        <CreateServer />
      </div>
    );
  }
  return <main>Server created</main>;
}
