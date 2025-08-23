import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-gray-800 text-white px-6 py-4">
          <ul className="flex space-x-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Link href="/work-orders">Work Orders</Link></li>
            <li><Link href="/customers">Customers</Link></li>
            <li><Link href="/sites">Sites</Link></li>
            <li><Link href="/hr">HR</Link></li>
            <li><Link href="/timesheets">Timesheets</Link></li>
          </ul>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  );
}

