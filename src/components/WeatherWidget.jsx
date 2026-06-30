import React, { useState, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export default function WeatherWidget() {
  const { data, loading } = useFetch("https://wttr.in/Busan?format=j1");

  if (loading)
    return (
      <p className="text-gray-400 text-sm animate-pulse">
        날씨 정보 로딩 중...
      </p>
    );

  const current = data.current_condition[0];

  return (
    <div className="flex items-center justify-between">
      <div>
        <div className="text-4xl font-bold text-gray-800">
          {current.temp_C}°C
        </div>
        <p className="text-gray-500 text-sm mt-1 capitalize">
          {current.weatherDesc[0].value}
        </p>
      </div>
      <div className="text-right text-xs text-gray-400 space-y-1">
        <p>💧 습도: {current.humidity}%</p>
        <p>📍 위치: 대한민국 부산</p>
      </div>
    </div>
  );
}
