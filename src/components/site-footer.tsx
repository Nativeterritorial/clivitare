import Link from "next/link";
import { cities } from "@/lib/cities";

export function SiteFooter() {
  return (
    <footer className="bg-ink text-ivory mt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-2">
          <img
            src="/media/clivitare/logo-lockup.png"
            alt="Centro Clínico Clivitare"
            className="h-20 w-auto"
          />
          <p className="mt-6 text-sm text-ivory/70 max-w-sm leading-relaxed">
            Centro interdisciplinar de saúde e bem-estar. Odontologia e
            especialidades médicas de alta performance em Veranópolis/RS.
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-soft">Endereço</h4>
          <p className="mt-4 text-sm leading-relaxed text-ivory/80">
            R. Dr. Idemundo Tedesco, 245<br />
            São Pelegrino — Veranópolis, RS<br />
            Imperia Centro Profissional
          </p>
        </div>
        <div>
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-soft">Contato</h4>
          <div className="mt-4 flex flex-col gap-2 text-sm text-ivory/80">
            <a href="https://wa.me/555436983058" className="hover:text-ivory">WhatsApp (54) 3698-3058</a>
            <a href="https://instagram.com/centroclinicoclivitare" className="hover:text-ivory">@centroclinicoclivitare</a>
            <Link href="/ronco-e-apneia" className="hover:text-ivory">DG Ronco e Apneia do Sono</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
          <h4 className="text-xs uppercase tracking-[0.2em] text-gold-soft">Atendemos pacientes de</h4>
          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-xs text-ivory/60">
            {cities.map((c) => (
              <Link
                key={c.slug}
                href={`/atendimento/${c.slug}`}
                className="hover:text-ivory transition-colors"
              >
                {c.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-6 text-xs text-ivory/40 flex flex-col md:flex-row md:items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} Clivitare. Todos os direitos reservados.</span>
          <div className="flex gap-5">
            <Link href="/privacidade" className="hover:text-ivory">Política de privacidade</Link>
            <span>Veranópolis — RS</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
