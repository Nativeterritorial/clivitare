import type { Metadata } from "next";
import Link from "next/link";
import { PolissonografiaGraphic } from "@/components/polissonografia-graphic";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "DG Ronco e Apneia do Sono — Clivitare",
  description:
    "Espaço clínico especializado em ronco e apneia do sono em Veranópolis/RS. Polissonografia tipo III, CPAP e placa intraoral com acompanhamento quinzenal.",
};

const exames = [
  {
    t: "Polissonografia Tipo III",
    d: "Exame realizado no conforto da sua casa. Monitora sua respiração durante o sono, identificando alterações importantes. Simples, seguro e sem necessidade de internação.",
  },
];

const servicos = [
  { t: "Placa intraoral", d: "Tratamento para ronco e apneia do sono feito sob medida." },
  { t: "Aluguel de CPAP", d: "Equipamento com acompanhamento profissional." },
  { t: "Orientação na compra de CPAP", d: "Escolha consciente do equipamento ideal." },
  { t: "Máscaras e acessórios", d: "Orientação na escolha de máscaras, insumos e água destilada." },
  { t: "Ajuste e titulação", d: "Ajuste de pressão do CPAP com acompanhamento quinzenal." },
];

const sinais = [
  "Ronco alto e frequente",
  "Sonolência durante o dia",
  "Pausas na respiração durante o sono",
  "Acordar cansado mesmo após dormir",
  "Dor de cabeça matinal",
  "Dificuldade de concentração",
];

