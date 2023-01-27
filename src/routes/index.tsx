import { component$ } from "@builder.io/qwik";
import { DocumentHead, loader$ } from "@builder.io/qwik-city";
import { Link } from "@builder.io/qwik-city";
import { authenticateUser, useAuth } from "~/auth";

export const childLoader = loader$(authenticateUser);

export default component$(() => {
  const { value } = childLoader.use();
  useAuth(value);

  return (
    <div>
      <Link class="mindblow" href="/flower-1/">
        Blow my mind 🤯
      </Link>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
