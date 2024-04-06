"use client";
import { useTranslation } from "@/app/i18n/client";
import React from "react";
import ReactModal from "react-modal";

export default function BrowserModal({ language }: { language: string }) {
  const { t } = useTranslation(language, "errors");
  return <ReactModal isOpen>{t("unsupported_bowser_error")}</ReactModal>;
}
