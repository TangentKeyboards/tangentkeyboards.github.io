<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>

<title>{data.title}</title>

{@html data.body}
