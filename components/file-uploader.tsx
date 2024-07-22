import {UploadDropzone} from "@/lib/uploadthing";
import React from "react";
import {X} from "lucide-react";
import Image from "next/image";

interface fileUploadProps {
  endpoint: "serverImage" | "messageFile";
  value: string;
  onchange: (url?: string) => void;
}
const FileUploader = ({endpoint, value, onchange}: fileUploadProps) => {
  const filetype = value.split(".").pop();
  if (value && filetype !== "pdf") {
    return (
      <div className="relative mx-auto size-20">
        {" "}
        <Image fill src={value} alt="upload" className="rounded-full" />
        <button
          className="absolute right-0 top-0 rounded-full bg-red-500 p-1 shadow-md"
          onClick={() => onchange("")}
        >
          <X className="size-4" />
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res) => {
        onchange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.error(error);
      }}
    />
  );
};

export default FileUploader;
