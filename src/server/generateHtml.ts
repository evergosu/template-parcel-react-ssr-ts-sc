import cheerio from 'cheerio';
import path from 'path';
import fs from 'fs';

const templatePath = path.join(__dirname, '..', 'client', 'index.html');

const HTML_TEMPLATE = fs.readFileSync(templatePath).toString();

export default function generateHtml(markup: string, styleTags: string) {
  const $template = cheerio.load(HTML_TEMPLATE);

  $template('head').append(styleTags);

  $template('#root').html(markup);

  return $template.html();
}
