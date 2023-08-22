<script>
  import LectureButton from './LectureButton.svelte';

  export let heading = 'Trigger Warning';
  export let text = 'This interaction contains explicit material. Do you wish to proceed?';
  export let okButtonText = 'Yes - Show the interaction';
  export let skipButtonText = 'No - Skip to next lecture';

  let userConsents = false;

  const nextLectureButton = document.getElementById('lecture_complete_button');

  const okClickHandler = () => {
    userConsents = true;
  };

  const skipClickHandler = () => {
    nextLectureButton.click();
  };
</script>


<style lang='less'>
  .HideAndWarn {
    position: relative;
  }

  .cover {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;


    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;

    text-align: center;
    background-color: rgba(255, 255, 255, 0.75);
    backdrop-filter: blur(5px) saturate(0.5);
  }

  .content {
    max-width: 600px;
  }
</style>

<div class='HideAndWarn'>
  <slot />
  {#if !userConsents}
    <div class='cover'>
      <div class='content'>
        <h3>{heading}</h3>
        <p>{text}</p>
        <LectureButton onClick={okClickHandler}>{okButtonText}</LectureButton>
        <LectureButton onClick={skipClickHandler}>{skipButtonText}</LectureButton>
      </div>
    </div>
  {/if}
</div>