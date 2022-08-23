<script>
    import * as data from '../api/footer-menu.json';
    $: innerWidth = 0
</script>
<svelte:window bind:innerWidth></svelte:window>
<nav  class="gap-y-3">
    
    {#if innerWidth <= 768}
        <nav>
            <vue-collapsible-panel-group accordion base-color="#ffffff">
                <ul class="grid md:gap-y-2">
                    <vue-collapsible-panel>
                    <div id="title">
                        <h6 class="text-lg text-brand-color">{ data.title }</h6>
                    </div>
                    <div id="content">
                    {#each data as menuData} 
                        <li class="mb-3">
                            <a class="text-sm  text-gray-600 hover:text-primary-brand-color/90" href={menuData.item.url}>{ menuData.item.subTitle }</a>
                        </li>                    
                    {/each}
                    </div>
                    </vue-collapsible-panel>
                </ul>
            </vue-collapsible-panel-group>
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