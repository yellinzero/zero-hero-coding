import { supportedBrowser } from "@/utils/supportedBrowser";
import BrowserModal from '@/components/BrowserModal'
import React from "react";

export default function Home() {
  if (supportedBrowser()) {
    return (
      <React.StrictMode>
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          Zero Hero Coding
        </main>
      </React.StrictMode>

    );
} else {
  return (
    <BrowserModal />
  )
}

}
