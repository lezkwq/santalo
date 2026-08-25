import { motion } from "framer-motion";
import { ImageTrail } from "@/components/ui/image-trail";
import { photos, whatsapp } from "@/lib/santalo";

const trailImages = [
  photos.integrado,
  photos.dormitorio,
  photos.estar,
  photos.cozinha,
  photos.painel,
  photos.detalhe,
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full overflow-hidden bg-offwhite pt-28 pb-16 md:min-h-screen md:pt-40 md:pb-24"
    >
      <ImageTrail
        images={trailImages}
        className="pointer-events-none absolute inset-0 hidden md:block"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <motion.p
          className="label-tech text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Itajaí, Santa Catarina
        </motion.p>

        <motion.h1
          className="display-xl mt-8 max-w-[18ch] text-foreground md:mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Santalo
          <span className="mt-2 block text-[0.42em] leading-[1.1] tracking-normal md:mt-6">
            <span className="label-tech block text-muted-foreground">Do primeiro traço</span>
            <span className="label-tech block text-muted-foreground">à montagem.</span>
          </span>
        </motion.h1>

        <div className="mt-14 grid gap-10 border-t border-border pt-8 md:mt-28 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
          <motion.p
            className="max-w-[42ch] text-base leading-relaxed text-muted-foreground md:text-lg"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            Móveis sob medida de alto padrão, com produção própria em Itajaí.
          </motion.p>
          <motion.a
            href={whatsapp.geral}
            target="_blank"
            rel="noreferrer"
            className="label-tech relative z-10 justify-self-start border border-foreground px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25 }}
          >
            Falar sobre um projeto
          </motion.a>
        </div>

        {/* Mobile: composição editorial estática no lugar do trail */}
        <div className="mt-12 grid grid-cols-5 gap-3 md:hidden">
          <motion.img
            src={photos.cozinha}
            alt="Cozinha sob medida com ilha e marcenaria em madeira"
            className="col-span-3 aspect-[4/5] w-full object-cover"
            style={{ objectPosition: "72% 50%" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src={photos.detalhe}
            alt="Detalhe de gaveta organizadora"
            className="col-span-2 mt-10 aspect-[3/4] w-full object-cover"
            style={{ objectPosition: "55% 55%" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          />
        </div>
      </div>
    </section>
  );
}
