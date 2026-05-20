import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { Faq } from "@/components/faq";

export const metadata: Metadata = {
  title:
    "Nana Nenê — Consultoria de Sono Infantil em Veranópolis | Luiza Castelli",
  description:
    "Educação integrativa do sono para bebês e crianças de 0 a 3 anos, em Veranópolis/RS. Sem deixar o bebê chorando. Atendimento individualizado com Luiza Castelli.",
  alternates: { canonical: "/sono-infantil" },
  openGraph: {
    title: "Nana Nenê — Consultoria de Sono Infantil",
    description:
      "Sono respeitoso para bebês e crianças de 0 a 3 anos. Em Veranópolis/RS, com Luiza Castelli.",
    type: "website",
    locale: "pt_BR",
  },
};

const pilares = [
  {
    t: "Sem deixar chorar",
    d: "Nada de métodos que abandonam o bebê em sofrimento. Acolhemos cada noite com presença e estratégia.",
  },
  {
    t: "Base científica",
    d: "Formação nacional e internacional, com especialização em uma escola do Alabama (EUA). Cada decisão vem do conhecimento.",
  },
  {
    t: "Família no centro",
    d: "Cada plano é único, construído junto com os pais e respeitando o ritmo e o desenvolvimento da criança.",
  },
];

const paraQuem = [
  "Bebês que acordam muitas vezes durante a noite",
  "Dificuldade para iniciar o sono",
  "Despertares precoces",
  "Choro ao deitar ou ao trocar de fase do sono",
  "Sonecas curtas ou desregradas",
  "Transição do co-sleeping ou desmame noturno",
];

const faq = [
  {
    q: "A partir de que idade vocês atendem?",
    a: "Atendemos bebês e crianças de 0 a 3 anos. Cada faixa etária tem necessidades específicas, e o plano é montado para o momento atual da sua família.",
  },
  {
    q: "Vocês usam algum método de “deixar chorar”?",
    a: "Não. A abordagem é integrativa e respeitosa — buscamos resultados sustentáveis sem expor o bebê a estresse desnecessário. Acompanhamos com presença ativa.",
  },
  {
    q: "Como é o atendimento?",
    a: "Começa com uma avaliação completa da rotina, ambiente e padrões de sono da criança. Depois construímos um plano individualizado, com acompanhamento contínuo e ajustes ao longo do processo.",
  },
  {
    q: "Em quanto tempo costuma melhorar?",
    a: "Cada família é única, mas a maioria sente diferenças nas primeiras semanas. O importante é a consistência da rotina e o suporte durante a transição.",
  },
  {
    q: "Onde fica o atendimento?",
    a: "Em Veranópolis/RS, dentro do espaço da DG Ronco e Apneia do Sono (parte da Clivitare), na R. Dr. Idemundo Tedesco, 245.",
  },
];

