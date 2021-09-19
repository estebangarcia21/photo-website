<script>
  export let name;
  export let image;
</script>

<div class="flex flex-col space-y-4">
  <h1 class="uppercase font-semibold text-left">{name}</h1>
  <div class="">
    <img src={image} alt={image} class="h-32" />
  </div>
</div>
