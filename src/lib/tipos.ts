/**
 * tipos.ts
 * 
 * O objetivo deste script é definir tipos e constantes usadas na aplicação a partir do modelo DBML.
 * Isso ajuda a manter a consistência e facilita futuras alterações.
 * Deste modo, atualizações nos valores dos campos Enum na tabela DEVEM ser refletidas aqui.
 * 
 * Criando uma nova lista de traduções, a const statusList repetida para cada idioma, uma vez que a tipagem deve gerar mensagens de erros caso alguma valor não esteja correto.
 */

// Valores exatos dos campos Enum
export const statusList = ['Nova', 'Alterada', 'Ignorada', 'Publicada'] as const;

// Tipo para o Status (baseado na lista)
export type Status = (typeof statusList)[number];

export const centrosNucleosList = [
  'CGMEG', 'LUME', 'CCSNano', 'NEAB', 'CEB', 'NEPA', 'CEIBC', 'NEPAM',
  'CEMIB', 'NEPO', 'CEPAGRI', 'NEPP', 'CEPETRO', 'NICS', 'CESOP',
  'NIED', 'CIDDIC', 'NIPE', 'CLE', 'NUDECRI', 'CMU', 'PAGU', 'CPQBA'
] as const;

// Tipo para o Centro ou Núcleo (baseado na lista)
export type CentroNucleo = (typeof centrosNucleosList)[number];

// Tipo para o Scrap (baseado no DBML da tabela scraps)
export type Scrap = {
  uuid: string;
  source: CentroNucleo;
  title: string;
  abstract: string;
  url_source: string;
  hash: string;
  published_at: string; // Usar string para datas vindas do JSON é mais seguro
  collected_at: string;
  status: Status;
};

// Placeholder para a URL da API
export const API_BASE_URL = 'http://www.cocen.unicamp.br/noticias/api/v1';
