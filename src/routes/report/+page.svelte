<script lang="ts">
  import { statusList, centrosNucleosList } from '$lib/tipos';  // contem a deficição de listas e constantes, como a API_BASE_URL
  import { t } from '$lib/i18n'; // Importa o store com as traduções
  export let data;   // 'data' vem do +page.server.ts
  import NewsModal from '$lib/NewsModal.svelte';

  let modalOpen = false;
  let modalScrap = null as any;
  
  function openModal(s: any) {
    modalScrap = s;
    modalOpen = true;
  }

  function closeModal(): void {
    modalOpen = false;
    modalScrap = null;
  }
</script>

<div class="space-y-6">
  <h1 class="text-3xl font-bold">{$t.report.pageTitle}</h1>

  <form method="GET" class="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-wrap gap-4 items-end">
    <div class="flex-1 min-w-[150px]">
      <label for="days" class="block text-sm font-medium text-gray-300">
        {$t.report.filterDaysLabel}</label>
      <input
        type="number"
        id="days"
        name="days"
        value={data.filters.days}
        class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm"
      />
    </div>

    <div class="flex-1 min-w-[200px]">
      <label for="status" class="block text-sm font-medium text-gray-300">{$t.report.filterStatusLabel}</label>
      <select
        id="status"
        name="status"
        class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm"
      >
        {#each statusList as s}
          <option value={s} selected={data.filters.status === s}>{s}</option>
        {/each}
      </select>
    </div>

    <button
      type="submit"
      class="h-10 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
    >
      {$t.report.filterButton}
    </button>
  </form>

  <div class="bg-gray-800 rounded-lg shadow-lg overflow-hidden">
    <table class="min-w-full divide-y divide-gray-700">
      <thead class="bg-gray-700">
        <tr>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">{$t.report.tableHeaderSource}</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">{$t.report.tableHeaderTitle}</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">{$t.report.tableHeaderStatus}</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">{$t.report.tableHeaderDate}</th>
          <th class="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">{$t.common.view}</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-gray-700">
        {#if data.scraps.length > 0}
          {#each data.scraps as scrap (scrap.uuid)}
            <tr class="hover:bg-gray-700">
              <td class="px-6 py-4 whitespace-nowrap text-sm text-blue-300">{scrap.source}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-white">{scrap.title}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{scrap.status}</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-400"
                >{new Date(scrap.published_at).toLocaleDateString()}</td
              >
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                <button
                  type="button"
                  class="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-500"
                  on:click={() => openModal(scrap)}
                >
                  {$t.common.view}
                </button>
              </td>
            </tr>
          {/each}
        {:else}
          <tr>
            <td colspan="4" class="px-6 py-10 text-center text-gray-400">{$t.report.emptyTitle}</td>
          </tr>
        {/if}
      </tbody>
    </table>
  </div>
</div>

<NewsModal open={modalOpen} scrap={modalScrap} on:close={closeModal} />
