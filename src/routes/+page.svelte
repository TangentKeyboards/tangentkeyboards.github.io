<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<title>{data.title}</title>

<Navbar />

{@html data.body}

<style>
  body {
  }
</style>
