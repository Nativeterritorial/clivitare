import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade — Clivitare",
  description:
    "Como a Clivitare coleta, usa e protege seus dados em conformidade com a LGPD.",
};

export default function Privacidade() {
  return (
    <section className="py-32 bg-bone min-h-screen">
      <div className="max-w-3xl mx-auto px-6 md:px-10">
        <span className="text-xs tracking-[0.3em] uppercase text-gold">
          Documento legal
        </span>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight mt-6">
          Política de Privacidade
        </h1>
        <p className="mt-4 text-sm text-mute">
          Última atualização:{" "}
          {new Date().toLocaleDateString("pt-BR", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          })}
        </p>

        <div className="mt-12 space-y-10 text-mute leading-relaxed">
          <Block title="1. Quem somos">
            A Clivitare — Centro Clínico Odontológico (R. Dr. Idemundo Tedesco,
            245, Veranópolis/RS) é responsável pelo tratamento dos dados pessoais
            coletados neste site, em conformidade com a Lei Geral de Proteção de
            Dados (LGPD — Lei nº 13.709/2018).
          </Block>

          <Block title="2. Dados que coletamos">
            Neste site coletamos apenas dados estritamente necessários:
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>
                Dados de navegação (páginas visitadas, tempo de permanência,
                origem de tráfego), via cookies analíticos.
              </li>
              <li>
                Dados que você nos fornece voluntariamente ao iniciar uma
                conversa pelo WhatsApp ou Instagram (nome, telefone, mensagem).
              </li>
            </ul>
          </Block>

          <Block title="3. Cookies">
            Cookies são pequenos arquivos armazenados no seu navegador. Usamos
            cookies para entender o desempenho do site e melhorar a experiência
            de navegação. Você pode aceitar ou recusar cookies no banner exibido
            ao acessar o site, e pode revisar essa escolha a qualquer momento
            limpando os dados do navegador.
          </Block>

          <Block title="4. Finalidade do tratamento">
            Utilizamos seus dados para:
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>responder solicitações de agendamento e dúvidas;</li>
              <li>melhorar o conteúdo e a usabilidade do site;</li>
              <li>cumprir obrigações legais e regulatórias aplicáveis.</li>
            </ul>
          </Block>

          <Block title="5. Compartilhamento">
            Não vendemos nem compartilhamos seus dados com terceiros para fins
            comerciais. Podemos utilizar serviços de hospedagem e análise (como
            Vercel e Google) que tratam dados em nosso nome, sob suas próprias
            políticas de privacidade.
          </Block>

          <Block title="6. Seus direitos">
            Você pode, a qualquer momento, solicitar:
            <ul className="mt-3 list-disc pl-6 space-y-1">
              <li>confirmação da existência de tratamento dos seus dados;</li>
              <li>acesso, correção ou exclusão dos dados;</li>
              <li>portabilidade ou anonimização;</li>
              <li>revogação do consentimento.</li>
            </ul>
            Para exercer qualquer desses direitos, entre em contato pelo
            WhatsApp (54) 3698-3038 ou pelo Instagram{" "}
            <a
              href="https://instagram.com/centroclinicoclivitare"
              className="text-ink underline underline-offset-2"
            >
              @centroclinicoclivitare
            </a>
            .
          </Block>

          <Block title="7. Segurança">
            Adotamos medidas técnicas e organizacionais adequadas para proteger
            seus dados contra acessos não autorizados, perda ou alteração.
          </Block>

          <Block title="8. Atualizações">
            Esta política pode ser atualizada periodicamente. A data da última
            revisão consta no topo desta página.
          </Block>
        </div>
      </div>
    </section>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="font-serif text-2xl text-ink">{title}</h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
