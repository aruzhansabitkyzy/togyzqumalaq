"use client";
import { useParams } from "next/navigation";
import Board from "@/components/Board";
import SideBar from "@/components/SideBar";
import Loading from "@/components/ui/Loading";
import { getData } from "@/utils/functions";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
export default function GamePage() {
  const { gameId } = useParams();
  const { status, data, error } = useQuery({
    queryKey: ["room", gameId],
    queryFn: () => getData(gameId),
    refetchInterval: 1000,
  });

  useEffect(() => {
    console.log("UPDATED");
  }, [data]);

  if (status == "loading") return <Loading />;
  return (
    <div className="game bg-light3 dark:bg-dark3">
      <Board remoteData={data} status = {status}/>
      <SideBar remoteData={data} status = {status}/>
    </div>
  );
}
