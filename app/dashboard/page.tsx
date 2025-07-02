import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/lib/prisma";
import CustomerForm from "@/components/CustomerForm";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) return <p>Please sign in.</p>;

  const customers = await prisma.customer.findMany({
    where: { owner: { email: session.user.email! } },
    orderBy: { createdAt: "desc" }
  });

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-3xl mb-4">Your CRM</h1>
      <CustomerForm />
      <ul className="mt-6 space-y-2">
        {customers.map(c => (
          <li key={c.id} className="border p-4 rounded">
            <strong>{c.name}</strong> — {c.email}
          </li>
        ))}
      </ul>
    </main>
  );
}