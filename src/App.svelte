<script>
  import Photo from './Photo.svelte';
</script>

<main>
  <div class="flex flex-row h-screen">
    <div
      class="h-full text-white text-center w-1/2 bg-black flex flex-col justify-center"
    >
      <h1 class="uppercase font-semibold text-4xl">Esteban Garcia</h1>

      <h1 class="mt-4 text-lg uppercase font-medium">
        Black and white photography
      </h1>

      <div class="flex flex-row space-x-10 mx-auto mt-24">
        <div>
          <h1 class="mb-2 mt-4 uppercase font-medium text-left">
            Business Card
          </h1>
          <img src="business_card.png" alt="business card" class="w-96" />
        </div>
      </div>
    </div>

    <div class="w-1/2 bg-gray-50">
      <div class="h-[95%] grid grid-cols-2 grid-rows-2 p-6 gap-6">
        <Photo name="bench" ext="jpg" />
        <Photo name="airplane" ext="jpg" />
        <Photo name="hidden" ext="jpg" />
        <Photo name="trees" ext="jpg" />
      </div>
      <div
        class="flex flex-row justify-center items-center h-16 border-t bg-gray-100"
      >
        <p class="italic text-sm text-gray-600">
          Photographs not my original work. Click on each photo to view their
          original source.
        </p>
      </div>
    </div>
  </div>
</main>

<style global lang="postcss">
  @tailwind base;
  @tailwind variants;
  @tailwind utilities;
</style>
