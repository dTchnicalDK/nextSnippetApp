import MonacoEditor from "@/components/monacoEditor";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { notFound } from "next/navigation";

const EditSnippet = async ({ params }: { params: { id: string } }) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({ where: { id } });

  if (!snippet) {
    notFound();
  }

  return (
    <div>
      <div className="header-wrapper flex justify-between gap-2 px-5 my-2">
        <h1 className="text-2xl font-semibold text-zinc-700">
          Edit: {snippet?.title}
        </h1>
      </div>

      <MonacoEditor id={id} code={snippet.code} language="javascript" />
    </div>
  );
};

export default EditSnippet;
