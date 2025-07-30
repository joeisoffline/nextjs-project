"use client";

export default function CustomerForm() {
  return (
    <form className="space-y-4">
      <input type="text" name="name" placeholder="Customer name" className="w-full p-2 border rounded" />
      <input type="email" name="email" placeholder="Email address" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Add/Remove Customer</button>
    </form>
  );
}
