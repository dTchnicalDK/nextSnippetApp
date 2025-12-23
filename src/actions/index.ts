"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

/////////////////creating snippet
type ActionState = {
  errors?: {
    title?: string;
    code?: string;
    _form?: string;
  };
};

export async function createSnippet(
  prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const titleRaw = formData.get("title");
  const codeRaw = formData.get("code");

  // ⛔ EARLY EXIT → enables type narrowing
  if (typeof titleRaw !== "string" || typeof codeRaw !== "string") {
    return {
      errors: {
        title: "Title is required",
        code: "Code is required",
      },
    };
  }

  const title = titleRaw.trim();
  const code = codeRaw.trim();

  const errors: ActionState["errors"] = {};

  if (title.length < 3) {
    errors.title = "Title must be at least 3 characters";
  }

  if (code.length < 10) {
    errors.code = "Code must be at least 10 characters";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  try {
    await prisma.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (err) {
    console.error("Create snippet failed:", err);

    return {
      errors: {
        _form: "Failed to save snippet. Please try again.",
      },
    };
  }

  redirect("/snippet");
}
///////////////saving snippet
export async function saveSnippet(id: number, code: string) {
  const savedSnippet = await prisma.snippet.update({
    where: { id },
    data: {
      code,
    },
  });

  // Revalidate snippets pages (adjust path if needed)
  revalidatePath("/snippet");
  revalidatePath(`/snippet/${id}`);

  return savedSnippet;
}

////////////////delete snippet from database
export async function deleteSnippetById(id: number) {
  await prisma.snippet.delete({
    where: { id },
  });

  // Revalidate pages
  revalidatePath("/snippet");

  // Redirect after delete (recommended UX)
  redirect("/snippet");
}
