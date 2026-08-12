import { createFileRoute } from "@tanstack/react-router";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import {
  Check,
  Instagram,
  Quote,
  Sparkles,
  MessageCircle,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Cta, WHATSAPP_URL } from "@/components/lp/Cta";
import logo from "@/assets/logo.png.asset.json";
import hero from "@/assets/hero.png.asset.json";
import danielle from "@/assets/danielle.jpg.asset.json";
import p7 from "@/assets/port7.png.asset.json";
import p9 from "@/assets/port9.png.asset.json";
import p13 from "@/assets/port13.png.asset.json";
import p14 from "@/assets/port14.png.asset.json";
import p15 from "@/assets/port15.png.asset.json";
import p16 from "@/assets/port16.png.asset.json";
import p17 from "@/assets/port17.png.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      {
        title: "Danielle Souza | Landing Pages que convertem visitantes",
      },
      {
        name: "description",
        content:
          "Landing Pages estratégicas com design sofisticado e copy persuasiva para destacar sua marca, transmitir autoridade e aumentar suas conversões.",
      },
      {
        property: "og:title",
        content: "Danielle Souza | Landing Pages de alta conversão",
      },
      {
        property: "og:description",
        content:
          "Páginas de vendas elegantes, estratégicas e prontas para transformar visitantes em clientes.",
      },
    ],
  }),
});

const PORTFOLIO = [p9, p14, p17, p16, p15, p13, p7];

const TESTIMONIALS = [
  {
    name: "Samantha Nadai",
    text: "Com a ajuda da Danielle, meus atendimentos e minha visibilidade tiveram um aumento muito gratificante.",
  },
  { name: "Angelita Alves", text: "Trabalho ótimo, excelente e de muito boa qualidade." },
  {
    name: "Alan",
    text: "Tá de parabéns, atendimento perfeito, recomendo sempre. Inclusive muito atenciosa.",
  },
  { name: "Elaine Rodrigues", text: "Ótimo, os resultados estão sendo promissores." },
  {
    name: "Iara Melha",
    text: "Excelente gestora, uma pessoa com uma visão super real. Super indico.",
  },
];

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-5 text-xs uppercase tracking-[0.4em] text-primary/90">{children}</p>
  );
}

