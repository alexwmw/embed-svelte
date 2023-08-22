<script>
  import HideAndWarn from './components/HideAndWarn.svelte';
  import FlippableItemGrid from './templates/FlippableItemGrid.svelte';

  const items = [
    { frontText: 'front1', backText: 'back1' },
    { frontText: 'front2', backText: 'back2' },
    { frontText: 'front3', backText: 'back3' }
  ];
</script>
<style lang='less'>
  .main {
    container-type: inline-size;
    container-name: main;
  }
</style>

<div class='main'>
  <p>Here is some intro text</p>
  <HideAndWarn>
    <FlippableItemGrid {items} />
  </HideAndWarn>
</div>
