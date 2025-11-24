<script lang="ts">
  import { createEventDispatcher, onMount } from 'svelte';
  import { t } from '$lib/i18n'; // Importa o store com as traduções
  import StatusActionButton from '$lib/StatusActionButton.svelte';

  // Função para dar cor aos status (importada de util reutilizável)
  import { getStatusClasses } from '$lib/getStatusClasses';

  export let open: boolean = false;
  export let scrap: any = null;
  const dispatch = createEventDispatcher();

  function close() {
    dispatch('close');
  }

  function onKey(e: KeyboardEvent) {
    if (e.key === 'Escape') close();
  }

  onMount(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('keydown', onKey);
      return () => window.removeEventListener('keydown', onKey);
    }
  });

  // forward events from internal StatusActionButton components
  function forward(e: CustomEvent) {
    // re-dispatch with same type and detail
    dispatch(e.type, e.detail);
  }
</script>

{#if open}
  <div class="fixed inset-0 z-50 flex items-center justify-center">
    <div class="absolute inset-0 bg-black bg-opacity-60" on:click={close} aria-hidden="true"></div>

    <div class="relative bg-gray-800 rounded-lg shadow-xl max-w-3xl w-full mx-4">
      <div class="p-4 border-b border-gray-700 flex justify-between items-start">
        <div>
          <h2 class="text-lg font-bold text-white">{scrap?.title}</h2>
          <p class="text-xs text-gray-400">
            {scrap?.source} 
            <span class="px-3">-</span> {$t.tableLabels.published_at}: {new Date(scrap?.published_at).toLocaleString()}
            <span class="px-3">-</span> {$t.tableLabels.collected_at}: {new Date(scrap?.collected_at).toLocaleString()}
        </p>
        </div>
        <button class="ml-4 text-gray-300 hover:text-white" on:click={close} aria-label="{$t.modal.close}">✕</button>
      </div>

      <div class="p-4 max-h-[60vh] overflow-auto text-gray-200">
        {#if scrap}
          <p class="mb-4">{$t.tableLabels.abstract}: {scrap.abstract}</p>
          {$t.tableLabels.url_source}: <a class="text-blue-400 hover:underline" href={scrap.url_source} target="_blank" rel="noopener noreferrer">{scrap.url_source}</a>
          <pre class="mt-4 text-xs text-gray-400">{$t.tableLabels.hash}: {scrap.hash}</pre>
        {:else}
          <p class="text-gray-400">{$t.modal.noContent}</p>
        {/if}
      </div>

      <div class="p-4 border-t border-gray-700 flex justify-between items-center">
        <div class="text-sm text-gray-400"><span
                class="px-4 py-2 font-bold rounded-full {getStatusClasses(scrap.status)}"
              >{scrap.status}</span>
        </div>
        <div class="flex justify-end gap-2">
          <StatusActionButton
            uuid={scrap?.uuid}
            status={scrap?.status}
            targetStatus={$t.status.ignored}
            label={$t.dashboard.cardIgnoreButton ?? 'Ignorar'}
            btnClass="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500"
            updatingLabel={$t.status.updating}
            on:update-start={forward}
            on:updated={forward}
            on:update-finish={forward}
          />

          <StatusActionButton
            uuid={scrap?.uuid}
            status={scrap?.status}
            targetStatus={$t.status.published}
            label={$t.dashboard.cardPublishButton ?? 'Publicar'}
            btnClass="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
            updatingLabel={$t.status.updating}
            on:update-start={forward}
            on:updated={forward}
            on:update-finish={forward}
          />
          <span class="px-3">&nbsp;</span> 
          <button class="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-500" on:click={close}>{$t.modal.close}</button>
        </div>
      </div>
    </div>
  </div>
{/if}

<style>
  /* pequeno ajuste para o scroll interno */
  pre { white-space: pre-wrap; }
</style>
