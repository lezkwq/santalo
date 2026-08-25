import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { whatsapp } from "@/lib/santalo";

const links = [
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Contato", href: "#contato" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full transition-colors duration-300 ${
        scrolled || open ? "bg-offwhite border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 md:py-6">
        <a href="#top" className="label-tech min-w-0 truncate text-foreground">
          SANTALO
        </a>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="label-tech text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href={whatsapp.geral}
            target="_blank"
            rel="noreferrer"
            className="label-tech border border-foreground px-5 py-3 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
          >
            Falar sobre um projeto
          </a>
        </nav>

        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
          className="shrink-0 p-1 text-foreground md:hidden"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border md:hidden">
          <nav className="flex flex-col px-5 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="label-tech border-b border-border py-4 text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsapp.geral}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="label-tech mt-5 bg-foreground px-5 py-4 text-center text-primary-foreground"
            >
              Falar sobre um projeto
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
