<script>
  import FlippableSide from './FlippableSide.svelte';

  let isFlipped = false;
  export let frontText = 'This is the front text';
  export let backText = 'This is the back text';
  const faces = {
    front: 'front',
    back: 'back'
  };
</script>

<style lang='less'>
  @import '../../utilities/containerQueries.less';

  .flippableItem-container {
    perspective: 1500px;

  }

  .flippableItem {
    position: relative;
    transform-style: preserve-3d;
    cursor: pointer;

    transition: transform 0.8s;

    aspect-ratio: 1/1.2;
    text-align: center;
    margin: 5px;


    .on.mobileOnly({
      margin: 25px;
    });

  }

  .flipped {
    transform: rotateY(-180deg);
  }

</style>
<div on:click={()=> isFlipped = !isFlipped} class='flippableItem-container'>
  <div class:flipped={isFlipped} class='flippableItem'>
    <FlippableSide sideFace={faces.front} text={frontText} />
    <FlippableSide sideFace={faces.back} text={backText} />
  </div>
</div>
