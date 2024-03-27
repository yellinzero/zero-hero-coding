"use client";
import React from "react";
import ReactModal from "react-modal";
import { IntlProvider, FormattedMessage } from "react-intl";
const messagesInEnglish = {
  bowserErrorMessage: "Oops, It seem an error because of unsupported browser.",
};
export default function BrowserModal() {
  return (
    <IntlProvider messages={messagesInEnglish} locale="en" defaultLocale="en">
      <ReactModal isOpen>
        <FormattedMessage
          id="bowserErrorMessage"
          defaultMessage="Oops, It seem an error because of unsupported browser."
        />
        
      </ReactModal>
    </IntlProvider>
  );
}
