<script>
    
    export let campaign;
</script>

<div class="md:container mx-auto md:py-8">
    <h3 class="text-sm font-semibold text-gray-700 mb-3 hidden md:block">Kampanyalar</h3>
    <carousel :settings="settings" :items-to-show="1.5" :breakpoints="breakpoints" :autoplay="3000" :wrap-around="true" class="md:-mx-2">
    {#each campaign as camp}
        <section key={camp.id}>
            <div class=" justify-center items-cente0r md:px-2">
                <img class="object-cover md:rounded w-full" alt="" src={camp.image} />
            </div>
        </section>
    {/each}
    </carousel>
  </div>