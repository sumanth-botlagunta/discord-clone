"use client";
import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import FileUploader from "@/components/file-uploader";

const formSchema = z.object({
  severName: z
    .string()
    .min(3, {message: "minimum length is 3"})
    .max(100, {message: "maxminum length 100 exceeded"}),
  imageUrl: z.string().url(),
});

const CreateServer = () => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      severName: "",
      imageUrl: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("....values =", values);
  };

  if (!isMounted) {
    return null;
  }
  return (
    <Dialog open>
      <DialogContent className="overflow-hidden bg-white p-5 text-black">
        <DialogHeader className="w-full px-5 pt-5">
          <DialogTitle className="text-center text-2xl">
            Customize your server
          </DialogTitle>
          <DialogDescription className="text-center text-sm text-zinc-400">
            Personalize your server with a unique name and custom image to make
            it stand out.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-9 px-6">
              <FormField
                control={form.control}
                name="imageUrl"
                render={({field}) => (
                  <FormItem>
                    <FormControl>
                      <FileUploader
                        endpoint="serverImage"
                        value={field.value}
                        onchange={field.onChange}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="severName"
                render={({field}) => (
                  <FormItem>
                    <FormLabel className="text-sm font-bold text-zinc-500">
                      Server Name
                    </FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        className="border-0 bg-zinc-500/50 text-black focus-visible:ring-0 focus-visible:ring-offset-0"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is your public display name.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter>
              <Button disabled={isLoading}>Create</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateServer;
