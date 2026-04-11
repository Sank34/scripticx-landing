/* eslint-disable react/jsx-key */
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslations } from "next-intl";

type Tab = {
    id: string,
    label: string,
    src: string
}
const tabs: Tab[] = [
  { id: "editor", label: "editor", src: "/editor.png" },
  { id: "live", label: "live", src: "/liveCode.png" },
  { id: "classes", label: "classes", src: "/classes.png" },
  { id: "socials", label: "socials", src: "/feed.png" },
  { id: "dashboard", label: "dashboard", src: "/dashboard.png" },
];

export default function ShowcaseTabs() {
  const t = useTranslations("ShowcaseTabs");
  const [active, setActive] = useState(tabs[0]);
  const [displayed, setDisplayed] = useState(tabs[0]);

  const handleChange = (tab:Tab) => {
    if (tab.id === active.id) return;
    setActive(tab);
    setDisplayed(tab);
  };

  return (
    <section className="py-32 px-6 text-center">

      <h2 className="text-4xl font-semibold tracking-tight">
        {t("title")}
      </h2>

      {/* MOCK UI */}
      <div className="mt-12 max-w-6xl mx-auto rounded-2xl overflow-hidden border shadow-xl bg-white p-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.45, ease: [0.4, 0, 0.2, 1] }}
            className="relative w-full aspect-[16/9] bg-white rounded-xl overflow-visible"
          >

          {active.id === "editor" && (
            <>
              {/* Sidebar */}
              <div className="absolute left-0 top-0 h-full w-48 bg-white border-r border-gray-200 p-3 space-y-2">
                <div className="h-4 w-20 bg-gray-200 rounded" />
                <div className="h-3 w-full bg-gray-200 rounded" />
                <div className="h-3 w-3/4 bg-gray-200 rounded" />
                <div className="h-3 w-2/3 bg-gray-200 rounded" />
              </div>

              {/* Main editor */}
              <div className="absolute left-48 right-64 top-0 bottom-0 p-4">
                <div className="h-6 w-40 bg-gray-200 rounded mb-4" />

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-full relative">
                  {/* Code lines */}
                  <div className="space-y-2 text-sm font-mono text-gray-700 relative">
                    <motion.div
                      className="h-3 bg-green-200 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: "70%" }}
                      transition={{ duration: 1, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <motion.div
                      className="h-3 bg-gray-200 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: "50%" }}
                      transition={{ duration: 1, delay: 0.3, repeat: Infinity, repeatDelay: 3 }}
                    />
                    <motion.div
                      className="h-3 bg-gray-200 rounded"
                      initial={{ width: 0 }}
                      animate={{ width: "75%" }}
                      transition={{ duration: 1, delay: 0.6, repeat: Infinity, repeatDelay: 3 }}
                    />
                  </div>

                  {/* Fake cursor replaced with green user cursor */}
                  <motion.div
                    className="absolute z-10"
                    initial={{ x: 60, y: 60 }}
                    animate={{ x: [60, 140, 220, 180, 420, 420], y: [60, 100, 140, 200, 220, 120] }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }}
                  >
                    <div className="relative">
                      <div className="bg-green-500 text-white text-xs px-3 py-1 rounded-md shadow">
                        sanke
                      </div>
                      <div className="absolute left-3 -top-2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-l-transparent border-r-transparent border-b-green-500" />
                    </div>
                  </motion.div>

                  {/* Run button */}
                  <div className="mt-4 flex gap-2">
                    <motion.button
                      className="px-3 py-1 text-xs bg-black text-white rounded"
                      whileTap={{ scale: 0.9 }}
                    >
                      Run
                    </motion.button>
                  </div>

                </div>
              </div>

              {/* Right panel */}
              <div className="absolute right-0 top-0 h-full w-64 bg-white border-l border-gray-200 p-3 flex flex-col gap-3">
                {/* Users */}
                <div className="space-y-2">
                  <div className="h-4 w-16 bg-gray-200 rounded" />
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-400/40" />
                    <div className="h-3 w-16 bg-gray-200 rounded" />
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-green-400/40" />
                    <div className="h-3 w-20 bg-gray-200 rounded" />
                  </div>
                </div>

                {/* Chat */}
                <div className="flex-1 space-y-2 mt-4">
                  <div className="h-3 w-3/4 bg-gray-200 rounded" />
                  <div className="h-3 w-2/3 bg-gray-200 rounded" />
                  <div className="h-3 w-1/2 bg-gray-200 rounded" />

                  {/* Output */}
                  <div className="bg-gray-100 rounded p-2">
                    <motion.div
                      className="mt-4 text-xs font-mono text-green-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: [0, 0, 1, 1, 0] }}
                      transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                    >
                      {'>'} Hello World
                    </motion.div>
                  </div>
                </div>

                {/* Input */}
                <div className="h-8 bg-gray-100 rounded" />
              </div>
            </>
          )}

          {active.id === "live" && (
            <>
              {/* Live Code main */}
              <div className="absolute left-0 top-0 h-full w-full flex">

                {/* Editor area */}
                <div className="flex-1 p-4">
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 h-full relative">

                    {/* More typing lines */}
                    <div className="space-y-2">
                      {["80%","60%","90%","40%","70%"].map((w,i)=> (
                        <motion.div
                          key={i}
                          className="h-3 bg-gray-300 rounded"
                          initial={{ width: 0 }}
                          animate={{ width: w }}
                          transition={{ duration: 0.8, delay: i * 0.2, repeat: Infinity, repeatDelay: 2 }}
                        />
                      ))}
                    </div>

                    {/* Cursor 1 - typing */}
                    <motion.div
                      className="absolute z-10"
                      initial={{ x: 120, y: 120 }}
                      animate={{ x: [120, 180, 240], y: [120, 140, 160] }}
                      transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
                    >
                      <div className="bg-green-500 text-white text-[10px] px-2 py-0.5 rounded shadow">sanke</div>
                      <div className="absolute left-2 -top-1 w-0 h-0 border-l-3 border-r-3 border-b-3 border-l-transparent border-r-transparent border-b-green-500" />
                    </motion.div>

                    {/* Cursor 2 - going to Run button */}
                    <motion.div
                      className="absolute z-10"
                      initial={{ x: 180, y: 140 }}
                      animate={{ x: [180, 220, 260], y: [140, 120, 90] }}
                      transition={{ duration: 4, repeat: Infinity, repeatType: "loop" }}
                    >
                      <div className="bg-orange-500 text-white text-[10px] px-2 py-0.5 rounded shadow">Andreea</div>
                      <div className="absolute left-2 -top-1 w-0 h-0 border-l-3 border-r-3 border-b-3 border-l-transparent border-r-transparent border-b-orange-500" />
                    </motion.div>

                    {/* Cursor 3 - right panel */}
                    <motion.div
                      className="absolute z-10"
                      initial={{ x: 820, y: 120 }}
                      animate={{ x: [820, 860, 840], y: [120, 150, 180] }}
                      transition={{ duration: 5, repeat: Infinity, repeatType: "mirror" }}
                    >
                      <div className="bg-blue-500 text-white text-[10px] px-2 py-0.5 rounded shadow">Maria</div>
                      <div className="absolute left-2 -top-1 w-0 h-0 border-l-3 border-r-3 border-b-3 border-l-transparent border-r-transparent border-b-blue-500" />
                    </motion.div>

                  </div>
                </div>

                {/* Right panel */}
                <div className="w-72 border-l border-gray-200 p-3 flex flex-col">

                  {/* Run button */}
                  <motion.button
                    className="mb-3 px-3 py-1 text-xs bg-black text-white rounded shadow w-fit"
                    whileTap={{ scale: 0.9 }}
                  >
                    Run
                  </motion.button>

                  <div className="mt-2 bg-gray-100 rounded p-3 flex-1 space-y-2">
                    {["Running...","Hello World","Done"].map((t,i)=> (
                      <motion.div
                        key={i}
                        className="text-xs font-mono text-green-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0,0,1,1,0] }}
                        transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity, repeatDelay: 1 }}
                      >
                        {'>'} {t}
                      </motion.div>
                    ))}
                  </div>
                </div>

              </div>
            </>
          )}

          {/* CLASSES tab mock UI */}
          {active.id === "classes" && (
            <>
              <div className="absolute left-0 top-0 h-full w-full flex">

                {/* Sidebar */}
                <div className="w-56 border-r border-gray-200 p-4 space-y-3">
                  <div className="h-5 w-24 bg-gray-200 rounded" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-4 w-36 bg-gray-200 rounded" />
                </div>

                {/* Main content */}
                <div className="flex-1 p-6 space-y-6">

                  {/* Class header */}
                  <div className="h-24 rounded-xl bg-gradient-to-r from-gray-800 to-gray-600 p-4 text-left text-white flex flex-col justify-end">
                    <div className="text-lg font-semibold">{t("classes.title")}</div>
                    <div className="text-xs opacity-80">{t("classes.teacher")}</div>
                  </div>

                  {/* Assignments list */}
                  <div className="space-y-3">
                    <div className="text-sm font-medium text-gray-600">{t("classes.assignments")}</div>
                    {[1,2,3,4].map((i)=> (
                      <div key={i} className="flex items-center justify-between border rounded-lg p-3">
                        <div className="space-y-1 w-full text-left">
                          <div className="text-sm font-medium text-gray-800">Assignment {i}</div>
                          <div className="text-xs text-gray-500">{t("classes.due")}</div>
                        </div>
                        <div className="text-xs bg-black text-white px-3 py-1 rounded">{t("classes.open")}</div>
                      </div>
                    ))}
                  </div>

                </div>


              </div>
            </>
          )}

          {/* DASHBOARD tab mock UI */}
          {active.id === "dashboard" && (
            <>
              <div className="absolute left-0 top-0 h-full w-full flex">

                {/* Sidebar */}
                <div className="w-56 border-r border-gray-200 p-4 space-y-3">
                  <div className="h-5 w-24 bg-gray-200 rounded" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-4 w-36 bg-gray-200 rounded" />
                </div>

                {/* Main Dashboard */}
                <div className="flex-1 p-6 space-y-6">

                  {/* Header */}
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-gray-800">{t("dashboard.title")}</div>
                    <div className="text-sm text-gray-500">sankedev@gmail.com</div>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4">
                    {[
                      { label: t("dashboard.problems"), value: "3" },
                      { label: t("dashboard.score"), value: "3" },
                      { label: t("dashboard.streak"), value: "100%" }
                    ].map((stat, i) => (
                      <motion.div
                        key={i}
                        className="border rounded-xl p-4 text-left bg-white"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: [0,1,1], y: [10,0,0] }}
                        transition={{ duration: 1, delay: i * 0.2, repeat: Infinity, repeatDelay: 3 }}
                      >
                        <div className="text-sm text-gray-500">{stat.label}</div>
                        <div className="text-xl font-semibold text-gray-800 mt-1">{stat.value}</div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Leaderboard */}
                  <div className="border rounded-xl p-4 text-left space-y-3">
                    <div className="text-sm font-medium text-gray-600">{t("dashboard.leaderboard")}</div>
                    {["sanke","user2","user1","vesos"].map((u,i)=> (
                      <div key={i} className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-gray-300" />
                          <div className="text-sm text-gray-800">{u}</div>
                        </div>
                        <div className="text-sm text-gray-500">{[1208,867,815,217][i]}</div>
                      </div>
                    ))}
                  </div>

                  {/* Activity */}
                  <div className="border rounded-xl p-4 text-left space-y-3">
                    <div className="text-sm font-medium text-gray-600">{t("dashboard.activity")}</div>
                    {[
                      "Sum of two numbers",
                      "Print numbers",
                      "Loops practice",
                      "Conditions"
                    ].map((a,i)=> (
                      <div key={i} className="flex justify-between items-center">
                        <div className="text-sm text-gray-800">sanke solved {a}</div>
                        <div className="text-xs bg-black text-white px-2 py-1 rounded">100%</div>
                      </div>
                    ))}
                  </div>

                </div>

              </div>
            </>
          )}

          {/* SOCIALS tab mock UI */}
          {active.id === "socials" && (
            <>
              <div className="absolute left-0 top-0 h-full w-full flex gap-6">
                {/* Sidebar */}
                <div className="w-56 border-r border-gray-200 p-4 space-y-3">
                  <div className="h-5 w-24 bg-gray-200 rounded" />
                  <div className="h-4 w-32 bg-gray-200 rounded" />
                  <div className="h-4 w-28 bg-gray-200 rounded" />
                  <div className="h-4 w-36 bg-gray-200 rounded" />
                </div>

                {/* Feed */}
                <div className="flex-1 p-6 space-y-6">
                  <motion.div
                    initial={{ opacity: 1 }}
                    animate={{ opacity: [1, 1, 0, 0, 1] }}
                    transition={{ duration: 8, repeat: Infinity, repeatDelay: 2 }}
                  >
                    {/* Create post */}
                    <div className="flex items-center justify-between border rounded-xl p-4">
                      <div className="h-4 w-1/3 bg-gray-200 rounded" />
                      <div className="px-3 py-1 text-xs bg-black text-white rounded">{t("socials.post")}</div>
                    </div>

                    {/* Post card */}
                    <div className="border rounded-xl p-4 space-y-3 text-left mt-4">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-gray-300" />
                        <div>
                          <div className="h-3 w-20 bg-gray-300 rounded mb-1" />
                          <div className="h-2 w-24 bg-gray-200 rounded" />
                        </div>
                      </div>

                      <div className="h-3 w-2/3 bg-gray-300 rounded" />
                      <div className="h-32 bg-gray-200 rounded-lg" />

                      <div className="flex items-center gap-2">
                        <div className="flex-1 h-8 bg-gray-100 rounded" />
                        <div className="px-3 py-1 text-xs bg-black text-white rounded">{t("socials.send")}</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* MODAL */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center z-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 1, 0] }}
                    transition={{ duration: 8, repeat: Infinity, repeatDelay: 2 }}
                  >
                    <motion.div
                      className="bg-white rounded-xl shadow-xl w-[420px] p-6 text-left space-y-4 border"
                      initial={{ scale: 0.95, opacity: 0 }}
                      animate={{
                        scale: [0.95, 1, 1, 1, 0.95],
                        opacity: [0, 1, 1, 1, 0]
                      }}
                      transition={{ duration: 8, repeat: Infinity, repeatDelay: 2 }}
                    >
                      <div className="text-lg font-semibold">{t("socials.create")}</div>

                      {/* Typing */}
                      <motion.div
                        className="h-20 border rounded-lg p-3 text-sm text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 1, 1] }}
                        transition={{ duration: 8, delay: 2, repeat: Infinity, repeatDelay: 2 }}
                      >
                        {t("socials.typing")}
                      </motion.div>

                      {/* Button click */}
                      <motion.button
                        className="w-full py-2 bg-black text-white rounded"
                        initial={{ scale: 1 }}
                        animate={{
                          scale: [1, 1, 0.95, 1]
                        }}
                        transition={{
                          duration: 0.4,
                          delay: 4,
                          repeat: Infinity,
                          repeatDelay: 7.6
                        }}
                      >
                        {t("socials.post")}
                      </motion.button>

                      {/* Finished state */}
                      <motion.div
                        className="text-green-600 text-sm text-center font-medium"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 0, 0, 1, 1, 0] }}
                        transition={{ duration: 8, delay: 4.5, repeat: Infinity, repeatDelay: 2 }}
                      >
                        {t("socials.finished")}
                      </motion.div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </>
          )}


          </motion.div>
        </AnimatePresence>
      </div>

      {/* TABS */}
      <div className="mt-8 flex justify-center gap-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => handleChange(tab)}
            className={`px-4 py-2 rounded-full text-sm border transition-all duration-300
              ${active.id === tab.id
                ? "bg-black text-white"
                : "hover:bg-muted"}
            `}
          >
            {t(`tabs.${tab.label}`)}
          </button>
        ))}
      </div>

    </section>
  );
}