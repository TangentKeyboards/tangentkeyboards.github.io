<script lang="ts">
  import Navbar from "../components/Navbar.svelte";
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<title>{data.title}</title>

<section class="page-header container">
  <h1 class="headline-1">{data.title}</h1>
</section>

<main class="richtext">
  {@html data.body}
</main>

<style>
  .page-header {
    padding: 20vh 0;
  }

  main {
    padding: fluid(2rem, 5rem);

    /* shift entire box to the right, so it meets the rightmost edge of the screen */
    margin-right: calc(-1 * var(--container-padding));
    padding-right: calc(var(--container-padding) + 5rem);

    border-radius: 24px 0 0 0;
    background-color: var(--color-on-background);
    color: var(--color-background);
  }
</style>
