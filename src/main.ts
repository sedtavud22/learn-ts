import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import "./01-annotations_infer_array/index.ts";
import "./02-object_function/object.ts";
import "./02-object_function/func.ts";
import "./03-alias_interface/alias.ts";
import "./03-alias_interface/interface.ts";
import "./04-tuple_enum/tuple.ts";
import "./04-tuple_enum/enum.ts";
import "./04-tuple_enum/unknown.ts";
import "./04-tuple_enum/never.ts";
import "./05-import_export/tutorial.ts";
import "./06-typeguard/index.ts";
import "./07-generics/index.ts";
import "./08-fetch/index.ts";
import "./09-class/index.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="/tasks" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="/tasks" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
