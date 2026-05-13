import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, getCity } from "@/lib/cities";
import { Reveal } from "@/components/reveal";

const especialidades = [
  "Clínica Geral",
  "Ortodontia",
  "Implantodontia",
  "Dentística (lentes e facetas)",
  "Endodontia",
  "Periodontia",
  "Prótese Dentária",
  "Odontopediatria",
  "Harmonização Orofacial",
  "DTM",
  "Odontologia do Sono",
];

type Params = { cidade: string };

export function generateStaticParams() {
  return cities.map((c) => ({ cidade: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { cidade } = await params;
  const city = getCity(cidade);
  if (!city) return {};
  const title = `Dentista ${city.preposition} ${city.name} — Clivitare | Veranópolis/RS`;
  const description = `Centro clínico odontológico para pacientes ${city.preposition} ${city.name}. Ortodontia, implantes, ronco e apneia, harmonização e mais — a ${city.distanceKm} km, em Veranópolis/RS.`;
  return {
    title,
    description,
    alternates: { canonical: `/atendimento/${city.slug}` },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "pt_BR",
    },
  };
}

export default async function CidadePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { cidade } = await params;
  const city = getCity(cidade);
  if (!city) notFound();

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Clivitare — Centro Clínico Odontológico",
    image: "https://clivitare.com.br/media/clivitare/logo-lockup.png",
    url: `https://clivitare.com.br/atendimento/${city.slug}`,
    telephone: "+55 54 3698-3038",
    address: {
      "@type": "PostalAddress",
      streetAddress: "R. Dr. Idemundo Tedesco, 245 — Imperia Centro Profissional",
      addressLocality: "Veranópolis",
      addressRegion: "RS",
      postalCode: "95330-000",
      addressCountry: "BR",
    },
    areaServed: [
      { "@type": "City", name: city.name },
      { "@type": "City", name: "Veranópolis" },
    ],
    medicalSpecialty: [
      "Dentistry",
      "Orthodontics",
      "ImplantDentistry",
      "Endodontics",
      "Periodontics",
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />

      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-center bg-bone overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(173,137,94,0.18),_transparent_60%)]" />

        <div className="relative max-w-5xl mx-auto px-6 md:px-10 pt-32 pb-20 fade-up">
          <span className="text-xs tracking-[0.3em] uppercase text-gold">
            Atendimento · {city.name} · RS
          </span>
          <h1 className="font-serif text-5xl md:text-7xl leading-[1.04] mt-6 text-ink">
            Dentista para quem é<br />
            <em className="text-gold font-light">
              {city.preposition} {city.name}
            </em>
            .
          </h1>
          <p className="mt-8 text-lg text-mute max-w-2xl leading-relaxed fade-up-2">
            {city.intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-4 fade-up-3">
            <a
              href="https://wa.me/555436983038"
              className="px-8 py-4 bg-ink text-ivory text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
            >
              Agendar consulta
            </a>
            <a
              href={`https://www.google.com/maps/dir/${encodeURIComponent(
                city.name + ", RS",
              )}/R.+Dr.+Idemundo+Tedesco,+245,+Veran%C3%B3polis+-+RS`}
              target="_blank"
              rel="noopener"
              className="px-8 py-4 border border-ink text-sm tracking-[0.2em] uppercase hover:bg-ink hover:text-ivory transition-colors"
            >
              Ver rota →
            </a>
          </div>
        </div>
      </section>

      {/* DISTÂNCIA */}
      <section className="py-24 bg-ivory border-y border-line">
        <Reveal className="max-w-5xl mx-auto px-6 md:px-10 grid md:grid-cols-3 gap-10 text-center">
          <div>
            <div className="font-serif text-5xl text-ink">{city.distanceKm} km</div>
            <div className="text-xs tracking-[0.2em] uppercase text-mute mt-3">
              de {city.name} até Veranópolis
            </div>
          </div>
          <div>
            <div className="font-serif text-5xl text-ink">{city.driveMin} min</div>
            <div className="text-xs tracking-[0.2em] uppercase text-mute mt-3">
              de viagem média de carro
            </div>
          </div>
          <div>
            <div className="font-serif text-5xl text-ink">11</div>
            <div className="text-xs tracking-[0.2em] uppercase text-mute mt-3">
              especialidades em um só lugar
            </div>
          </div>
        </Reveal>
      </section>

      {/* ESPECIALIDADES */}
      <section className="py-32 bg-bone">
        <Reveal className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] uppercase text-gold">
              O que fazemos
            </span>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight mt-6">
              Tudo o que sua família precisa,<br />
              <em className="text-gold font-light">
                a {city.driveMin} minutos {city.preposition} {city.name}
              </em>
              .
            </h2>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-px bg-line border border-line">
            {especialidades.map((e) => (
              <div key={e} className="bg-bone p-8">
                <p className="font-serif text-xl text-ink">{e}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/#especialidades"
              className="text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Ver todas as especialidades →
            </Link>
            <Link
              href="/ronco-e-apneia"
              className="text-xs tracking-[0.2em] uppercase border-b border-ink pb-1 hover:text-gold hover:border-gold transition-colors"
            >
              Tratamento de ronco e apneia →
            </Link>
          </div>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="py-32 bg-ivory">
        <Reveal className="max-w-3xl mx-auto px-6 md:px-10 text-center">
          <h2 className="font-serif text-4xl md:text-5xl leading-tight">
            Pacientes {city.preposition} {city.name},<br />
            <em className="text-gold font-light">vamos cuidar de você</em>.
          </h2>
          <p className="mt-8 text-mute leading-relaxed">
            Atendemos pacientes de toda a região com horários flexíveis e
            planejamento personalizado. Fale com a gente pelo WhatsApp e agende
            sua avaliação.
          </p>
          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a
              href="https://wa.me/555436983038"
              className="px-8 py-4 bg-ink text-ivory text-sm tracking-[0.2em] uppercase hover:bg-gold transition-colors"
            >
              Falar no WhatsApp
            </a>
            <Link
              href="/#contato"
              className="px-8 py-4 border border-ink text-sm tracking-[0.2em] uppercase hover:bg-ink hover:text-ivory transition-colors"
            >
              Ver endereço e mapa
            </Link>
          </div>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-3 text-xs tracking-[0.18em] uppercase text-mute">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/atendimento/${c.slug}`}
                  className="hover:text-gold transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </Reveal>
      </section>
    </>
  );
}
