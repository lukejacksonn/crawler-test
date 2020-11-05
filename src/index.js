  
import { createElement as h, render } from 'https://unpkg.com/preact@latest?module';
import { useEffect } from 'https://unpkg.com/preact@10.5.5/hooks/dist/hooks.module.js?module';
import htm from 'https://unpkg.com/htm@latest?module';

window.html = htm.bind(h);

const App = () => {
  useEffect(() => {
    document.title = 'Is this working?';
    const twitterTag = document.createElement('meta');
    twitterTag.setAttribute('twitter:title', 'crawler-test');
    document.head.appendChild(twitterTag)

    const facebookTag = document.createElement('meta');
    facebookTag.setAttribute('og:title', 'crawler-test');
    document.head.appendChild(facebookTag)

    const descriptionTag = document.createElement('meta');
    descriptionTag.setAttribute('description', 'testing crawlers');
    document.head.appendChild(descriptionTag)
  }, [])
  return html`
    <div>
      <h1>This is a nice website yes!</h1>
      <p>
        We are testing whether or not a Google/FB-crawler will correctly spot this website.!
      </p>
    </div>
  `
}


render(
  html`<${App} />`,
  document.body,
);