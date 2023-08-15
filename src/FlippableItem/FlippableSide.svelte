<script>
    export let sideFace;
    export let text;
    export let content
</script>

<style lang="less">
  .flippableSide {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden; /* Safari */
    backface-visibility: hidden;

    border-radius: 16px;
    overflow: hidden;
    padding: 20px;

    filter: drop-shadow(2px 2px 2px rgba(128, 128, 128, 0.5));
  }

  .front {
    transform: rotateY(0deg);
    background-color: var(--color-brand-primary-100);
  }

  .back {
    transform: rotateY(180deg);
    background-color: var(--color-brand-primary-80);

  }

  p, h3 {
    color: #273636;
    margin: 0;
  }

</style>

<div class="flippableSide {sideFace}">
    {#if sideFace === 'front'}
        <h3>{text}</h3>
    {:else if sideFace === 'back'}
        <p>{content ?? text}</p>
    {/if}
</div>