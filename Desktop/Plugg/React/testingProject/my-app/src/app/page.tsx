import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-[90vh] items-center justify-center">
        <div className="flex flex-col bg-gray-500 p-8 rounded gap-8">
          <Link rel="stylesheet" href="/localstorage">
            <div className="bg-red-500 p-8">App with Localstorage</div>
          </Link>
          <Link rel="stylesheet" href="/API">
            <div className="bg-blue-500 p-8">App with API</div>
          </Link>
        </div>
    </main>
  );
}
