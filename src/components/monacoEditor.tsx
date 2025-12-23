"use client";
import { Editor } from "@monaco-editor/react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { saveSnippet } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export interface MonacoEditorProps {
  id: number;
  code: string;
  language: string;
}

const MonacoEditor = ({
  id,
  code,
  language = "javascript",
}: MonacoEditorProps) => {
  const [rawCode, setRawCode] = useState<string>(code);
  const router = useRouter();

  //assinging code state fist time on component load
  useEffect(() => {
    setRawCode(code);
  }, []);

  const handleSave = async () => {
    // console.log("data", rawCode);
    try {
      const savedData = await saveSnippet(id, rawCode);
      console.log("savedData", savedData);
      if (savedData) {
        toast.success("data saved succefully!");
        // router.push(`/snippet/${id}`);
        // redirect(`/snippet/${id}`);
      }
    } catch (error) {
      console.log("error while updating", error);
      toast.error("something went wrong wile updating");
    }
  };

  const handleCancel = () => {
    const shouldCancel = confirm("Any unsaved data will be lost!");
    if (shouldCancel) {
      router.push(`/snippet/${id}`);
    }
  };

  return (
    <div className="rounded-xl overflow-hidden min-h-[50vh]">
      <div className="flex justify-end gap-5 my-2">
        <Button
          onClick={handleSave}
          className="bg-green-600 hover:bg-green-500 cursor-pointer"
        >
          Save
        </Button>
        <Button
          onClick={handleCancel}
          variant="destructive"
          className="cursor-pointer"
        >
          Cancel
        </Button>
      </div>

      <Editor
        height="60vh"
        defaultLanguage={language}
        value={rawCode}
        theme="vs-dark"
        onChange={(value) => {
          const updated = value ?? "";
          setRawCode(updated);
        }}
        options={{
          padding: {
            top: 20,
            bottom: 20,
          },

          fontSize: 14,
          minimap: { enabled: false },
          wordWrap: "on",
          automaticLayout: true,
        }}
      />
    </div>
  );
};

export default MonacoEditor;