export default function SonoInfantil() {
  return (
    <div className="bg-[var(--color-nn-bg)] text-[var(--color-nn-ink)]">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(184,201,214,0.35),_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24 grid md:grid-cols-12 gap-12 items-center w-full">
          <div className="md:col-span-7 fade-up">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full border border-[var(--color-nn-blue-deep)]/40 flex items-center justify-center font-serif text-[var(--color-nn-blue-deep)] text-base tracking-wider">
                NN
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-[var(--color-nn-blue-deep)]">
                  Nana Nenê
                </p>
                <p className="text-sm text-[var(--color-nn-mute)]">
                  Consultoria de sono infantil
                </p>
              </div>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.03]">
              Sono respeitoso<br />
              para quem ainda<br />
              <em className="text-[var(--color-nn-blue-deep)] font-light">
                está aprendendo
              </em>.
            </h1>

            <p className="mt-10 text-lg md:text-xl text-[var(--color-nn-mute)] max-w-2xl leading-relaxed fade-up-2">
              Educação integrativa do sono para bebês e crianças de 0 a 3 anos.
              Sem métodos que envolvam deixar o bebê chorando — só presença,
              técnica e cuidado.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 fade-up-3">
              <a
                href="https://wa.me/555436983038?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20sobre%20a%20consultoria%20de%20sono%20infantil%20com%20a%20Nana%20Nen%C3%AA."
                className="px-8 py-4 bg-[var(--color-nn-ink)] text-[var(--color-nn-bg)] text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-nn-blue-deep)] transition-colors"
              >
                Agendar avaliação
              </a>
              <Link
                href="#sobre"
                className="px-8 py-4 border border-[var(--color-nn-ink)] text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-nn-ink)] hover:text-[var(--color-nn-bg)] transition-colors"
              >
                Conhecer a Luiza
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 fade-up-2">
            <div className="aspect-[4/5] overflow-hidden bg-[var(--color-nn-bg-soft)] border border-[var(--color-nn-line)]">
              <img
                src="/media/dg/luiza-portrait.jpg"
                alt="Luiza Castelli — Nana Nenê, consultora de sono infantil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        className="py-32 bg-[var(--color-nn-bg-soft)] border-y border-[var(--color-nn-line)]"
      >
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-[var(--color-nn-line)]">
              <img
                src="/media/dg/luiza-castelli.jpg"
                alt="Luiza Castelli — Educadora Integrativa do Sono Infantil"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-nn-blue-deep)]">
              Quem sou
            </span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Olá, eu sou a<br />
              <em className="text-[var(--color-nn-blue-deep)] font-light">
                Luiza Castelli
              </em>.
            </h2>
            <p className="mt-8 text-lg text-[var(--color-nn-mute)] leading-relaxed">
              Educadora Integrativa do Sono Infantil, com foco no atendimento
              de bebês e crianças de 0 a 3 anos. Minha formação inclui cursos
              nacionais e internacionais, com destaque para minha especialização
              em uma escola do Alabama (EUA), que fundamenta a minha prática
              com base sólida e científica.
            </p>
            <p className="mt-5 text-[var(--color-nn-mute)] leading-relaxed">
              Minha abordagem é integrativa e individualizada, respeitando o
              desenvolvimento e as necessidades de cada criança e família —
              sem métodos que envolvam deixar o bebê chorando.
            </p>
            <p className="mt-8 font-serif text-2xl italic text-[var(--color-nn-blue-deep)]">
              “Será um prazer atender Veranópolis, um lugar que tenho um
              carinho especial.”
            </p>
          </div>
        </Reveal>
      </section>

      {/* ABORDAGEM — 3 PILARES */}
      <section className="py-32">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-nn-blue-deep)]">
              Como cuido do sono
            </span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Três pilares,<br />
              <em className="text-[var(--color-nn-blue-deep)] font-light">
                uma escuta só
              </em>.
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-px bg-[var(--color-nn-line)] border border-[var(--color-nn-line)]">
            {pilares.map((p, i) => (
              <div key={p.t} className="p-10 bg-[var(--color-nn-bg)]">
                <p className="font-serif text-3xl text-[var(--color-nn-blue-deep)]">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="font-serif text-2xl mt-4">{p.t}</h3>
                <p className="mt-3 text-[var(--color-nn-mute)] leading-relaxed">
                  {p.d}
                </p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* PARA QUEM */}
      <section className="py-32 bg-[var(--color-nn-bg-soft)] border-y border-[var(--color-nn-line)]">
        <Reveal className="max-w-5xl mx-auto px-6 md:px-10 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-nn-blue-deep)]">
            Para quem é
          </span>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
            Se você reconhece algum<br />
            <em className="text-[var(--color-nn-blue-deep)] font-light">
              desses sinais
            </em>, podemos conversar.
          </h2>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-[var(--color-nn-line)] max-w-3xl mx-auto text-left">
            {paraQuem.map((s, i) => (
              <div
                key={s}
                className="bg-[var(--color-nn-bg)] p-6 flex items-center gap-4"
              >
                <span className="font-serif text-2xl text-[var(--color-nn-blue-deep)]/60 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span>{s}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/555436983038?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20avalia%C3%A7%C3%A3o%20com%20a%20Nana%20Nen%C3%AA%20%E2%80%94%20sono%20infantil."
            className="inline-block mt-12 px-10 py-4 bg-[var(--color-nn-ink)] text-[var(--color-nn-bg)] text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-nn-blue-deep)] transition-colors"
          >
            Solicitar avaliação
          </a>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-32">
        <Reveal className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-[var(--color-nn-blue-deep)]">
              Dúvidas comuns
            </span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Perguntas<br />
              <em className="text-[var(--color-nn-blue-deep)] font-light">
                de mães e pais
              </em>.
            </h2>
            <p className="mt-8 text-[var(--color-nn-mute)] leading-relaxed">
              Se ficou algo em aberto, fala comigo no WhatsApp — respondo
              pessoalmente.
            </p>
          </div>
          <div className="md:col-span-8 md:pt-4">
            <Faq items={faq} />
          </div>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="py-40 bg-[var(--color-nn-bg-soft)] border-t border-[var(--color-nn-line)] text-center">
        <Reveal className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Noites mais leves,<br />
            <em className="text-[var(--color-nn-blue-deep)] font-light">
              dias mais inteiros
            </em>.
          </h2>
          <p className="mt-8 text-lg text-[var(--color-nn-mute)]">
            Agende sua consultoria de sono infantil com a Nana Nenê.
          </p>
          <a
            href="https://wa.me/555436983038?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20com%20a%20Nana%20Nen%C3%AA."
            className="inline-block mt-10 px-10 py-4 bg-[var(--color-nn-ink)] text-[var(--color-nn-bg)] text-sm tracking-[0.2em] uppercase hover:bg-[var(--color-nn-blue-deep)] transition-colors"
          >
            Falar no WhatsApp
          </a>
          <div className="mt-16 text-sm text-[var(--color-nn-mute)]">
            R. Dr. Idemundo Tedesco, 245 — Veranópolis/RS · parte da{" "}
            <Link
              href="/"
              className="text-[var(--color-nn-blue-deep)] border-b border-[var(--color-nn-blue-deep)]/40"
            >
              Clivitare
            </Link>{" "}
            ·{" "}
            <Link
              href="/ronco-e-apneia"
              className="text-[var(--color-nn-blue-deep)] border-b border-[var(--color-nn-blue-deep)]/40"
            >
              DG Ronco e Apneia
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
