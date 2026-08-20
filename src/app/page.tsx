import Link from "next/link";
import { HeroVideo } from "@/components/hero-video";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";

const faq = [
  {
    q: "Como funciona a primeira consulta?",
    a: "A primeira consulta é uma avaliação completa: conversamos sobre sua saúde, histórico e objetivos, fazemos um exame clínico e montamos um plano de tratamento personalizado. Sem pressa e sem compromisso.",
  },
  {
    q: "Vocês atendem convênios?",
    a: "Trabalhamos com atendimento particular e oferecemos condições facilitadas de pagamento. Para dúvidas sobre reembolso do seu convênio, fale com a gente no WhatsApp.",
  },
  {
    q: "Atendem crianças?",
    a: "Sim. Temos odontopediatria dentro do centro clínico, com atendimento pensado para o conforto das crianças e para educar bons hábitos desde cedo.",
  },
  {
    q: "Como funciona o tratamento de ronco e apneia?",
    a: "Começa com uma avaliação na DG Ronco e Apneia do Sono, nosso espaço clínico especializado. Quando indicado, realizamos polissonografia tipo III em casa e definimos o tratamento — placa intraoral, CPAP ou acompanhamento contínuo.",
  },
  {
    q: "Onde fica a clínica?",
    a: "Estamos no Imperia Centro Profissional, R. Dr. Idemundo Tedesco, 245 — São Pelegrino, Veranópolis/RS. Estacionamento no local.",
  },
];

const especialidades = [
  { t: "Clínica Geral", d: "Atendimento adulto e infantil com planejamento completo." },
  { t: "Ortodontia", d: "Aparelhos ortodônticos estéticos, convencionais e alinhadores invisíveis." },
  { t: "Implantodontia", d: "Implantes dentários com técnica e planejamento digital." },
  { t: "Dentística", d: "Estética dental, facetas e lentes de contato." },
  { t: "Endodontia", d: "Tratamento de canal com tecnologia e precisão." },
  { t: "Periodontia", d: "Saúde da gengiva e tecidos de suporte." },
  { t: "Prótese Dentária", d: "Próteses fixas e removíveis sob medida." },
  { t: "Odontopediatria", d: "Odontologia pensada para crianças." },
  { t: "Harmonização Orofacial", d: "Equilíbrio entre estética e função facial." },
  { t: "DTM", d: "Disfunção temporomandibular e dores orofaciais." },
  { t: "Odontologia do Sono", d: "Placa intraoral, CPAP e manejo do ronco e apneia.", highlight: true },
];

