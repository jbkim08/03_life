import React from "react";
import Sidebar from "./components/Sidebar";
import Widget from "./components/Widget";
import TodoWidget from "./components/TodoWidget";
import QuoteWidget from "./components/QuoteWidget";
import WeatherWidget from "./components/WeatherWidget";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  return (
    // flex-col(모바일 세로배치) -> md:flex-row(PC 가로배치)
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-50">
      {/* 1. 사이드바 블록 */}
      <Sidebar />

      {/* 2. 메인 컨텐츠 영역 */}
      <main className="flex-1 p-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </main>
    </div>
  );
}
