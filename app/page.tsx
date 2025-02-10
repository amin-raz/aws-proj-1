"use client";

// https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/ 

import { useAuthenticator } from "@aws-amplify/ui-react";
import { useState, useEffect } from "react";
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";
import "./../app/app.css";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";

Amplify.configure(outputs);

const client = generateClient<Schema>();

export default function App() {
  const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  const { signOut } = useAuthenticator();
  
  return (
    <main>
      <h1 className = "text-3x1 font-bold underline">Test</h1>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}
