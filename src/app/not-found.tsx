import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="section-space">
      <div className="container-max flex min-h-[46vh] flex-col items-center justify-center text-center">
        <p className="font-display text-7xl font-extrabold text-[var(--color-brand)] sm:text-8xl">404</p>
        <h1 className="mt-4" style={{ fontSize: "var(--fs-2xl)" }}>
          This page moved or never existed
        </h1>
        <p className="mt-3 max-w-[46ch] text-[var(--fs-sm)] text-[var(--color-text-muted)]">
          Check the address, or head back and pick a service from the menu.
        </p>
        <Link href="/" className="btn btn-brand mt-8">
          <ArrowLeft size={17} /> Back to home
        </Link>
      </div>
    </section>
  );
}
