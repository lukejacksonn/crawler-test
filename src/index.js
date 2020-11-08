import {
  createElement as h,
  render,
} from 'https://unpkg.com/preact@latest?module';
import {
  useEffect,
  useState,
} from 'https://unpkg.com/preact@10.5.5/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm@latest?module';

window.html = htm.bind(h);

const App = () => {
  // Fetching dynamic data
  const [meta, setMeta] = useState({});
  useEffect(() => {
    fetch('https://api.github.com/repos/JoviDeCroock/crawler-test')
      .then((res) => res.json())
      .then(setMeta);
  }, []);

  // Rendering some static then dynamic data
  return html`
    <head>
      <meta charset="utf-8" />
      <title>Testing Crawlers</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="description" content="calling all crawlers" />
      <meta twitter:title="crawler-test" />
      <meta og:title="crawler-test" />
    </head>
    <body>
      <header>
        <h1>This is a nice website yes!</h1>
        <p>
          We are testing whether or not a Google/FB-crawler will correctly spot
          this website!
        </p>
      </header>
      <main>
        <h1>Repo: ${meta.name}</h1>
        <img
          width="180"
          height="180"
          alt="Photo of ${meta && meta.owner && meta.owner.login}"
          src=${meta && meta.owner && meta.owner.avatar_url}
        />
        <p>ID: <b>${meta.id}</b></p>
        <p>Forks: <b>${meta.forks}</b></p>
        <p>Stars: <b>${meta.stargazers_count}</b></p>
      </main>
      <footer><h1>Thanks for coming</h1></footer>
    </body>
  `;
};

render(html`<${App} />`, document.documentElement);
