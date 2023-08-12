<script>
    import Heading from "./Heading.svelte";

    let props = {
        name: 'Alex'
    }
</script>

<style lang="less">

  .main {
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

</style>

<div class='main'>
    <Heading {...props}/>
</div>
