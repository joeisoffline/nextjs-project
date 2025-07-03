"use client";
export default function CustomerForm() {
  return (
    <form className="space-y-4">
      <input type="text" name="name" placeholder="Customer name" className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email address" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add Customer</button>
    </form>
  );
}

// === components/CustomerList.tsx ===
export default function CustomerList({ customers }: { customers: any[] }) {
  return (
    <ul className="space-y-3 mt-6">
      {customers.map((c) => (
        <li key={c.id} className="p-4 border rounded shadow">
          <div className="font-bold">{c.name}</div>
          <div className="text-sm text-gray-600">{c.email}</div>
        </li>
      ))}
    </ul>
  );
}