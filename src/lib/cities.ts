export type City = {
  slug: string;
  name: string;
  preposition: string; // "de", "da"
  distanceKm: number;
  driveMin: number;
  intro: string;
};

export const cities: City[] = [
  {
    slug: "nova-prata",
    name: "Nova Prata",
    preposition: "de",
    distanceKm: 10,
    driveMin: 12,
    intro:
      "Nova Prata fica a poucos minutos de Veranópolis pela ERS-431. Atendemos diariamente pacientes pratenses que buscam odontologia integral, ortodontia e tratamento de ronco e apneia em um mesmo lugar.",
  },
  {
    slug: "cotipora",
    name: "Cotiporã",
    preposition: "de",
    distanceKm: 14,
    driveMin: 18,
    intro:
      "Cotiporã está a uma curta viagem da Clivitare. Pacientes cotiporenses encontram em nosso centro uma estrutura completa para odontologia, harmonização orofacial e odontologia do sono.",
  },
  {
    slug: "fagundes-varela",
    name: "Fagundes Varela",
    preposition: "de",
    distanceKm: 12,
    driveMin: 15,
    intro:
      "Fagundes Varela é um dos municípios mais próximos de Veranópolis. Recebemos pacientes da cidade para consultas de rotina, planejamento estético e tratamentos avançados.",
  },
  {
    slug: "vila-flores",
    name: "Vila Flores",
    preposition: "de",
    distanceKm: 22,
    driveMin: 25,
    intro:
      "Vila Flores está a cerca de 25 minutos da Clivitare. Acolhemos pacientes vilaflorenses com planos de tratamento personalizados e acompanhamento contínuo.",
  },
  {
    slug: "nova-bassano",
    name: "Nova Bassano",
    preposition: "de",
    distanceKm: 25,
    driveMin: 30,
    intro:
      "Nova Bassano fica em região de fácil acesso à Veranópolis. Atendemos famílias bassanenses com odontologia adulta e infantil em ambiente premium.",
  },
  {
    slug: "nova-araca",
    name: "Nova Araçá",
    preposition: "de",
    distanceKm: 30,
    driveMin: 35,
    intro:
      "Nova Araçá está a poucos quilômetros do nosso centro clínico. Pacientes araçaenses encontram na Clivitare odontologia integral com foco em saúde, função e estética.",
  },
  {
    slug: "parai",
    name: "Paraí",
    preposition: "de",
    distanceKm: 35,
    driveMin: 40,
    intro:
      "Paraí está conectada a Veranópolis por rodovias bem servidas. Recebemos pacientes paraienses para tratamentos de ronco, apneia, ortodontia e dentística avançada.",
  },
  {
    slug: "vista-alegre-do-prata",
    name: "Vista Alegre do Prata",
    preposition: "de",
    distanceKm: 28,
    driveMin: 35,
    intro:
      "Vista Alegre do Prata está próxima a Veranópolis e Nova Prata. Atendemos pacientes da cidade com toda a estrutura de um centro clínico odontológico interdisciplinar.",
  },
  {
    slug: "sao-jorge",
    name: "São Jorge",
    preposition: "de",
    distanceKm: 35,
    driveMin: 40,
    intro:
      "São Jorge fica a uma viagem tranquila da Clivitare. Pacientes jorgenses contam com odontologia avançada e atendimento humanizado em Veranópolis.",
  },
  {
    slug: "guabiju",
    name: "Guabiju",
    preposition: "de",
    distanceKm: 40,
    driveMin: 50,
    intro:
      "Guabiju é uma das cidades da nossa região de atendimento. Recebemos pacientes guabijuenses para consultas, planejamento estético e tratamentos de longa duração.",
  },
];

export function getCity(slug: string): City | undefined {
  return cities.find((c) => c.slug === slug);
}
