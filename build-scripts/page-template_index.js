const github = require("./github-api.js");

const defaultMeta = {
  lang: "en",
  title: "A Page",
  stylesheets: ["./styles.css"],
  scripts: ["./js/main.js", "./js/prism.js"],
  charset: "utf-8",
  description: "This is a page",
  keywords: "page, simple",
  author: "Andrey Ponomarev",
  favicon: "./img/favicon.png",
  viewport: "width=device-width, initial-scale=1",
  extra: [],
};

async function generatePage(pageContent, pageMeta = defaultMeta) {
  const lastUpdate = await github.getGithubData();

  const lang = pageMeta.lang || defaultMeta.lang;
  const title = pageMeta.title || defaultMeta.title;
  const charset = pageMeta.charset || defaultMeta.charset;
  const description = pageMeta.description || defaultMeta.description;
  const keywords = pageMeta.keywords || defaultMeta.keywords;
  const author = pageMeta.author || defaultMeta.author;

  const extra = pageMeta.hasOwnProperty("extra")
    ? pageMeta.extra.length
      ? pageMeta.extra.map((value) => `<meta ${value}>`)
      : ""
    : "";

  const stylesheets = (() => {
    if (pageMeta.hasOwnProperty("stylesheets")) {
      if (pageMeta.stylesheets.length) {
        return pageMeta.stylesheets
          .map((value) => `<link rel="stylesheet" href="${value}">`)
          .join("");
      } else {
        return "";
      }
    } else {
      return defaultMeta.stylesheets
        .map((value) => `<link rel="stylesheet" href="${value}">`)
        .join("");
    }
  })();

  const scripts = pageMeta.hasOwnProperty("scripts")
    ? pageMeta.scripts.length
      ? pageMeta.scripts
          .map((value) => `<script src="${value}"></script>`)
          .join("")
      : ""
    : defaultMeta.scripts
        .map((value) => `<script src="${value}"></script>`)
        .join("");

  const icon = pageMeta.favicon || defaultMeta.favicon;

  const html0 = `<!DOCTYPE html>
<html lang="${lang}" class="md-page">
  <head>
  <title>${title}</title>
  <meta charset="${charset}">
  <meta name="description" content="${description}">
  <meta name="keywords" content="${keywords}">
  <meta name="author" content="${author}">
  ${extra}
  ${stylesheets}
  ${scripts}
  <link rel="icon" type="image/png" href="${icon}">
  </head>
  <body class="md-page__body">
    <header class="md-header">
        <nav class="md-nav">
          <a href="http://andreyponomarev.ru">HOME</a>
        </nav>
    </header>
    <main class="md-main">
      ${md.render(pageContent)}
    </main>
    <footer class="md-footer">
      <div class="gradient-bottom"></div>
      <div>${lastUpdate.date} ${lastUpdate.month} ${lastUpdate.year}</div>
    </footer>
  </body>
</html>`;

  const html = `<!DOCTYPE html>
<html class="page" lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta
      name="viewport"
      content="width=device-width,initial-scale=1,viewport-fit=cover,shrink-to-fit=no"
    />
    <meta name="format-detection" content="telephone=no" />
    <meta name="format-detection" content="date=no" />
    <meta name="format-detection" content="address=no" />
    <meta name="format-detection" content="email=no" />
    <meta name="description" content="Andrey Ponomarev Portfolio" />
    <meta
      name="keywords"
      content="web development, backend, frontend, databases, javascript, php"
    />
    <meta name="author" content="Andrey Ponomarev" />

    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="./apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="./favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="./favicon-16x16.png"
    />
    <link rel="manifest" href="./site.webmanifest" />
    <link rel="mask-icon" href="./safari-pinned-tab.svg" color="#5bbad5" />
    <meta name="msapplication-TileColor" content="#da532c" />
    <meta name="theme-color" content="#ffffff" />

    <link rel="icon" type="image/png" href="./favicon.png" />

    <title>Andrey Ponomarev</title>

    <link href="./main.css" rel="stylesheet" />
    <link
      href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,400;0,700;0,800;1,400&display=swap"
      rel="stylesheet"
    />
  </head>
  <body class="page__body">
    <!-- HEADER -->
    <header class="header">
      <div class="my-photo">
        <img
          src="https://sun9-52.userapi.com/c850520/v850520824/148c19/BC4V9wrvBvo.jpg"
          class="my-photo__img"
        />
      </div>

      <nav class="nav">
        <a
          href="mailto:info@andreyponomarev.ru"
          id="header"
          class="header__link"
          >info@andreyponomarev.ru</a
        >
      </nav>
    </header>

    <!-- MAIN -->
    <main class="main">
      <!-- PROJECTS -->
      <div class="projects">
        <div class="col-header col-header_type_projects">
          <a id="projects">PROJECTS</a>
        </div>

        <div class="projects__content">
          <div class="projects__row">
            <span class="projects__title">HBS</span>
            <p class="projects__tags">
              <span class="projects__tag">JavaScript [Node.js]</span>
              <span class="projects__tag">PostgreSQL</span>
              <span class="projects__tag">Redis</span>
            </p>
            <p class="projects__about">Hotel booking system</p>
            <div class="buttons-col">
              <a href="#" class="button">Github</a>
              <a href="#" class="button">Demo</a>
            </div>
          </div>

          <div class="projects__row">
            <span class="projects__title">SleepLog</span>
            <p class="projects__tags">
              <span class="projects__tag">JavaScript [Node.js]</span>
              <span class="projects__tag">PostgreSQL</span>
              <span class="projects__tag">Redis</span>
            </p>
            <p class="projects__about">
              Tracking and visualizing sleep schedule
            </p>
            <div class="buttons-col">
              <a href="#" class="button">Github</a>
              <a href="#" class="button">Demo</a>
            </div>
          </div>

          <div class="projects__row">
            <span class="projects__title">Biscuit Components</span>
            <p class="projects__tags">
              <span class="projects__tag">SASS</span>
              <span class="projects__tag">CSS</span>
              <span class="projects__tag">Webpack</span>
              <span class="projects__tag">BEM</span>
              <span class="projects__tag">Pug</span>
            </p>
            <p class="projects__about">
              Biscuit is a UI components/code snippets library for developing
              websites based on BEM methodology and a mobile-first approach.
            </p>
            <div class="buttons-col">
              <a
                href="https://github.com/ponomarevandrey/biscuit-components"
                class="button"
                >Github</a
              >
              <a
                href="https://andreyponomarev.ru/biscuit-components/"
                class="button"
                >Demo</a
              >
            </div>
          </div>

          <div class="projects__row">
            <span class="projects__title">Automation Scripts</span>
            <p class="projects__tags">
              <span class="projects__tag">Shell</span>
              <span class="projects__tag">Linux</span>
            </p>
            <p class="projects__about">—</p>
            <div class="buttons-col">
              <a
                href="https://github.com/ponomarevandrey/automation-scripts"
                class="button"
                >Github</a
              >
            </div>
          </div>

          <div class="projects__row">
            <span class="projects__title">MusicBox</span>
            <p class="projects__tags">
              <span class="projects__tag">PHP</span>
              <span class="projects__tag">React.js</span>
              <span class="projects__tag">JavaScript</span>
              <span class="projects__tag">REST API</span>
            </p>
            <p class="projects__about">Self-hosted music manager</p>
            <div class="buttons-col">
              <a href="#" class="button">Github</a>
              <a href="#" class="button">Demo</a>
            </div>
          </div>

          <div class="projects__row">
            <span class="projects__title">typeTest</span>
            <p class="projects__tags">
              <span class="projects__tag">JavaScript</span>
              <span class="projects__tag">React.js</span>
              <span class="projects__tag">JavaScript</span>
              <span class="projects__tag">REST API</span>
            </p>
            <p class="projects__about">
              Application for testing type design students
            </p>
            <div class="buttons-col">
              <a href="#" class="button">Github</a>
              <a href="#" class="button">Demo</a>
            </div>
          </div>
        </div>
      </div>

      <!-- CONTENT -->
      <div class="various">
        <!-- ARTICLES -->
        <div class="various__articles">
          <div class="col-header col-header_type_articles">
            <a id="articles">ARTICLES</a>
          </div>
          <div class="various__articles">
            <div class="text various__row">
              <a href="#" class="link">Asynchronous programming fundamentals</a>
              <div class="various__updated">
                <img
                  src="./img/icon_refresh.svg"
                  alt="Biscuit Logo"
                  class="img-svg"
                />
                <span class="update_time">12 Sep 2020</span>
              </div>
            </div>

            <div class="text various__row">
              <a href="#" class="link">SOLID in javascript</a>
              <div class="various__updated">
                <img
                  src="./img/icon_refresh.svg"
                  alt="Biscuit Logo"
                  class="img-svg"
                />
                <span class="update_time">26 Dec 2020</span>
              </div>
            </div>

            <div class="text various__row">
              <a href="#" class="link">
                Setting up local development environment in Docker</a
              >
              <div class="various__updated">
                <img
                  src="./img/icon_refresh.svg"
                  alt="Biscuit Logo"
                  class="img-svg"
                />
                <span class="update_time">03 Jan 2020</span>
              </div>
            </div>

            <div class="text various__row">
              <a href="#" class="link">SQL Query Performance Benchmark</a>
              <div class="various__updated">
                <img
                  src="./img/icon_refresh.svg"
                  alt="Biscuit Logo"
                  class="img-svg"
                />
                <span class="update_time">30 Aug 2020</span>
              </div>
            </div>

            <div class="text various__row">
              <a href="#" class="link"
                >How PHP executes code vs how Node.js executes code</a
              >
              <div class="various__updated">
                <img
                  src="./img/icon_refresh.svg"
                  alt="Biscuit Logo"
                  class="img-svg"
                />
                <span class="update_time">01 Jul 2020</span>
              </div>
            </div>
          </div>
        </div>

        <!-- ABOUT -->
        <div class="various__about">
          <div class="col-header col-header_type_about">
            <a id="about">ABOUT</a>
          </div>
          <div class="various__content">
            <p class="text text_display_block">
              Hi, my name is Andrey, I'm a backend developer.
            </p>
            <p class="text text_display_block">
              I wrote my first lines of HTML and CSS back in 2003. Then,
              gradually I got interested in programming but decided to choose
              the career path of web-designer. The period from the middle of
              2000s to almost the middle of 2010s I've spent working as an
              independent contractor, designing, coding and maintaining
              WordPress and Bitrix websites. Here're a few of my works from that
              period: <a href="./img/003.png" class="link text">one</a>,
              <a href="./img/002.jpg" class="link text">two</a>.
            </p>
            <p class="text text_display_block">
              Eventually, I got burned out and quit IT for several years. This
              break helped me to "reboot" my brain and recharge mentally. In
              2018 I finally ordered my thoughts and started with a clean slate,
              returning to the thing I really love and care about - programming.
            </p>
            <p class="text text_display_block">
              Today I do mainly web application development for small and
              mid-sized businesses.
            </p>
          </div>
        </div>
      </div>
    </main>

    <div class="gradient"></div>

    <!-- FOOTER -->
    <footer class="footer text">
      <!-- Place this tag where you want the button to render. -->
      <a
        class="github-button"
        href="https://github.com/ponomarevandrey"
        data-color-scheme="no-preference: dark; light: dark; dark: dark;"
        data-size="large"
        aria-label="Follow @ponomarevandrey on GitHub"
        >Follow @ponomarevandrey</a
      >
      <span class="footer__year"> © 1989 </span>
    </footer>
    <!-- Place this tag in your head or just before your close body tag. -->
    <script async defer src="https://buttons.github.io/buttons.js"></script>
  </body>
</html>`;

  return html;
}

module.exports.generatePage = generatePage;
