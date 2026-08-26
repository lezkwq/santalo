import { createFileRoute } from "@tanstack/react-router";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";
import { Star } from "lucide-react";
import { SiteHeader } from "@/components/site/header";
import { Hero } from "@/components/site/hero";
import { Reveal, RevealImage } from "@/components/site/reveal";
import { photos, whatsapp, instagramUrl } from "@/lib/santalo";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Santalo Móveis Sob Medida | Projeto, produção e montagem em Itajaí" },
      {
        name: "description",
        content:
          "Móveis sob medida de alto padrão em Itajaí, SC. Projeto 3D, produção própria e montagem. Desde 2014, mais de 800 projetos realizados.",
      },
      { property: "og:title", content: "Santalo Móveis Sob Medida | Itajaí, SC" },
      {
        property: "og:description",
        content:
          "Projeto, fabricação própria e montagem de móveis sob medida de alto padrão em Itajaí. Desde 2014.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const etapas = [
  { n: "01", t: "Conversa e briefing", d: "Entender ambiente, uso, medidas e referências." },
  { n: "02", t: "Projeto 3D", d: "Definir a solução antes da fabricação." },
  { n: "03", t: "Produção própria", d: "O projeto segue para fabricação sob medida." },
  { n: "04", t: "Montagem", d: "Execução e instalação no ambiente." },
];

const avaliacoes = [
  {
    texto: "Super organizados e atenciosos com a limpeza do ambiente.",
    autor: "Solange Furlani D'Orazio",
  },
  {
    texto: "Rapidez de entregar e montar, com móveis planejados de ótima qualidade.",
    autor: "José Souza Ferreira",
  },
  { texto: "Preço justo, profissionalismo na entrega e garantia.", autor: "Vanaldo Isidoro" },
];

