import {Button} from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex w-full align-middle justify-center gap-3 bg-slate-100 opacity-80">
      <h1 className="text-indigo-600 text-3xl"> Welcome to Discord</h1>
      <Button variant={"default"} className="bg-indigo-800">
        hello
      </Button>
    </main>
  );
}
