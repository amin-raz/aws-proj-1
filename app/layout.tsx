
"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import "./globals.css";
import { Authenticator, ThemeProvider, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import outputs from "@/amplify_outputs.json";

Amplify.configure(outputs);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Authenticator.Provider>
            <View>{children}</View>
          </Authenticator.Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
