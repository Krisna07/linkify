"use client";
import { useEffect, useState } from "react";
import getBoards from "../../../../../components/Dashboard_components/utils/Fetchbaords";
import { boardProps } from "../../../../../components/Dashboard_components/utils/Interfaces";
import { toast } from "react-toastify";
import Loading from "../../../../(auth)/auth/Formcomponents/Loading";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  const [board, setBoard] = useState<boardProps>();
  const [loading, isLoading] = useState<boolean>(true);
  const route = useRouter();
  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const data = await getBoards();
        if (data.data && slug) {
          setBoard(data.data.filter((item: boardProps) => item.id == slug));
        }
      } catch (err: any) {
        toast.error(err.message || "An error occurred");
        isLoading(false);
      } finally {
        isLoading(false);
      }
    };
    fetchBoards();
  }, [slug]);

  if (loading) {
    return <Loading />;
  } else {
    return board ? <div>page</div> : route.push("/dashboard/boards");
  }
}
