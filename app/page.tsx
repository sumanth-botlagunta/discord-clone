"use client";
import {ModeToggle} from "@/components/model-toggle";
import {Button} from "@/components/ui/button";
import {UserButton} from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex w-full justify-center gap-3 bg-slate-100 align-middle opacity-80 dark:bg-slate-700">
      <h1 className="text-3xl text-indigo-600"> Welcome to Discord</h1>
      <Button variant={"default"} className="bg-indigo-800">
        hello
      </Button>
      <ModeToggle />
      <UserButton />
    </main>
  );
}
