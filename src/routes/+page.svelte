<script lang="ts">
  import { statusList, centrosNucleosList } from '$lib/tipos';
  import { enhance } from '$app/forms';
  import { t } from '$lib/i18n'; // Importar o store
  import StatusActionButton from '$lib/StatusActionButton.svelte';
  import NewsModal from '$lib/NewsModal.svelte';

  // 'data' vem do +page.server.ts
  export let data;

  // Função para dar cor aos status (importada de util reutilizável)
  import { getStatusClasses } from '$lib/getStatusClasses';

// cópia local dos scraps para permitir mutação no cliente
let scraps = data.scraps.map((s) => ({ ...s, updating: false }));

// guarda a referência do último `data.scraps` sincronizado.
let _lastDataScraps = data.scraps;

// sincroniza a cópia local apenas quando `data.scraps` for um array novo (por referência).
// assim evita sobrescrever mudanças locais (status/updating) feitas pelo cliente.
$: if (data?.scraps && data.scraps !== _lastDataScraps) {
  _lastDataScraps = data.scraps;
  const updatingMap = new Map(scraps.map((s) => [s.uuid, s.updating]));
  scraps = data.scraps.map((s) => ({ ...s, updating: updatingMap.get(s.uuid) ?? false }));
}

function setUpdating(uuid: string, updating: boolean) {
  const idx = scraps.findIndex((s) => s.uuid === uuid);
  if (idx === -1) return;
  scraps[idx] = { ...scraps[idx], updating };
}

function setStatus(uuid: string, newStatus: string) {
  const idx = scraps.findIndex((s) => s.uuid === uuid);
  if (idx === -1) return;
  scraps[idx] = { ...scraps[idx], status: newStatus as any };
}

// modal para visualizar a notícia completa
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
  <form method="GET" class="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-wrap gap-4 items-end">
    <h2 class="text-xl font-semibold w-full">{$t.dashboard.filterTitle}</h2>

    <div class="flex-1 min-w-[200px]">
      <label for="keyword" class="block text-sm font-medium text-gray-300">{$t.dashboard.filterKeywordLabel}</label>
      <input
        type="search"
        id="keyword"
        name="keyword"
        value={data.filters.keyword}
        class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      />
    </div>

    <div class="flex-1 min-w-[200px]">
      <label for="status" class="block text-sm font-medium text-gray-300">{$t.dashboard.filterStatusLabel}</label>
      <select
        multiple
        id="status"
        name="status"
        class="mt-1 block w-full h-24 bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        {#each statusList as s}
          <option value={s} selected={data.filters.status.includes(s)}>{s}</option>
        {/each}
      </select>
    </div>

    <div class="flex-1 min-w-[200px]">
      <label for="source" class="block text-sm font-medium text-gray-300">{$t.dashboard.filterSourceLabel}</label>
      <select
        id="source"
        name="source"
        class="mt-1 block w-full bg-gray-700 border-gray-600 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">{$t.common.all}</option>
        {#each centrosNucleosList as cn}
          <option value={cn} selected={data.filters.source === cn}>{cn}</option>
        {/each}
      </select>
    </div>

    <button
      type="submit"
      class="h-10 px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
    >{$t.dashboard.filterButton}</button>
  </form>

  <div class="space-y-4">
    {#if scraps.length > 0}
      {#each scraps as scrap (scrap.uuid)}
        <article class="bg-gray-800 shadow-lg rounded-lg overflow-hidden flex">
          <div class="p-5 flex-1">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-semibold text-blue-300">{scrap.source}</span>
              <span
                class="px-2 py-0.5 text-xs font-bold rounded-full {getStatusClasses(scrap.status)}"
              >
                {scrap.status}
              </span>
            </div>
            <h3 class="text-lg font-bold text-white mb-2">{scrap.title}</h3>
            <p class="text-gray-400 text-sm mb-4">
              {scrap.abstract || $t.dashboard.cardNoAbstract}
            </p>
            <div class="flex justify-between items-center">
              <span class="text-xs text-gray-500">
                {$t.dashboard.cardPublishedAt} {new Date(scrap.published_at).toLocaleDateString()}
              </span>
              <a
                href={scrap.url_source}
                target="_blank"
                rel="noopener noreferrer"
                class="text-sm text-blue-400 hover:underline"
              >
                {$t.dashboard.cardSourceLink}
              </a>
            </div>
          </div>

            <div class="bg-gray-700 p-4 flex flex-col justify-center space-y-3">
              <button
                type="button"
                class="w-full px-3 py-2 text-sm font-medium text-white bg-blue-500 rounded-md hover:bg-blue-400"
                on:click={() => openModal(scrap)}
              >
                {$t.common.view}
              </button>
              <form action="?/updateStatus" method="POST">
                <input type="hidden" name="uuid" value={scrap.uuid} />
                <input type="hidden" name="newStatus" value={$t.status.ignored} />

                <StatusActionButton
                  uuid={scrap.uuid}
                  status={scrap.status}
                  targetStatus={$t.status.ignored}
                  label={$t.dashboard.cardIgnoreButton}
                  btnClass="w-full px-3 py-2 text-sm font-medium text-white bg-gray-600 rounded-md hover:bg-gray-500"
                  updatingLabel={$t.status.updating}
                  on:update-start={(e) => setUpdating(e.detail.uuid, true)}
                  on:updated={(e) => setStatus(e.detail.uuid, e.detail.newStatus)}
                  on:update-finish={(e) => setUpdating(e.detail.uuid, false)}
                />
              </form>

              <form action="?/updateStatus" method="POST">
                <input type="hidden" name="uuid" value={scrap.uuid} />
                <input type="hidden" name="newStatus" value={$t.status.published} />

                <StatusActionButton
                  uuid={scrap.uuid}
                  status={scrap.status}
                  targetStatus={$t.status.published}
                  label={$t.dashboard.cardPublishButton}
                  btnClass="w-full px-3 py-2 text-sm font-medium text-white bg-green-600 rounded-md hover:bg-green-500"
                  updatingLabel={$t.status.updating}
                  on:update-start={(e) => setUpdating(e.detail.uuid, true)}
                  on:updated={(e) => setStatus(e.detail.uuid, e.detail.newStatus)}
                  on:update-finish={(e) => setUpdating(e.detail.uuid, false)}
                />
              </form>
            </div>
        </article>
      {/each}
    {:else}
      <div class="text-center p-10 bg-gray-800 rounded-lg">
        <h3 class="text-xl font-semibold">{$t.dashboard.emptyTitle}</h3>
        <p class="text-gray-400">{$t.dashboard.emptySubtitle}</p>
      </div>
    {/if}
  </div>
  <NewsModal
    open={modalOpen}
    scrap={modalScrap}
    on:close={closeModal}
    on:update-start={(e: CustomEvent) => setUpdating(e.detail.uuid, true)}
    on:updated={(e: CustomEvent) => setStatus(e.detail.uuid, e.detail.newStatus)}
    on:update-finish={(e: CustomEvent) => setUpdating(e.detail.uuid, false)}
  />
</div>
