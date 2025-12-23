"use client";
import { useActionState, useEffect, useRef } from "react";
import { Button } from "./ui/button";
import { DeleteResponse, deleteSnippetById } from "@/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const DeleteSnippetButton = ({ id }: { id: number }) => {
  const initialState: DeleteResponse | null = null;
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  const [state, formAction, isPending] = useActionState(
    deleteSnippetById,
    initialState
  );

  //for toasting message or re-routing to new page
  useEffect(() => {
    if (!state) {
      return;
    }
    if (state.isSuccess) {
      toast.success(state.message || "success");
      router.push("/snippet");
    } else {
      toast.error(state.message);
    }
  }, [state, router]);

  //handle delete button click
  const handleDelete = () => {
    const confirmed = confirm("are you sure to delete !");
    if (confirmed) {
      formRef.current?.requestSubmit();
    }
  };

  return (
    <div>
      <form ref={formRef} action={formAction}>
        <input type="hidden" name="id" value={id} />
        <Button
          onClick={handleDelete}
          type="button"
          disabled={isPending}
          variant="destructive"
        >
          {isPending ? "Deleting..." : "Delete"}
        </Button>
      </form>
    </div>
  );
};

export default DeleteSnippetButton;
