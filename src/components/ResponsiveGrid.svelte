<script>
  import createStyleVars from '../utilities/createStyleVars';

  export let rgMobileCols = 1;
  export let rgTabletCols = 2;
  export let rgDesktopCols = 3;

  const style = createStyleVars({ rgMobileCols, rgTabletCols, rgDesktopCols });
</script>

<style lang='less'>
  @import '../utilities/containerQueries.less';

  .responsiveGrid {
    display: grid;
    padding: 20px;
    gap: 10px;

    .on.tablet({
      grid-template-columns: repeat(var(--rgTabletCols), 1fr);
      gap: 20px;
    });

    .on.desktop({
      grid-template-columns:  repeat(var(--rgDesktopCols), 1fr);
      gap: 36px;
    });
  }

</style>

<div class='responsiveGrid' {style}>
  <slot />
</div>