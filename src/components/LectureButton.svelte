<script>
  export let onClick = () => null;
</script>
<style lang='less'>
  .lectureButton {

    //display: flex;
    //align-items: center;
    //font-size: 16px;
    //border-radius: 8px;

    padding: 8px 12px;
    background-color: grey;
    color: white;
    opacity: 0.3;

    &:not(.disabled) {
      opacity: 1;
      background-color: #2b3636;
    }

    &:not(.disabled):hover {
      background-color: #1f2424;
    }

    &:not(.disabled):active {
      box-shadow: none;
    }

    &.disabled {
      color: #bbb;
    }


    &:not(.disabled):active {
      background-color: #ddd
    }

    span {
      display: block;
    }
  }
</style>
<a on:click={onClick} class='btn lectureButton'><span><slot /></span></a>