import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col justify-center text-center flex-1 gap-4">
      <h1 className="text-2xl font-bold">Atella Member Area — Documentation</h1>
      <p className="text-fd-muted-foreground">
        How the Atella learning site works: the Webflow + Memberstack scripts,
        the data tables, and the attributes for every page.
      </p>
      <p>
        <Link href="/docs" className="font-medium underline">
          Open the documentation →
        </Link>
      </p>
    </div>
  );
}