const organization = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": "https://clivitare.com.br/#clivitare",
  name: "Clivitare — Centro Clínico Odontológico",
  alternateName: "Clivitare",
  url: "https://clivitare.com.br",
  logo: "https://clivitare.com.br/media/clivitare/logo-icon.png",
  image: "https://clivitare.com.br/media/clivitare/logo-lockup.png",
  telephone: "+55 54 3698-3038",
  address: {
    "@type": "PostalAddress",
    streetAddress: "R. Dr. Idemundo Tedesco, 245 — Imperia Centro Profissional",
    addressLocality: "Veranópolis",
    addressRegion: "RS",
    postalCode: "95330-000",
    addressCountry: "BR",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />

      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-bone">
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(183,154,107,0.18),_transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto px-6 md:px-10 pt-32 pb-24 grid md:grid-cols-12 gap-10 items-center w-full">
          <div className="md:col-span-7 fade-up">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">
              Centro Clínico Odontológico
            </span>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.02] mt-6 text-ink">
              Cuidar de você<br />
              <em className="text-gold font-light">vai muito além</em><br />
              da estética.
            </h1>
            <p className="mt-8 text-lg text-mute max-w-xl leading-relaxed fade-up-2">
              Saúde, função e qualidade de vida em cada detalhe. Um centro
              interdisciplinar em Veranópolis, onde cada sorriso é único — e o
              cuidado também.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 fade-up-3">
              <a
                href="https://wa.me/555436983038"
                className="px-8 py-4 bg-ink text-ivory text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
              >
                Agendar consulta
              </a>
              <Link
                href="#especialidades"
                className="px-8 py-4 border border-ink text-sm tracking-[0.2em] uppercase hover:bg-ink hover:text-ivory transition-colors"
              >
                Ver especialidades
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 fade-up-2">
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-ink">
              <HeroVideo
                src="/media/clivitare/clinic-xray.mp4"
                poster="/media/clivitare/clinic-xray-poster.jpg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-mute">
          ↓ role para descobrir
        </div>
      </section>

      {/* SOBRE */}
      <section className="py-32 bg-ivory">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Sobre a Clivitare</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Um centro pensado para<br />
              <em className="text-gold font-light">saúde integral</em>.
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-16">
            <p className="text-lg leading-relaxed text-mute">
              A Clivitare nasce da união entre técnica, escuta e estética. Somos
              um centro interdisciplinar que une odontologia de alta performance
              e especialidades médicas para oferecer cuidado contínuo e
              personalizado. Cada plano de tratamento é construído com atenção
              ao que há por trás do sorriso: função, respiração, sono, postura,
              bem-estar.
            </p>
            <div className="mt-10 grid grid-cols-3 gap-8 border-t border-line pt-10">
              <Stat n="12+" l="Especialidades" />
              <Stat n="Adulto" l="& Infantil" />
              <Stat n="Imperia" l="Veranópolis · RS" />
            </div>
          </div>
        </Reveal>
      </section>

      {/* ESPECIALIDADES */}
      <section id="especialidades" className="py-32 bg-bone relative">
        <Reveal className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-gold">Nossas especialidades</span>
              <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6 max-w-2xl">
                Um time completo<br />para <em className="text-gold font-light">cada etapa</em>.
              </h2>
            </div>
            <p className="text-mute max-w-sm">
              Do primeiro atendimento ao acompanhamento contínuo, trabalhamos
              com o que há de mais avançado em odontologia.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-line">
            {especialidades.map((e) => (
              <div
                key={e.t}
                className={`p-10 transition-colors ${
                  e.highlight
                    ? "bg-ink text-ivory"
                    : "bg-bone hover:bg-ivory"
                }`}
              >
                <h3 className={`font-serif text-2xl ${e.highlight ? "text-gold-soft" : ""}`}>{e.t}</h3>
                <p className={`mt-3 text-sm leading-relaxed ${e.highlight ? "text-ivory/70" : "text-mute"}`}>
                  {e.d}
                </p>
                {e.highlight && (
                  <Link
                    href="/ronco-e-apneia"
                    className="mt-6 inline-block text-xs tracking-[0.2em] uppercase text-gold-soft border-b border-gold-soft pb-0.5"
                  >
                    Conhecer DG →
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/555436983038"
              className="inline-block px-10 py-4 border border-ink text-sm tracking-[0.2em] uppercase hover:bg-ink hover:text-ivory transition-colors"
            >
              Agendar consulta
            </a>
          </div>
        </Reveal>
      </section>

      {/* EQUIPE */}
      <section id="equipe" className="py-32 bg-ivory">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Conheça a equipe</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Sócias, dentistas,<br />
              <em className="text-gold font-light">apaixonadas por cuidado</em>.
            </h2>
          </div>

          <div className="max-w-md mx-auto">
            <div className="aspect-[4/5] overflow-hidden bg-line">
              <img
                src="/media/clivitare/doctors-pink.jpg"
                alt="Dra. Gabriela Lunelli e Dra. Daiany De Conto no consultório Clivitare"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <DoctorBio
              name="Dra. Gabriela Lunelli"
              role="Cirurgiã-Dentista · Sócia-Proprietária"
              bio="Especialista em devolver função, estética e qualidade de vida. Sócia da Clivitare e da DG Ronco e Apneia do Sono."
            />
            <DoctorBio
              name="Dra. Daiany De Conto"
              role="Cirurgiã-Dentista · Sócia-Proprietária"
              bio="Dedicada à odontologia integral e à odontologia do sono. Sócia da Clivitare e da DG Ronco e Apneia do Sono."
            />
          </div>

          <div className="mt-16 text-center">
            <a
              href="https://wa.me/555436983038"
              className="inline-block px-10 py-4 bg-ink text-ivory text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
            >
              Marcar avaliação
            </a>
          </div>
        </Reveal>
      </section>

      {/* DG CALLOUT */}
      <section className="relative py-40 bg-dg-deep text-dg-cream overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-[radial-gradient(ellipse_at_center,_rgba(199,169,122,0.5),_transparent_70%)]" />
        <Reveal className="relative max-w-5xl mx-auto px-6 md:px-10 text-center">
          <span className="text-xs tracking-[0.35em] uppercase text-dg-sand">
            Uma vertical especializada
          </span>
          <h2 className="font-serif text-5xl md:text-7xl leading-[1.05] mt-6">
            O problema<br />
            <em className="text-dg-sand font-light">não é o ronco.</em><br />
            É o ar que não passa.
          </h2>
          <p className="mt-10 text-lg text-dg-cream/80 max-w-2xl mx-auto leading-relaxed">
            A DG Ronco e Apneia do Sono é o espaço clínico da Clivitare dedicado
            à odontologia do sono — polissonografia, CPAP e placas intraorais
            com acompanhamento contínuo.
          </p>
          <Link
            href="/ronco-e-apneia"
            className="inline-block mt-12 px-10 py-4 bg-dg-sand text-dg-deep text-sm tracking-[0.2em] uppercase hover:bg-dg-cream transition-colors"
          >
            Acessar DG Ronco e Apneia →
          </Link>
        </Reveal>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-ivory">
        <Reveal className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-16">
          <div className="md:col-span-4">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Dúvidas frequentes</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Perguntas<br />
              <em className="text-gold font-light">comuns</em>.
            </h2>
            <p className="mt-8 text-mute leading-relaxed">
              Não encontrou o que procurava? Fale com a gente no WhatsApp — respondemos rápido.
            </p>
          </div>
          <div className="md:col-span-8 md:pt-4">
            <Faq items={faq} />
          </div>
        </Reveal>
      </section>

      {/* CONTATO */}
      <section id="contato" className="py-32 bg-bone">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs tracking-[0.3em] uppercase text-gold">Venha nos visitar</span>
            <h2 className="font-serif text-5xl md:text-6xl leading-tight mt-6">
              Vamos cuidar<br />
              <em className="text-gold font-light">de você</em>.
            </h2>
            <div className="mt-10 space-y-6">
              <Info label="Endereço" value="R. Dr. Idemundo Tedesco, 245 — São Pelegrino, Veranópolis/RS" />
              <Info label="WhatsApp" value="(54) 3698-3038" href="https://wa.me/555436983038" />
              <Info label="Instagram" value="@centroclinicoclivitare" href="https://instagram.com/centroclinicoclivitare" />
            </div>
          </div>
          <div>
            <div className="aspect-[4/5] overflow-hidden bg-ink relative">
              <iframe
                src="https://www.google.com/maps?q=R.+Dr.+Idemundo+Tedesco,+245,+Veran%C3%B3polis+-+RS&output=embed"
                className="w-full h-full grayscale-[40%] contrast-[0.95]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa — Clivitare"
              />
            </div>
            <div className="mt-4 grid grid-cols-2 gap-px bg-line">
              <a
                href="https://www.google.com/maps/dir/?api=1&destination=R.+Dr.+Idemundo+Tedesco,+245,+Veran%C3%B3polis+-+RS"
                target="_blank"
                rel="noopener"
                className="bg-bone px-6 py-4 text-xs tracking-[0.2em] uppercase text-ink hover:bg-ink hover:text-ivory transition-colors text-center"
              >
                Abrir no Google Maps
              </a>
              <a
                href="https://waze.com/ul?ll=-28.9361,-51.5531&navigate=yes&q=R.+Dr.+Idemundo+Tedesco,+245,+Veran%C3%B3polis"
                target="_blank"
                rel="noopener"
                className="bg-bone px-6 py-4 text-xs tracking-[0.2em] uppercase text-ink hover:bg-ink hover:text-ivory transition-colors text-center"
              >
                Abrir no Waze
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-serif text-4xl text-ink">{n}</div>
      <div className="text-xs tracking-[0.2em] uppercase text-mute mt-2">{l}</div>
    </div>
  );
}

function DoctorBio({ name, role, bio }: { name: string; role: string; bio: string }) {
  return (
    <div>
      <h3 className="font-serif text-3xl">{name}</h3>
      <p className="text-xs tracking-[0.2em] uppercase text-gold mt-2">{role}</p>
      <p className="mt-4 text-mute leading-relaxed">{bio}</p>
    </div>
  );
}

function Info({ label, value, href }: { label: string; value: string; href?: string }) {
  if (href) {
    return (
      <div>
        <div className="text-xs tracking-[0.2em] uppercase text-gold">{label}</div>
        <a href={href} target="_blank" rel="noopener" className="block mt-1 text-lg text-ink hover:text-gold transition-colors">
          {value}
        </a>
      </div>
    );
  }
  return (
    <div>
      <div className="text-xs tracking-[0.2em] uppercase text-gold">{label}</div>
      <div className="mt-1 text-lg text-ink">{value}</div>
    </div>
  );
}
