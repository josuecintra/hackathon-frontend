<script lang="ts">
	import '../app.css'; // Onde o Tailwind é importado
  import { t } from '$lib/i18n'; // Store de tradução
	import './layout.css';
	import favicon from '$lib/assets/logo-cocen.png';
  import logo from '$lib/assets/logo-cocen.png';

	let { children } = $props();
</script>

<svelte:head>
  <title>{$t.nav.title} :: COCEN</title>
  <!-- <meta name="description" content="{$t.meta.description}" /> -->
	<link rel="icon" href={favicon} />
</svelte:head>

<div class="min-h-screen bg-gray-900 text-gray-100">
  <nav class="bg-gray-800 shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <h1 class="text-xl font-bold text-white"><img src="{logo}" alt="Logo" class="inline-block h-8 mr-2" /> {$t.nav.title}</h1>
      <div class="space-x-4">
        <a href="/" class="hover:text-blue-400">{$t.nav.dashboard}</a>
        <a href="/report" class="hover:text-blue-400">{$t.nav.reports}</a>
      </div>
    </div>
  </nav>

  <main class="container mx-auto p-4">
    {@render children()}
  </main>
</div>

