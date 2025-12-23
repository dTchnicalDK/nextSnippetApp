import { deleteSnippetById, DeleteResponse } from "@/actions";
import CopySnippetButton from "@/components/CopySnippetButton";
import DeleteSnippetButton from "@/components/deleteSnippet";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import { CopyIcon } from "lucide-react";
import Link from "next/link";

const snippetDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);

  // Handle invalid ID
  if (isNaN(id)) {
    return (
      <div className="w-full flex flex-col gap-5 p-5">
        <h1 className="text-2xl font-bold text-gray-800">Invalid Snippet ID</h1>
      </div>
    );
  }
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });
  // Handle snippet not found
  if (!snippet) {
    return (
      <div className="w-full flex flex-col gap-5 p-5">
        <h1 className="text-2xl font-bold text-gray-800">Snippet not found</h1>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-5 p-5">
      {/* top section  */}
      <div className="flex justify-between ">
        <h1 className="text-2xl font-bold">{snippet?.title.toString()}</h1>
        <div className="flex gap-2">
          <Link href={`/snippet/${id}/edit`}>
            <Button>edit</Button>
          </Link>
          <DeleteSnippetButton id={id} />
        </div>
      </div>
      <div className="w-full flex flex-col bg-gray-800 px-8 py-3 rounded-lg ">
        {/* title section */}
        <div className="min-w-full flex justify-between mb-5">
          <div className="w-1/2 flex items-center gap-2 font-semibold text-xl ">
            <div className="size-3 rounded-full bg-rose-500"></div>
            <div className="size-3 rounded-full bg-green-500"></div>
            <div className="size-3 rounded-full bg-yellow-500"></div>
            <h1>{snippet?.title.toString()}</h1>
          </div>
          <div className="size-3 px-10">
            <CopySnippetButton snippetCode={snippet?.code} />
          </div>
        </div>
        {/* code section */}
        <div>
          <pre>
            <code>{snippet?.code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default snippetDetailsPage;
