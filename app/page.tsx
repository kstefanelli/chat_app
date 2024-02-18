import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className="relative isolate pt-14 dark:bg-gray-990" />
      <div className="py-2 sm:py-20 lg:pb-4">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold -tracking-tight sm:text-6xl">
              Chat App
            </h1>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/chat"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-whtie shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </Link>
              <Link
                href="/pricing"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white dark:text-whtie shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
