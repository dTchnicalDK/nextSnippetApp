import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { prisma } from "@/lib/prisma";
import Link from "next/link";

const snippetsTablePage = async () => {
  const snippets = await prisma.snippet.findMany();

  return (
    <main>
      <div className="flex justify-around gap-2 p-5">
        <h1 className="text-2xl text-center font-black text-lime-700">
          The Snippets Are
        </h1>
        <form action="">
          <Input type="search" placeholder="search snippet.." />
        </form>
        <Link href="/snippet/create">
          <Button className="cursor-pointer">Create new</Button>
        </Link>
      </div>
      <ul>
        {snippets.map((item, index) => (
          <div
            key={item.id}
            className="max-w-screen flex justify-between items-center gap-2 bg-gray-300/2 my-2 rounded-lg py-2 mx-5 px-8"
          >
            <li className="font-semibold">{`${index + 1}. ${item.title}`}</li>
            <Link href={`/snippet/${item.id}`}>view</Link>
          </div>
        ))}
      </ul>
    </main>
  );
};

export default snippetsTablePage;
