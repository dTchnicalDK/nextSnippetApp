"use client";
import { createSnippet } from "@/actions";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { prisma } from "@/lib/prisma";
import { error } from "console";
import { redirect } from "next/navigation";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

const initialState = { errors: {} };
const CreateSnippetPage = () => {
  const [state, formAction] = useActionState(createSnippet, initialState);
  const { pending } = useFormStatus();

  return (
    <div>
      <h1 className="text-center font-bold text-4xl">welcome snippet page</h1>
      <div>
        <form action={formAction} className="flex flex-col px-20 py-5 gap-5">
          <div className="w-full flex justify-between ">
            <Label htmlFor="title">title here</Label>
            <div className="flex flex-col w-full">
              <Input type="text" name="title" placeholder="your title here" />
              {state.errors?.title && (
                <p className="text-red-500 text-sm">{state.errors.title}</p>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between ">
            <Label htmlFor="code">code here</Label>
            <div className="flex flex-col w-full">
              <Textarea name="code" placeholder="your code here" />
              {state.errors?.code && (
                <p className="text-red-500 text-sm">{state.errors.code}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-amber-400 p-5 rounded-xl cursor-pointer"
            disabled={pending}
          >
            {pending ? "Creating..." : "Create"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSnippetPage;
