import { useRef } from "react";
import { motion } from "framer-motion";
import { ImageTrail } from "@/components/ui/image-trail";
import { photos, whatsapp } from "@/lib/santalo";

const trailImages: { src: string; width: number; ratio: string; position: string; alt: string }[] = [
  { src: photos.integrado, width: 250, ratio: "4 / 3", position: "60% 50%", alt: "" },
  { src: photos.cozinhaIlha, width: 260, ratio: "4 / 3", position: "50% 60%", alt: "" },
  { src: photos.dormitorio, width: 196, ratio: "3 / 4", position: "60% 50%", alt: "" },
  { src: photos.lavabo, width: 182, ratio: "3 / 4", position: "50% 35%", alt: "" },
  { src: photos.salaRipado, width: 244, ratio: "5 / 4", position: "45% 55%", alt: "" },
  { src: photos.painel, width: 184, ratio: "3 / 4", position: "55% 45%", alt: "" },
  { src: photos.jantarIntegrado, width: 236, ratio: "4 / 3", position: "55% 55%", alt: "" },
  { src: photos.detalhe, width: 220, ratio: "5 / 4", position: "55% 55%", alt: "" },
];

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative w-full overflow-hidden bg-offwhite pt-28 pb-16 md:min-h-screen md:pt-36 md:pb-24"
    >
      <ImageTrail containerRef={heroRef}>
        {trailImages.map((image) => (
          <img
            key={image.src}
            src={image.src}
            alt={image.alt}
            aria-hidden="true"
            draggable={false}
            className="pointer-events-none block h-auto max-w-full select-none object-cover"
            style={{
              width: image.width,
              aspectRatio: image.ratio,
              objectPosition: image.position,
            }}
          />
        ))}
      </ImageTrail>

      <div className="pointer-events-none relative mx-auto w-full max-w-[1440px] px-5 md:px-10">
        <motion.p
          className="label-tech text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Móveis sob medida
          <span className="mt-1 block">Itajaí, SC</span>
        </motion.p>

        <motion.h1
          className="mt-10 text-foreground md:mt-16"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <span
            className="block font-editorial leading-[0.86] tracking-[-0.02em]"
            style={{ fontSize: "clamp(3.6rem, 11vw, 11rem)" }}
          >
            Santalo
          </span>
          <span className="label-tech mt-6 block text-muted-foreground md:mt-10">
            <span className="block">Do primeiro traço</span>
            <span className="block">à montagem.</span>
          </span>
        </motion.h1>

        <div className="mt-14 grid gap-10 border-t border-border pt-8 md:mt-24 md:grid-cols-[minmax(0,1fr)_auto] md:items-end">
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
            className="label-tech pointer-events-auto relative z-10 justify-self-start border border-foreground px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
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
            className="col-span-3 aspect-[4/5] w-full max-w-full object-cover"
            style={{ objectPosition: "72% 50%" }}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src={photos.detalhe}
            alt="Detalhe de gaveta organizadora"
            className="col-span-2 mt-10 aspect-[3/4] w-full max-w-full object-cover"
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
