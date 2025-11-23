// import { API_BASE_URL, centrosNucleosList, statusList } from '$lib/tipos';
import { centrosNucleosList, statusList } from '$lib/tipos';
import type { PageServerLoad, Actions } from './$types';
import { fail } from '@sveltejs/kit';
// import { t } from '$lib/i18n'; // Importar o store


// // Carrega os dados da API (GET /v1/news)
// export const load: PageServerLoad = async ({ url, fetch }) => {
//   // Pega os parâmetros da URL (ex: /?status=Nova)
//   const status = url.searchParams.getAll('status');
//   const source = url.searchParams.get('source');
//   const keyword = url.searchParams.get('keyword');

//   // Constrói a URL da API
//   const apiQuery = new URLSearchParams();
//   status.forEach((s) => apiQuery.append('status', s));
//   if (source) apiQuery.append('source', source);
//   if (keyword) apiQuery.append('q', keyword); // 'q' é o padrão para keyword

//   // O fallback '??' é para o caso de o jornalista querer ver *tudo* de início
//   // A sua API deve tratar o caso de /v1/news sem parâmetros
  // const defaultStatus = [t.report.statusNew, t.report.statusModified];
//   const statusParams = status.length > 0 ? status : defaultStatus;
//   statusParams.forEach((s) => apiQuery.set('status', s));

//   try {
//     const res = await fetch(`${API_BASE_URL}/news?${apiQuery.toString()}`);
//     if (!res.ok) {
//      throw new Error($t.common.apiError + `: ${res.status}`);
//     }
//     const scraps = await res.json();

//     return {
//       scraps, // Passa os dados para o +page.svelte
//       // Passa os filtros atuais para preencher os <select>
//       filters: {
//         status: status.length > 0 ? status : defaultStatus,
//         source: source || '',
//         keyword: keyword || ''
//       }
//     };
//   } catch (error) {
//     console.error(error);
//     return { scraps: [], error: 'Falha ao carregar notícias.' };
//   }
// };

// // Lida com as ações de formulário (PATCH /v1/news/{id})
// export const actions: Actions = {
//   // O nome 'updateStatus' corresponde ao ?/updateStatus no formulário
//   updateStatus: async ({ request, fetch }) => {
//     const data = await request.formData();
//     const uuid = data.get('uuid');
//     const newStatus = data.get('newStatus');

//     if (!uuid || !newStatus || !statusList.includes(newStatus as any)) {
//       return fail(400, { error: 'Dados inválidos.' });
//     }

//     try {
//       // Este é o endpoint PATCH
//       const res = await fetch(`${API_BASE_URL}/news/${uuid}`, {
//         method: 'PATCH',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ status: newStatus })
//       });

//       if (!res.ok) {
//         return fail(res.status, { error: 'Falha ao atualizar o status.' });
//       }

//       // Sucesso! O SvelteKit irá recarregar os dados da página (load) automaticamente.
//       return { success: true };
//     } catch (error) {
//       return fail(500, { error: 'Erro de servidor.' });
//     }
//   }
// };

// Importar os dados MOCK
import { allMockScraps } from '$lib/mockData';

// Carrega os dados (simulando a API)
export const load: PageServerLoad = async ({ url }) => {
  // Pega os parâmetros da URL (ex: /?status=Nova)
  const statusParams = url.searchParams.getAll('status');
  const source = url.searchParams.get('source');
  const keyword = url.searchParams.get('keyword')?.toLowerCase();

  // O padrão é 'Nova' e 'Alterada' se nenhum status for passado
  const defaultStatus = ['Nova', 'Alterada'];
  const activeStatusFilters = statusParams.length > 0 ? statusParams : defaultStatus;

  // ****** Início da Simulação da API ******
  // 1. Simular o fetch
  //    (Não precisamos de try...catch pois os dados são locais)
  let scraps = allMockScraps;

  // 2. Simular a filtragem que a API faria
  
  // Filtro por STATUS
  scraps = scraps.filter(scrap => activeStatusFilters.includes(scrap.status));

  // Filtro por SOURCE
  if (source) {
    scraps = scraps.filter(scrap => scrap.source === source);
  }

  // Filtro por KEYWORD (simples)
  if (keyword) {
    scraps = scraps.filter(
      scrap =>
        scrap.title.toLowerCase().includes(keyword) ||
        scrap.abstract.toLowerCase().includes(keyword)
    );
  }
  // ****** Fim da Simulação da API ******

  /* // O CÓDIGO REAL DA API (agora comentado)
  try {
    const res = await fetch(`${API_BASE_URL}/news?${apiQuery.toString()}`);
    if (!res.ok) {
      throw new Error(`Erro da API: ${res.status}`);
    }
    const scraps = await res.json();
  } catch (error) { ... }
  */

  return {
    scraps: scraps, // Passa os dados simulados/filtrados
    filters: {
      status: activeStatusFilters,
      source: source || '',
      keyword: keyword || ''
    }
  };
};

// Lida com as ações de formulário (simulando o PATCH)
export const actions: Actions = {
  updateStatus: async ({ request }) => {
    const data = await request.formData();
    const uuid = data.get('uuid');
    const newStatus = data.get('newStatus');

    if (!uuid || !newStatus || !statusList.includes(newStatus as any)) {
      return fail(400, { error: 'Dados inválidos.' });
    }

    // ****** Simulação da API ******
    // Nós não vamos realmente alterar os dados do mock (pois o 'load'
    // recarregará os dados originais), mas vamos simular que a API
    // aceitou a requisição.
    console.log(`[Mock] Atualizando status do UUID ${uuid} para ${newStatus}`);
    
    // Simplesmente retorne sucesso. O SvelteKit irá recarregar a
    // função 'load()' automaticamente.
    return { success: true };
    // ****** Fim da Simulação ******

    /*
    // O CÓDIGO REAL DA API (agora comentado)
    try {
      const res = await fetch(`${API_BASE_URL}/news/${uuid}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus })
      });
      if (!res.ok) { ... }
      return { success: true };
    } catch (error) { ... }
    */
  }
};
