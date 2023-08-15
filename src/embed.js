import Embed from "./Embed.svelte";

const div = document.createElement("DIV");
const script = document.currentScript;
script.parentNode.insertBefore(div, script);

const embed = new Embed({
  target: div,
  props: { name: "Embeddable flippable item grid" },
});
