<script>
    export let name = 'Alex Wright';
    let isCurrent = true
</script>

<style lang="less">
  h1 {
    color: purple;
    font-family: 'Comic Sans MS', cursive;
    font-size: 2em;

    .named {
      color: red;
    }

    &.selected {
      color: green;
    }
  }
</style>

<h1 class:selected={isCurrent}>Hello <span class="named">{name}</span>!</h1>
