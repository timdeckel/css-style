import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-full md-flex items-center justify-center">
        <div className="flex-col bg-gray-500 p-8 rounded gap-8">
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
