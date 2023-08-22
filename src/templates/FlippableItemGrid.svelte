<script>
  import ResponsiveGrid from '../components/ResponsiveGrid.svelte';
  import FlippableItem from '../components/FlippableItem/FlippableItem.svelte';

  export let items;
</script>


<ResponsiveGrid>
  {#each items as item, index}
    <FlippableItem {...item} />
  {/each}
</ResponsiveGrid>
