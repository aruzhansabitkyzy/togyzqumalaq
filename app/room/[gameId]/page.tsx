"use client";
import { useParams } from "next/navigation";
import Board from "@/components/model/Board";
import SideBar from "@/components/ui/SideBar";
import Loading from "@/components/Loading";
import { getData } from "@/utils/functions";
import { useQuery } from "@tanstack/react-query";
export default function GamePage() {
  const { gameId } = useParams();

  const { status, data, error } = useQuery({
    queryKey: ["room", gameId],
    queryFn: () => getData(gameId),
  });

  if (status == "loading") return <Loading />;
  if (status == "error") return <h1>Error: {}</h1>;
  return (
    <div className="game bg-light3 dark:bg-dark3">
      <Board remoteData={data} />
      <SideBar remoteData={data} />
    </div>
  );
  return (
    <>
      <h1> Hey </h1>
    </>
  );
}
