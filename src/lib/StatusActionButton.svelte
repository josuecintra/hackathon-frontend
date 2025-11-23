<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let uuid: string;
  export let status: string; // current status
  export let targetStatus: string; // status to set when clicked
  export let label: string;
  export let btnClass = '';
  export let updatingLabel = '...';
  export let updateFn: ((uuid: string, newStatus: string) => Promise<{ success: boolean; newStatus?: string }>) | undefined = undefined as any;

  const dispatch = createEventDispatcher();
  let busy = false;

  async function defaultUpdateFn(uuid: string, newStatus: string) {
    await new Promise((r) => setTimeout(r, 500));
    return { success: true, newStatus };
  }

  async function doUpdate() {
    // evita duplo clique
    if (busy) return;
    if (status === targetStatus) return;

    busy = true;
    dispatch('update-start', { uuid });

    try {
      const fn = updateFn ?? defaultUpdateFn;
      const res = await fn(uuid, targetStatus);

      if (res?.success) {
        dispatch('updated', { uuid, newStatus: res.newStatus ?? targetStatus });
      }

      dispatch('update-finish', { uuid, success: !!res?.success });
    } catch (e) {
      dispatch('update-finish', { uuid, success: false });
      console.error('StatusActionButton error', e);
    } finally {
      busy = false;
    }
  }
</script>

<button
  type="button"
  on:click={doUpdate}
  disabled={status === targetStatus || busy}
  aria-disabled={status === targetStatus || busy}
  class={btnClass}
  class:opacity-50={status === targetStatus || busy}
  class:cursor-not-allowed={status === targetStatus || busy}
  class:pointer-events-none={status === targetStatus || busy}
>
  {#if busy}
    {updatingLabel}
  {:else}
    {label}
  {/if}
</button>

<style>
  button {
    width: 110px;
  }
</style>