function Index() {
  return (
    <div className="w-full overflow-x-hidden bg-offwhite">
      <SiteHeader />
      <main className="w-full">
        <Hero />

        {/* INTRODUÇÃO DE MARCA E NÚMEROS */}
        <section className="w-full border-t border-border bg-softwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <RevealImage
                src={photos.integrado}
                alt="Ambiente integrado com sala de jantar e cozinha sob medida"
                className="md:col-span-7 aspect-[4/5] md:aspect-[4/3]"
                position="60% 50%"
                eager
              />
              <div className="md:col-span-5 md:pt-6">
                <Reveal>
                  <h2 className="display-lg text-foreground">
                    12 anos fazendo
                    <br />
                    do projeto à montagem.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-[46ch] leading-relaxed text-muted-foreground">
                    A Santalo começou em 2014 com manutenção e montagem de móveis. A experiência
                    de quem conheceu primeiro a execução evoluiu para fabricação própria e projetos
                    completos sob medida.
                  </p>
                </Reveal>
              </div>
            </div>

            <div className="mt-20 grid border-t border-border md:mt-28 md:grid-cols-3">
              {[
                { v: "+800", l: "Projetos realizados" },
                { v: "4,9 / 5", l: "78 avaliações no Google" },
                { v: "Desde 2014", l: "Produção própria em Itajaí" },
              ].map((item, i) => (
                <Reveal
                  key={item.v}
                  delay={i * 0.08}
                  className="border-b border-border py-10 md:border-b-0 md:py-14 md:pr-8 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
                >
                  <p className="font-editorial text-[clamp(2.4rem,4.5vw,4rem)] text-foreground">
                    {item.v}
                  </p>
                  <p className="label-tech mt-4 text-muted-foreground">{item.l}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PROJETOS */}
        <section id="projetos" className="w-full bg-offwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <p className="label-tech text-muted-foreground">Acervo</p>
              <h2 className="display-lg mt-6 text-foreground">
                Projetos
                <br />
                que saíram do papel.
              </h2>
            </Reveal>

            <div className="mt-14 grid gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
              <figure className="md:col-span-8">
                <RevealImage
                  src={photos.cozinhaIlha}
                  alt="Cozinha sob medida com ilha integrada à mesa de jantar"
                  className="aspect-[4/5] md:aspect-[16/10]"
                  position="50% 62%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Cozinha</figcaption>
              </figure>
              <figure className="md:col-span-4 md:pt-16">
                <RevealImage
                  src={photos.lavabo}
                  alt="Lavabo com bancada de mármore, espelho redondo e painel ripado"
                  className="aspect-[3/4]"
                  position="50% 32%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Lavabo</figcaption>
              </figure>
              <figure className="md:col-span-7">
                <RevealImage
                  src={photos.salaRipado}
                  alt="Sala com painel ripado de madeira e mesas de apoio"
                  className="aspect-[4/5] md:aspect-[16/10]"
                  position="45% 58%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Estar</figcaption>
              </figure>
              <figure className="md:col-span-5 md:pt-20">
                <RevealImage
                  src={photos.penteadeira}
                  alt="Dormitório com penteadeira, espelho iluminado e cabeceira estofada"
                  className="aspect-[4/5]"
                  position="52% 45%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Dormitório</figcaption>
              </figure>
              <figure className="md:col-span-4 md:col-start-2">
                <RevealImage
                  src={photos.painelJardim}
                  alt="Painel de TV com jardim vertical e prateleira suspensa"
                  className="aspect-[4/5]"
                  position="42% 50%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Estar</figcaption>
              </figure>
              <figure className="md:col-span-5 md:pt-12">
                <RevealImage
                  src={photos.estar}
                  alt="Sala de estar com painel de TV sob medida"
                  className="aspect-[4/3]"
                  position="60% 50%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Detalhe</figcaption>
              </figure>
              <figure className="md:col-span-7">
                <RevealImage
                  src={photos.cozinhaAzul}
                  alt="Cozinha com armários em tom azul acinzentado e torre de fornos embutidos"
                  className="aspect-[4/5] md:aspect-[16/10]"
                  position="55% 62%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">Cozinha</figcaption>
              </figure>
              <figure className="md:col-span-5 md:pt-16">
                <RevealImage
                  src={photos.jantarIntegrado}
                  alt="Ambiente de jantar com banco em L estofado integrado à cozinha"
                  className="aspect-[4/5] md:aspect-[4/3]"
                  position="55% 60%"
                />
                <figcaption className="label-tech mt-3 text-muted-foreground">
                  Ambiente integrado
                </figcaption>
              </figure>
            </div>

            <Reveal className="mt-14 border-t border-border pt-8">
              <a
                href={whatsapp.projetos}
                target="_blank"
                rel="noreferrer"
                className="label-tech inline-flex items-center gap-3 border border-foreground px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
              >
                <FaWhatsapp className="size-4" aria-hidden="true" />
                Conversar sobre um ambiente
              </a>
            </Reveal>
          </div>
        </section>

        {/* DETALHE DE MARCENARIA */}
        <section className="w-full bg-charcoal py-20 text-softwhite md:py-32">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-10">
            <div className="md:col-span-5">
              <Reveal>
                <h2 className="display-lg">
                  O acabamento
                  <br />
                  continua por dentro.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-[44ch] leading-relaxed text-warmgray">
                  Medida, encaixe, ferragem, montagem. É no uso diário que o móvel precisa
                  continuar funcionando bem.
                </p>
              </Reveal>
            </div>
            <RevealImage
              src={photos.detalhe}
              alt="Gaveta organizadora aberta em penteadeira sob medida"
              className="md:col-span-7 aspect-[4/5] md:aspect-[3/2]"
              position="55% 55%"
            />
          </div>
        </section>

        {/* PROCESSO */}
        <section id="processo" className="w-full bg-softwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <h2 className="display-lg text-foreground">
                Do briefing
                <br />
                à instalação.
              </h2>
            </Reveal>
            <div className="mt-14 border-t border-border md:mt-24">
              {etapas.map((e, i) => (
                <Reveal
                  key={e.n}
                  delay={i * 0.06}
                  className="grid gap-3 border-b border-border py-8 md:grid-cols-12 md:items-baseline md:gap-8 md:py-12"
                >
                  <p className="font-editorial text-[clamp(2rem,3.2vw,3rem)] text-taupe md:col-span-2">
                    {e.n}
                  </p>
                  <h3 className="label-tech text-foreground md:col-span-4">{e.t}</h3>
                  <p className="max-w-[48ch] leading-relaxed text-muted-foreground md:col-span-6">
                    {e.d}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* GARANTIA */}
        <section className="w-full border-y border-border bg-offwhite py-20 md:py-28">
          <div className="mx-auto grid w-full max-w-[1440px] gap-8 px-5 md:grid-cols-12 md:items-end md:px-10">
            <Reveal className="md:col-span-7">
              <h2 className="display-lg text-foreground">
                5 anos
                <br />
                de garantia.
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="md:col-span-5">
              <p className="max-w-[40ch] leading-relaxed text-muted-foreground">
                Garantia contra defeitos de fabricação em peças de MDF.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ARQUITETOS E COMERCIAL */}
        <section className="w-full bg-softwhite py-20 md:py-32">
          <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:items-center md:gap-16 md:px-10">
            <RevealImage
              src={photos.comercial}
              alt="Ambiente comercial com marcenaria sob medida e bancadas de atendimento"
              className="md:col-span-7 aspect-[4/3]"
              position="45% 50%"
            />
            <div className="md:col-span-5">
              <Reveal>
                <p className="label-tech text-muted-foreground">Arquitetos e comercial</p>
                <h2 className="display-md mt-6 text-foreground">
                  Projeto definido.
                  <br />
                  Execução bem resolvida.
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p className="mt-8 max-w-[44ch] leading-relaxed text-muted-foreground">
                  A Santalo também executa móveis sob medida para projetos de arquitetos e
                  ambientes comerciais.
                </p>
                <a
                  href={whatsapp.arquitetos}
                  target="_blank"
                  rel="noreferrer"
                  className="label-tech mt-10 inline-flex items-center gap-3 border border-foreground px-6 py-4 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
                >
                  <FaWhatsapp className="size-4" aria-hidden="true" />
                  Falar sobre uma execução
                </a>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SOBRE */}
        <section id="sobre" className="w-full bg-offwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-12 md:grid-cols-12 md:gap-16">
              <div className="md:col-span-5 md:pt-10">
                <Reveal>
                  <h2 className="display-lg text-foreground">
                    William e Priscila
                    <br />
                    à frente da Santalo.
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-8 max-w-[46ch] leading-relaxed text-muted-foreground">
                    A Santalo é uma empresa familiar fundada por William e Priscila. Os dois
                    acompanham diretamente os clientes e participam dos processos que levam cada
                    projeto do planejamento à execução.
                  </p>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="label-tech mt-10 text-muted-foreground">
                    <span className="block">Empresa familiar.</span>
                    <span className="block">Produção própria.</span>
                    <span className="block">Desde 2014.</span>
                  </p>
                </Reveal>
              </div>
              <RevealImage
                src={photos.casal}
                alt="William e Priscila, fundadores da Santalo, no escritório da empresa"
                className="md:col-span-7 aspect-[4/5] md:aspect-[4/3]"
                position="50% 30%"
              />
            </div>

            <Reveal className="mt-20 border-t border-border pt-12 md:mt-28">
              <p className="display-md max-w-[24ch] text-warmbrown">
                Seu bem estar é nossa inspiração.
              </p>
            </Reveal>

          </div>
        </section>

        {/* AVALIAÇÕES */}
        <section className="w-full border-t border-border bg-softwhite py-20 md:py-32">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <div className="grid gap-8 md:grid-cols-12 md:items-end">
              <Reveal className="md:col-span-7">
                <h2 className="display-lg text-foreground">
                  Quem recebe
                  <br />
                  percebe o cuidado.
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="md:col-span-5">
                <div className="flex items-baseline gap-4">
                  <p className="font-editorial text-[clamp(2.2rem,3.4vw,3.2rem)] text-foreground">
                    4,9 / 5
                  </p>
                  <span className="flex gap-1 text-taupe" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="size-3" fill="currentColor" strokeWidth={0} />
                    ))}
                  </span>
                </div>
                <p className="label-tech mt-3 text-muted-foreground">78 avaliações no Google</p>
              </Reveal>
            </div>

            <div className="mt-16 grid border-t border-border md:mt-24 md:grid-cols-3">
              {avaliacoes.map((a, i) => (
                <Reveal
                  key={a.autor}
                  delay={i * 0.08}
                  className="border-b border-border py-10 md:border-b-0 md:py-14 md:pr-10 md:[&:not(:first-child)]:border-l md:[&:not(:first-child)]:pl-10"
                >
                  <p className="font-editorial text-[clamp(1.35rem,1.8vw,1.7rem)] leading-snug text-foreground">
                    {a.texto}
                  </p>
                  <p className="label-tech mt-6 text-muted-foreground">{a.autor}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section id="contato" className="w-full bg-charcoal py-24 text-softwhite md:py-40">
          <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
            <Reveal>
              <h2 className="display-xl">
                Tem um ambiente
                <br />
                para resolver?
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-10 max-w-[42ch] leading-relaxed text-warmgray">
                Conte para a Santalo o que você está planejando.
              </p>
              <a
                href={whatsapp.geral}
                target="_blank"
                rel="noreferrer"
                className="label-tech mt-12 inline-flex items-center gap-3 bg-softwhite px-7 py-5 text-charcoal transition-opacity hover:opacity-85"
              >
                <FaWhatsapp className="size-4" aria-hidden="true" />
                Falar sobre meu projeto
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="w-full bg-offwhite py-16 md:py-20">
        <div className="mx-auto grid w-full max-w-[1440px] gap-12 px-5 md:grid-cols-12 md:px-10">
          <div className="md:col-span-4">
            <p className="font-editorial text-2xl text-foreground">Santalo</p>
            <p className="label-tech mt-2 text-muted-foreground">Móveis sob medida</p>
          </div>
          <address className="not-italic md:col-span-3">
            <p className="leading-relaxed text-muted-foreground">
              Av. Marcos Aurélio Seara, 135
              <br />
              Santa Regina
              <br />
              Itajaí, SC
            </p>
          </address>
          <div className="md:col-span-2">
            <p className="leading-relaxed text-muted-foreground">
              Segunda a sexta
              <br />
              09:00 às 18:00
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="flex items-center gap-5">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram da Santalo"
                className="text-foreground transition-colors hover:text-taupe"
              >
                <FaInstagram className="size-5" />
              </a>
              <a
                href={whatsapp.geral}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp da Santalo"
                className="text-foreground transition-colors hover:text-taupe"
              >
                <FaWhatsapp className="size-5" />
              </a>
            </div>
            <a
              href={whatsapp.geral}
              target="_blank"
              rel="noreferrer"
              className="label-tech mt-8 inline-block border border-foreground px-5 py-3 text-foreground transition-colors hover:bg-foreground hover:text-primary-foreground"
            >
              Iniciar conversa
            </a>
          </div>
        </div>
        <div className="mx-auto mt-14 w-full max-w-[1440px] border-t border-border px-5 pt-6 md:px-10">
          <p className="label-tech text-muted-foreground">Santalo Móveis Sob Medida, Itajaí, SC</p>
        </div>
      </footer>
    </div>
  );
}
