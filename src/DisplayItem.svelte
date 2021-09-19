<script>
  export let name;
  export let image;
</script>

<div class="w-max mx-auto">
  <h1 class="mb-2 mt-4 uppercase font-semibold text-left">{name}</h1>
  <img src={image} alt={image} class="inline-block h-full" />
</div>
