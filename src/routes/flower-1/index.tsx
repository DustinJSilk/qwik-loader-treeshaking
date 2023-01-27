import { component$ } from "@builder.io/qwik";
import { DocumentHead, Link } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <Link class="mindblow" href="/">
      Blow my mind 🤯
    </Link>
  );
});

export const head: DocumentHead = {
  title: "Qwik Flower",
};
