import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function QuoteWidget() {
  const { data, loading } = useFetch(
    "https://korean-advice-open-api.vercel.app/api/advice",
  );

  if (loading)
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        명언을 불러오는 중...
      </p>
    );

  return (
    <div className="flex flex-col justify-between min-h-22.5">
      <p className="text-gray-700 italic font-medium leading-relaxed">
        "{data.message}"
      </p>
      <p className="text-gray-400 text-xs text-right mt-2">— {data.author}</p>
    </div>
  );
}