function Index() {
  const autoplayPortfolio = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));
  const autoplayTesti = useRef(Autoplay({ delay: 5000, stopOnInteraction: false }));

  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Header */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-7">
        <img src={logo.url} alt="Danielle Souza" className="h-11 w-auto md:h-14" />
        <Cta className="hidden !px-6 !py-3 !text-[0.7rem] md:inline-flex">
          Quero minha landing page
        </Cta>
      </header>

      {/* 1 — Hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 pt-6 pb-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pt-10">
        <div>
          <Eyebrow>Landing Pages de alta conversão</Eyebrow>
          <h1 className="text-4xl leading-[1.08] md:text-6xl">
            Sua marca merece uma página de vendas que{" "}
            <span className="text-gold italic">inspire confiança</span> e transforme
            visitantes em clientes.
          </h1>
          <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Landing Pages estratégicas, desenvolvidas para destacar sua marca, transmitir
            autoridade e aumentar suas conversões com design sofisticado, copy persuasiva e
            uma estrutura pensada para vender.
          </p>
          <div className="mt-10">
            <Cta>Quero minha landing page</Cta>
          </div>
        </div>
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-6 rounded-[3rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--gold-1)_28%,transparent),transparent_65%)] blur-2xl" />
          <img
            src={hero.url}
            alt="Danielle Souza, especialista em marketing digital e landing pages"
            className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
          />
        </div>
      </section>

      {/* 2 — Muito mais do que uma página bonita */}
      <section className="border-t border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-3xl">
            <Eyebrow>Estratégia + Design</Eyebrow>
            <h2 className="text-3xl md:text-5xl">Muito mais do que uma página bonita.</h2>
            <div className="mt-6 space-y-4 text-muted-foreground md:text-lg">
              <p>
                Uma Landing Page bem construída não serve apenas para apresentar seu
                serviço. Ela é responsável por convencer, gerar confiança e conduzir o
                visitante até a decisão de compra.
              </p>
              <p>
                É por isso que cada projeto é desenvolvido estrategicamente para unir
                design, experiência do usuário e conversão.
              </p>
            </div>
          </div>

          <h3 className="mt-16 mb-8 text-2xl md:text-3xl">O que sua Landing Page recebe</h3>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Design exclusivo alinhado à identidade da sua marca.",
              "Estrutura pensada para gerar mais contatos e vendas.",
              "Copy persuasiva que destaca o valor do seu serviço.",
              "Carregamento rápido e excelente experiência de navegação.",
              "Totalmente responsiva para celular, tablet e computador.",
              "Desenvolvimento completo, sem que você precise se preocupar com a parte técnica.",
            ].map((item) => (
              <div key={item} className="surface-lux flex gap-4 rounded-xl p-5">
                <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 max-w-2xl text-lg italic text-foreground/90">
            Enquanto você cuida do seu negócio, eu desenvolvo uma página profissional
            preparada para valorizar sua oferta e gerar resultados.
          </p>
          <div className="mt-8">
            <Cta>Quero minha landing page</Cta>
          </div>
        </div>
      </section>

      {/* 3 — Por que investir */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 lg:grid-cols-2">
          <div>
            <Eyebrow>Credibilidade</Eyebrow>
            <h2 className="text-3xl md:text-5xl">
              Por que investir em uma <span className="text-gold italic">Landing Page?</span>
            </h2>
            <p className="mt-6 text-muted-foreground md:text-lg">
              Uma Landing Page profissional faz sua empresa transmitir mais credibilidade
              desde o primeiro contato. Ela ajuda você a:
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Gerar mais contatos qualificados",
                "Aumentar sua autoridade no mercado",
                "Valorizar seu produto ou serviço",
                "Melhorar os resultados dos anúncios",
                "Destacar sua empresa da concorrência",
                "Converter visitantes em clientes",
              ].map((i) => (
                <li key={i} className="flex items-center gap-4 border-b border-border/60 pb-4">
                  <Sparkles className="size-4 shrink-0 text-primary" />
                  <span className="text-foreground/90">{i}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface-lux flex flex-col justify-center rounded-2xl p-9 md:p-12">
            <Quote className="size-8 text-primary/60" />
            <p className="mt-6 text-2xl leading-snug md:text-3xl" style={{ fontFamily: "var(--font-display)" }}>
              Se hoje seus clientes chegam apenas pelo Instagram ou WhatsApp, você
              provavelmente está perdendo oportunidades todos os dias.
            </p>
            <p className="mt-6 text-muted-foreground">
              Uma Landing Page profissional trabalha para você 24 horas por dia.
            </p>
            <div className="mt-10">
              <Cta>Fale comigo agora</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* 4 — Como funciona */}
      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Processo</Eyebrow>
          <h2 className="text-3xl md:text-5xl">Como funciona?</h2>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["01", "Briefing", "Conversamos para entender seu negócio, seu público e seus objetivos."],
              ["02", "Planejamento", "Estruturo toda a Landing Page com foco em conversão."],
              ["03", "Design", "Desenvolvo uma página elegante, moderna e alinhada à identidade visual da sua empresa."],
              ["04", "Publicação", "Sua Landing Page é entregue pronta para divulgar, anunciar e começar a receber visitantes."],
            ].map(([n, t, d]) => (
              <div key={n} className="surface-lux rounded-2xl p-7">
                <span
                  className="text-gold text-4xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {n}
                </span>
                <h3 className="mt-4 text-xl">{t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Cta>Fale comigo agora</Cta>
          </div>
        </div>
      </section>

      {/* 5 — Portfólio */}
      <section className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Portfólio</Eyebrow>
          <h2 className="max-w-3xl text-3xl md:text-4xl">
            Cada projeto é desenvolvido de forma exclusiva para refletir a identidade da
            marca e proporcionar a melhor experiência ao visitante.
          </h2>

          <Carousel
            className="mt-14"
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayPortfolio.current]}
          >
            <CarouselContent className="-ml-5">
              {PORTFOLIO.map((img, i) => (
                <CarouselItem key={i} className="pl-5 sm:basis-1/2 lg:basis-1/3">
                  <div className="surface-lux overflow-hidden rounded-2xl">
                    <img
                      src={img.url}
                      alt={`Projeto de landing page desenvolvido por Danielle Souza ${i + 1}`}
                      className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hairline -left-3 bg-card text-foreground hover:bg-secondary md:-left-6" />
            <CarouselNext className="hairline -right-3 bg-card text-foreground hover:bg-secondary md:-right-6" />
          </Carousel>
        </div>
      </section>

      {/* 6 — Depoimentos */}
      <section className="border-y border-border/60 bg-card/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Eyebrow>Depoimentos</Eyebrow>
          <h2 className="text-3xl md:text-5xl">Quem já confiou nesse trabalho</h2>

          <Carousel
            className="mt-14"
            opts={{ loop: true, align: "start" }}
            plugins={[autoplayTesti.current]}
          >
            <CarouselContent className="-ml-5">
              {TESTIMONIALS.map((t) => (
                <CarouselItem key={t.name} className="pl-5 md:basis-1/2 lg:basis-1/3">
                  <figure className="surface-lux flex h-full flex-col justify-between rounded-2xl p-8">
                    <Quote className="size-6 text-primary/70" />
                    <blockquote className="mt-5 leading-relaxed text-foreground/90">
                      “{t.text}”
                    </blockquote>
                    <figcaption className="mt-7 text-sm uppercase tracking-[0.2em] text-primary">
                      {t.name}
                    </figcaption>
                  </figure>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hairline -left-3 bg-card text-foreground hover:bg-secondary md:-left-6" />
            <CarouselNext className="hairline -right-3 bg-card text-foreground hover:bg-secondary md:-right-6" />
          </Carousel>
        </div>
      </section>

      {/* 7 — Sobre */}
      <section className="py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="absolute -inset-4 rounded-[2.5rem] bg-[radial-gradient(circle_at_50%_40%,color-mix(in_oklab,var(--gold-1)_25%,transparent),transparent_70%)] blur-2xl" />
            <img
              src={danielle.url}
              alt="Danielle Souza em seu escritório"
              className="relative w-full rounded-[2rem] object-cover shadow-[var(--shadow-elegant)]"
              loading="lazy"
            />
          </div>
          <div>
            <Eyebrow>Sobre mim</Eyebrow>
            <h2 className="text-3xl md:text-5xl">
              Prazer, sou <span className="text-gold italic">Danielle</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground md:text-lg">
              <p>
                Especialista em Marketing Digital e criação de Landing Pages de alta
                conversão.
              </p>
              <p>
                Minha missão é ajudar empresas e profissionais a construírem uma presença
                digital forte, transmitindo credibilidade e transformando visitantes em
                clientes.
              </p>
              <p>
                Cada projeto é desenvolvido de forma personalizada, combinando estratégia,
                design e experiência do usuário para gerar resultados reais.
              </p>
              <p>
                Se você deseja uma página profissional que valorize sua marca e aumente
                suas vendas, será um prazer fazer parte desse projeto.
              </p>
            </div>
            <div className="mt-9">
              <Cta>Fale comigo agora</Cta>
            </div>
          </div>
        </div>
      </section>

      {/* 8 — CTA final */}
      <section className="border-t border-border/60 py-28">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="text-3xl md:text-5xl">
            Vamos criar a página que vai{" "}
            <span className="text-gold italic">valorizar o seu trabalho?</span>
          </h2>
          <p className="mt-6 text-muted-foreground md:text-lg">
            Me conte sobre o seu negócio. Em poucos minutos eu te mostro qual estrutura de
            página faz mais sentido para a sua oferta.
          </p>
          <div className="mt-10 flex justify-center">
            <Cta className="gap-3">
              <MessageCircle className="size-4" />
              Falar com a Danielle agora
            </Cta>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 text-center">
          <img src={logo.url} alt="Danielle Souza" className="h-12 w-auto" />
          <a
            href="https://www.instagram.com/pordaniellesouza?igsh=b3A0M2p6ZWhyeDI2"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram de Danielle Souza"
            className="hairline flex size-12 items-center justify-center rounded-full text-primary transition-colors hover:bg-secondary"
          >
            <Instagram className="size-5" />
          </a>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} Danielle Souza
          </p>
        </div>
      </footer>
    </div>
  );
}
