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