"use client";
import { useParams } from "next/navigation";

export default function MovieDetail() {
  const param = useParams();
  const { id } = param;
  if (!id) {
    return <div>Something wrong!</div>;
  }
  return <div className="text-white">dsaf</div>;
}
