<script>
  export let name;
  export let ext;

  export const attributionMap = {
    airplane:
      'https://www.pexels.com/photo/grayscale-photo-of-airplane-1010079/',
    bench:
      'https://www.pexels.com/photo/young-happy-woman-smiling-on-bench-6011998/',
    trees: 'https://www.pexels.com/photo/trees-1061623/',
    hidden:
      'https://www.pexels.com/photo/person-walking-on-stairs-in-greyscale-photograph-3048527/'
  };
</script>

<a href={attributionMap[name] || '/'} class="mx-auto w-max">
  <img
    src={`images/${name}.${ext}`}
    alt={name}
    class="h-full border shadow-2xl rounded-lg transition hover:scale-[.97] duration-300"
  />
</a>
