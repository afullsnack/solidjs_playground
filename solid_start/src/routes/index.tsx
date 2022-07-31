import { Link } from "solid-app-router";
import { Component, createSignal, JSX } from "solid-js";
import Counter from "~/components/Counter";

export default function Home() {
  const [name, setName] = createSignal("Miracle");
  return (
    <main class="text-center mx-auto text-gray-700 p-4">
      <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">
        Hello {name()}!
      </h1>
      <ChangeName
        clickHandler={(env) => {
          console.log(env, "Something was clicked!");
          setName((_prev) => `Miracle`);
        }}
        value="Miracle"
      />
      <ChangeName
        clickHandler={(env) => {
          console.log(env, "Something was clicked!");
          setName((_prev) => `Jesudara`);
        }}
        value="Jesudara"
      />
      <ChangeName
        clickHandler={(env) => {
          console.log(env, "Something was clicked!");
          setName((_prev) => `Yinka`);
        }}
        value="Yinka"
      />
      <br />
      <Counter />
      <p class="mt-8">
        Visit{" "}
        <Link
          href="https://solidjs.com"
          target="_blank"
          class="text-sky-600 hover:underline"
        >
          solidjs.com
        </Link>{" "}
        to learn how to build Solid apps and make cool shit!.
      </p>
      <p class="my-4">
        <span>Home</span>
        {" - "}
        <Link href="/about" class="text-sky-600 hover:underline">
          About Page
        </Link>{" "}
      </p>
    </main>
  );
}

const ChangeName: Component<{
  clickHandler: JSX.EventHandlerUnion<HTMLButtonElement, MouseEvent>;
  value: string;
}> = ({ clickHandler, value }) => (
  <button
    class="p-3 m-2 rounded-lg border border-slate-500 text-lg text-center text-slate-600 font-normal"
    onClick={clickHandler}
  >
    {value}
  </button>
);
