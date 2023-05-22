<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<title>{data.title}</title>

<h1>{data.title}</h1>
{#if data.thumbnail != null}
  <img src={data.thumbnail} alt={data.title} />
{/if}

<p class="excerpt">{data.excerpt}</p>

{@html data.body}

<style>
  .excerpt {
    font-size: 20px;
  }
</style>
