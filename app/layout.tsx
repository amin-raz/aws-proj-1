"use client";

import React from "react";
import { Amplify } from "aws-amplify";
import '../styles/tailwind.css';
import { Authenticator } from "@aws-amplify/ui-react";
import '@aws-amplify/ui-react/styles.css';
import outputs from "@/amplify_outputs.json";
import NavBar from "../components/Navbar";

Amplify.configure(outputs);

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <Authenticator>
          {children}
        </Authenticator>
      </body>
    </html>
  );
}
