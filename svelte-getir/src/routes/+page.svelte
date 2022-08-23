<script>
    import * as data from '../api/footer-menu.json';
    $: innerWidth = 0
    import Campaigns from '$lib/Campaigns.svelte';
	import MobileApp from '$lib/MobileApp.svelte';
    import Footer from '$lib/Footer.svelte';
   
    /** @type {import('./$types').PageData} */
    export let pageData;

</script>
<svelte:window bind:innerWidth></svelte:window>
<nav  class="gap-y-3">
    
    {#if innerWidth <= 768}
        <nav>
            <div style:color="#ffffff">
                <ul class="grid md:gap-y-2">
                    <div>
                        {#each data as menuData} 
                            <div id="title">
                                <h6 class="text-lg text-brand-color">{ menuData.title }</h6>
                            </div>
                            <div id="content">
                            
                                <li class="mb-3">
                                    <a class="text-sm  text-gray-600 hover:text-primary-brand-color/90" href={menuData.item.url}>{ menuData.item.subTitle }</a>
                                </li>                    
                            
                            </div>
                        {/each}
                    </div>
                </ul>
            </div>
        </nav>
    {:else}    
        <nav>
            <h6 class="text-lg text-brand-color">{ data.title }</h6>
            <ul class="grid gap-y-1 md:gap-y-2">
            {#each data as menuData}
                <li bind:this={menuData.item}>
                <a class="text-sm text-gray-600 hover:text-primary-brand-color/90" href={menuData.item.url}>{ menuData.item.subTitle }</a>
                </li>
            {/each}
            </ul>
        </nav>
    {/if}
</nav>

<svelte:head>
    <title>{data.title}</title>
</svelte:head>
<main>
    {#if innerWidth <= 768}
        <Campaigns/>
    {/if}
    <HeroSection />
    <Categories />
    {#if innerWidth > 768}
        <Campaigns />
    {/if}
    <Favorites />
    <MobileApp />
    <Cards />
    <Footer />
</main>