import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { prisma } from "@/lib/prisma";
import CustomerForm from "@/components/CustomerForm";
import CustomerList from "@/components/CustomerList";

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return <p>Sign in/Sign up</p>;
  }

  const customers = await prisma.customer.findMany({
    where: { owner: { email: session.user.email } },
    orderBy: { createdAt: "desc" },
  });

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl mb-4">Dashboard</h1>
      <CustomerForm />
      <CustomerList customers={customers} />
    </main>
  );
}
