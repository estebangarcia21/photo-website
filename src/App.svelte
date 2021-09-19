<script>
  import Photo from './Photo.svelte';
  import DisplayItem from './DisplayItem.svelte';
  import NavbarItem from './NavbarItem.svelte';
</script>

<main>
  <div class="flex flex-row h-screen">
    <div class="h-full w-1/2 overflow-hidden">
      <div class="h-2 bg-gradient-to-r from-fuchsia-300 to-violet-300" />
      <nav class="h-20 bg-black">
        <ul class="flex flex-row items-center h-full justify-center space-x-20">
          <NavbarItem name="Home" />
          <NavbarItem name="About" />
          <NavbarItem name="Photos" />
          <NavbarItem name="Contract" />
        </ul>
      </nav>
      <div
        class="h-full text-white text-center bg-black flex flex-col justify-center"
      >
        <h1 class="uppercase font-semibold text-4xl">Esteban Garcia</h1>

        <h1 class="mt-4 text-lg uppercase font-medium">
          Black and white photography
        </h1>

        <div class="flex flex-row mx-auto mt-8 h-32 space-x-20">
          <DisplayItem name="Business Card" image="business_card.png" />
          <DisplayItem name="Logo" image="pik.png" />
        </div>

        <h1 class="mt-24 text-gray-600 italic text-sm">
          Business card and logo created using Figma.
        </h1>
      </div>
    </div>

    <div class="w-1/2 bg-gray-50 flex flex-col justify-between">
      <div class="h-[95%] grid grid-cols-2 grid-rows-2 p-6 gap-6">
        <Photo name="bench" ext="jpg" />
        <Photo name="airplane" ext="jpg" />
        <Photo name="hidden" ext="jpg" />
        <Photo name="trees" ext="jpg" />
      </div>
      <div class="flex flex-row justify-center items-center h-16">
        <p class="italic text-sm text-gray-700 font-semibold">
          Photographs not my original work. Click on each photo to view their
          original source.
        </p>
      </div>
      <div class="h-2 bg-gradient-to-l from-blue-300 to-cyan-300" />
    </div>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind variants;
  @tailwind utilities;
</style>
