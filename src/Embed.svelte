<script>
    import FlippableItem from "./FlippableItem/FlippableItem.svelte";
    import ResponsiveGrid from "./ResponsiveGrid/ResponsiveGrid.svelte";
</script>

<div class='main'>
    <ResponsiveGrid>
        <FlippableItem/>
        <FlippableItem frontText="Hi" backText="bye"/>
    </ResponsiveGrid>
</div>
