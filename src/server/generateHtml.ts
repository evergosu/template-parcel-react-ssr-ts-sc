import cheerio from 'cheerio';
import path from 'path';
import fs from 'fs';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');

const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function generateHtml(
  markup: string,
  styleTags: string,
  state: string,
) {
  const $template = cheerio.load(HTML_TEMPLATE);

  $template('head').append(styleTags);

  $template('#root').html(markup);

  const injectedState = `
    <script>
      window.__PRELOADED_STATE__ = ${state.replace(/</g, '\\u003c')}
    </script>`;

  $template('body').append(injectedState);

  return $template.html();
}
