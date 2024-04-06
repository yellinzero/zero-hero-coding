import { supportedBrowser } from "@/utils/supportedBrowser";
import BrowserModal from "@/app/components/BrowserModal";
import React from "react";

export default function Home({
  params: { language },
}: {
  params: {
    language: string;
  };
}) {
  if (supportedBrowser()) {
    return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        Zero Hero Coding
      </main>
    );
  } else {
    return <BrowserModal language={language} />;
  }
}