export default function RoncoApneia() {
  return (
    <div className="bg-dg-deep text-dg-cream">
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(199,169,122,0.25),_transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(58,47,36,0.3)_0%,_transparent_40%,_rgba(58,47,36,0.6)_100%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24 w-full">
          <div className="max-w-4xl fade-up">
            <div className="flex items-center gap-4 mb-10">
              <div className="w-14 h-14 rounded-full border border-dg-sand flex items-center justify-center font-serif text-dg-sand text-xl tracking-widest">
                DG
              </div>
              <div>
                <p className="text-xs tracking-[0.3em] uppercase text-dg-sand">Espaço Clínico</p>
                <p className="text-sm text-dg-cream/70">Ronco e Apneia do Sono</p>
              </div>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.03]">
              O problema<br />
              <em className="text-dg-sand font-light">não é o ronco.</em><br />
              É o ar que não passa.
            </h1>

            <p className="mt-10 text-lg md:text-xl text-dg-cream/80 max-w-2xl leading-relaxed fade-up-2">
              Seu sono merece sua atenção. Se o ronco prejudica suas noites e
              sua disposição, podemos ajudar. Cuidamos do sono com a seriedade
              que ele merece.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 fade-up-3">
              <a
                href="https://wa.me/555436983058"
                className="px-8 py-4 bg-dg-sand text-dg-deep text-sm tracking-[0.2em] uppercase hover:bg-dg-cream transition-colors"
              >
                Agendar avaliação
              </a>
              <Link
                href="#teste"
                className="px-8 py-4 border border-dg-sand text-dg-sand text-sm tracking-[0.2em] uppercase hover:bg-dg-sand hover:text-dg-deep transition-colors"
              >
                Você tem apneia?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-32 border-t border-dg-sand/20">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden border border-dg-sand/20">
              <img
                src="/media/clivitare/doctors-navy.jpg"
                alt="Dra. Daiany De Conto e Dra. Gabriela Lunelli — DG Ronco e Apneia do Sono"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <span className="text-xs tracking-[0.3em] uppercase text-dg-sand">Quem somos</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Tratamos o sono<br />
              <em className="text-dg-sand font-light">com seriedade</em>.
            </h2>
            <p className="mt-8 text-lg text-dg-cream/80 leading-relaxed">
              Somos a Dra. Gabriela Lunelli e a Dra. Daiany De Conto,
              cirurgiãs-dentistas apaixonadas por devolver qualidade de vida
              aos pacientes. A DG Ronco e Apneia do Sono é um espaço clínico
              dedicado à odontologia do sono, parte da{" "}
              <Link href="/" className="text-dg-sand border-b border-dg-sand/60">
                Clivitare
              </Link>
              , em Veranópolis/RS.
            </p>
          </div>
        </Reveal>
      </section>

      {/* TESTE DE RISCO */}
      <section id="teste" className="py-32 bg-dg-kraft/20 border-y border-dg-sand/20">
        <Reveal className="max-w-4xl mx-auto px-6 md:px-10 text-center">
          <span className="text-xs tracking-[0.3em] uppercase text-dg-sand">Sinais de alerta</span>
          <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
            Será que você tem apneia<br />
            <em className="text-dg-sand font-light">e não sabe?</em>
          </h2>
          <p className="mt-8 text-dg-cream/70 max-w-xl mx-auto">
            A apneia obstrutiva do sono é silenciosa. Se você se identifica com
            dois ou mais sinais abaixo, vale uma avaliação.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-px bg-dg-sand/20 max-w-3xl mx-auto text-left">
            {sinais.map((s, i) => (
              <div key={s} className="bg-dg-deep p-6 flex items-center gap-4">
                <span className="font-serif text-2xl text-dg-sand/60 w-8">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-dg-cream/90">{s}</span>
              </div>
            ))}
          </div>

          <a
            href="https://wa.me/555436983058?text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20uma%20avalia%C3%A7%C3%A3o%20para%20ronco%20e%20apneia%20do%20sono."
            className="inline-block mt-12 px-10 py-4 bg-dg-sand text-dg-deep text-sm tracking-[0.2em] uppercase hover:bg-dg-cream transition-colors"
          >
            Solicitar avaliação
          </a>
        </Reveal>
      </section>

      {/* EXAMES */}
      <section className="py-32">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-dg-sand">Exames que realizamos</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              <em className="text-dg-sand font-light">Polissonografia</em><br />
              Tipo III
            </h2>
            <ul className="mt-10 space-y-4 text-lg text-dg-cream/80">
              <li className="flex gap-4">
                <span className="text-dg-sand">—</span>
                Exame realizado no conforto da sua casa.
              </li>
              <li className="flex gap-4">
                <span className="text-dg-sand">—</span>
                Monitora sua respiração durante o sono.
              </li>
              <li className="flex gap-4">
                <span className="text-dg-sand">—</span>
                Identifica alterações importantes de forma precisa.
              </li>
            </ul>
            <p className="mt-10 font-serif text-2xl text-dg-sand italic">
              Simples, seguro e sem necessidade de internação.
            </p>
          </div>
          <PolissonografiaGraphic />
        </Reveal>
      </section>

      {/* SERVIÇOS */}
      <section className="py-32 bg-dg-kraft/15 border-y border-dg-sand/20">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-dg-sand">Nossos serviços</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Odontologia<br />
              <em className="text-dg-sand font-light">do sono</em>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-dg-sand/20">
            {servicos.map((s) => (
              <div key={s.t} className="p-10 bg-dg-deep">
                <h3 className="font-serif text-2xl text-dg-sand">{s.t}</h3>
                <p className="mt-3 text-dg-cream/70 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* CTA FINAL */}
      <section className="py-40 text-center">
        <Reveal className="max-w-3xl mx-auto px-6 md:px-10">
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05]">
            Cuidar do sono<br />
            <em className="text-dg-sand font-light">é cuidar de tudo</em>.
          </h2>
          <p className="mt-8 text-lg text-dg-cream/70">
            Agende sua avaliação com a DG Ronco e Apneia do Sono.
          </p>
          <a
            href="https://wa.me/555436983058"
            className="inline-block mt-10 px-10 py-4 bg-dg-sand text-dg-deep text-sm tracking-[0.2em] uppercase hover:bg-dg-cream transition-colors"
          >
            Falar no WhatsApp
          </a>
          <div className="mt-16 text-sm text-dg-cream/50">
            R. Dr. Idemundo Tedesco, 245 — Veranópolis/RS · parte da{" "}
            <Link href="/" className="text-dg-sand border-b border-dg-sand/40">
              Clivitare
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
