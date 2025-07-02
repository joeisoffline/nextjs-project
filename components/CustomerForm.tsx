"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CustomerForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const router = useRouter();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/customers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email })
    });
    setName("");
    setEmail("");
    router.refresh();
  }

  return (
    <form onSubmit={submit} className="flex space-x-2">
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="border p-2 rounded flex-1" />
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="border p-2 rounded flex-1" />
      <button type="submit" className="bg-blue-600 text-white px-4 rounded">Add</button>
    </form>
  );
}