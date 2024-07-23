import CreateServer from "@/components/modals/create-server";
import {db} from "@/lib/db";
import {intialProfile} from "@/lib/initial-profile";
import "@uploadthing/react/styles.css";
import {redirect} from "next/navigation";

export default async function Home() {
  const profile = await intialProfile();

  const server = await db.server.findFirst({
    where: {
      members: {
        some: {
          profileId: profile.userId,
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
  
  redirect(`/servers/${server.id}`);
}
