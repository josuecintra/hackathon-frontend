import type { Scrap } from '$lib/tipos';

// Estes são os dados de amostra que a API 'GET /v1/news' retornaria.
export const allMockScraps: Scrap[] = [
  {
    uuid: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    source: 'LUME',
    title: 'LUME anuncia novo ciclo de pesquisas em artes cênicas',
    abstract: 'O LUME (Núcleo Interdisciplinar de Pesquisas Teatrais) detalha seu cronograma de pesquisa e oficinas para o próximo semestre.',
    url_source: 'https://www.cocen.unicamp.br/lume/noticia1',
    hash: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2',
    published_at: '2025-11-10T09:00:00',
    collected_at: '2025-11-17T19:00:00',
    status: 'Nova'
  },
  {
    uuid: 'b8d4c1b0-2e1a-4b9e-b1e2-f0c9a8f7b6d5',
    source: 'LUME',
    title: 'Oficina internacional de Mímíca Corporal no LUME',
    abstract: 'Pesquisadores do LUME recebem convidado internacional para workshop sobre mímica corporal...',
    url_source: 'https://www.cocen.unicamp.br/lume/noticia2',
    hash: 'b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3',
    published_at: '2025-11-12T14:30:00',
    collected_at: '2025-11-17T19:01:00',
    status: 'Nova'
  },
  {
    uuid: 'c9e4f2d0-3b2c-4a1d-b2f3-g1d0b9e8c7a6',
    source: 'LUME',
    title: 'Artigo do LUME é publicado em revista de alto impacto',
    abstract: 'Estudo sobre a presença do ator e a dinâmica do espectador, desenvolvido no núcleo, ganha destaque internacional.',
    url_source: 'https://www.cocen.unicamp.br/lume/noticia3',
    hash: 'c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
    published_at: '2025-11-14T11:00:00',
    collected_at: '2025-11-17T19:02:00',
    status: 'Publicada'
  },
  {
    uuid: 'd0f5g3e1-4c3d-4b2e-c3a4-h2e1c0f9d8b7',
    source: 'LUME',
    title: 'Pesquisa sobre teatro e inclusão social avança',
    abstract: 'Novos resultados da linha de pesquisa de teatro em comunidades são apresentados pelo LUME em simpósio interno.',
    url_source: 'https://www.cocen.unicamp.br/lume/noticia4',
    hash: 'd4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5',
    published_at: '2025-11-15T08:20:00',
    collected_at: '2025-11-17T19:03:00',
    status: 'Ignorada'
  },
  {
    uuid: 'e1g6h4f2-5d4e-4c3f-d4b5-i3f2d1g0e9c8',
    source: 'LUME',
    title: 'LUME 30 anos: Exposição celebra história do núcleo',
    abstract: 'Uma retrospectiva da trajetória do LUME e sua importância para a Unicamp e para o teatro brasileiro.',
    url_source: 'https://www.cocen.unicamp.br/lume/noticia5',
    hash: 'e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6',
    published_at: '2025-11-16T17:00:00',
    collected_at: '2025-11-17T19:04:00',
    status: 'Publicada'
  },
  {
    uuid: 'f2h7i5g3-6e5f-4d4g-e5c6-j4g3e2h1f0d9',
    source: 'CCSNano',
    title: 'CCSNano desenvolve novo material para encapsulamento de fármacos',
    abstract: 'O Centro de Componentes Semicondutores e Nanotecnologia (CCSNano) patenteia método inovador para liberação controlada de medicamentos.',
    url_source: 'https://www.cocen.unicamp.br/ccsnano/noticia1',
    hash: 'f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1',
    published_at: '2025-11-09T10:15:00',
    collected_at: '2025-11-17T19:05:00',
    status: 'Nova'
  },
  {
    uuid: 'g3i8j6h4-7f6g-4e5h-f6d7-k5h4f3i2g1e0',
    source: 'CCSNano',
    title: 'Abertas inscrições para workshop de microscopia no CCSNano',
    abstract: 'Evento focado em técnicas avançadas de microscopia eletrônica de varredura (MEV) e transmissão (MET)...',
    url_source: 'https://www.cocen.unicamp.br/ccsnano/noticia2',
    hash: 'a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2',
    published_at: '2025-11-11T13:00:00',
    collected_at: '2025-11-17T19:06:00',
    status: 'Alterada'
  },
  {
    uuid: 'h4j9k7i5-8g7h-4f6i-g7e8-l6i5g4j3h2f1',
    source: 'CCSNano',
    title: 'Parceria entre CCSNano e indústria visa otimizar painéis solares',
    abstract: 'Pesquisa utiliza nanofilmes para aumentar a eficiência de conversão de energia em células fotovoltaicas...',
    url_source: 'https://www.cocen.unicamp.br/ccsnano/noticia3',
    hash: 'b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3',
    published_at: '2025-11-13T16:45:00',
    collected_at: '2025-11-17T19:07:00',
    status: 'Publicada'
  },
  {
    uuid: 'i5k0l8j6-9h8i-4g7j-h8f9-m7j6h5k4i3g2',
    source: 'CCSNano',
    title: 'Nova sala limpa do CCSNano recebe certificação ISO 5',
    abstract: 'Infraestrutura de ponta expande a capacidade do centro para fabricação de dispositivos micro e nanoeletrônicos.',
    url_source: 'https://www.cocen.unicamp.br/ccsnano/noticia4',
    hash: 'c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4',
    published_at: '2025-11-15T11:10:00',
    collected_at: '2025-11-17T19:08:00',
    status: 'Alterada'
  },
  {
    uuid: 'j6l1m9k7-0i9j-4h8k-i9g0-n8k7i6l5j4h3',
    source: 'CCSNano',
    title: 'Estudo do CCSNano investiga uso de grafeno em biossensores',
    abstract: 'A pesquisa foca no desenvolvimento de biossensores ultra-sensíveis para detecção precoce de marcadores tumorais.',
    url_source: 'https://www.cocen.unicamp.br/ccsnano/noticia5',
    hash: 'd4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5f6a1b2c3d4e5',
    published_at: '2025-11-17T10:00:00',
    collected_at: '2025-11-17T19:09:00',
    status: 'Nova'
  }
];
