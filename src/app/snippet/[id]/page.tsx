import { deleteSnippetById, DeleteResponse } from "@/actions";
import DeleteSnippetButton from "@/components/deleteSnippet";
import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const snippetDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const id = parseInt((await params).id);
  const snippet = await prisma.snippet.findUnique({
    where: { id },
  });

  return (
    <div className="max-w-full flex flex-col justify-center gap-3 mx-10">
      <div className="flex justify-between mt-2">
        <h1 className="text-2xl font-bold text-gray-800">
          {snippet?.title.toString()}
        </h1>
        <div className="flex gap-2">
          <Link href={`/snippet/${id}/edit`}>
            <Button>edit</Button>
          </Link>
          {/* <form action={deleteSnippet}>
            <Button type="submit" variant="destructive">
              delete
            </Button>
          </form> */}
          <DeleteSnippetButton id={id} />
        </div>
      </div>
      <div className="bg-gray-300 p-8 rounded-xl">
        <pre>
          <code>{snippet?.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default snippetDetailsPage;
