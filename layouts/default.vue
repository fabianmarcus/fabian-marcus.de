<template>
  <div class="layout">
    <header class="header">
      <div class="header-inner">
        <article class="headline">
          <a class="logo" href="https://www.fabian-marcus.de">
            <img
              src="/fz-logo.png"
              alt="Initialen FM"
              title="Fabian Marcus - Porträt Webseite"
            />
          </a>
          <a href="https://github.com/fabianmarcus" target="_blank" title="zu meinem Github-Account">
            <strong>Fabian Marcus</strong><br />
            <span>Informatiker / Entwickler</span>
          </a>
        </article>
        <article class="call-button">
          <a href="tel:01633060438" alt="Anrufen">Anrufen</a>
        </article>
      </div>
    </header>

    <slot />
  </div>
</template>

<style lang="scss">
  $blau: #243447;

  @keyframes colorchange {
    0% { background-color: white }
    20% { background-color: white }
    35% { background-color: black }
    75% { background-color: black }
    100% { background-color: white }
  }

  // Generelle Body Styles für die gesamte Seite
  body {
    padding:0;
    color: white;
    line-height: 1.5;
    position: relative;
    margin: 4rem 0 0 0;
    background-color: $blau;
    font-family: "Titillium Web", Roboto, "Helvetica Neue", Arial, sans-serif;
  }

  // Generelle Link-Styles für die gesamte Seite
  a {
    color: white;
    text-decoration: none;
  }
  a:hover,
  a:active {
    color: white;
    text-decoration: underline;
  }

  h1, h2, h3, strong {
    font-weight: 600;
  }

  // Farbwechselnde Linie unter Überschriften
  h2 + hr,
  h3 + hr {
    display: inline-block;
    padding: 0;
    margin: 0;
    margin-top: -0.5rem;
    width: 250px;
    height: 2px;
    border: none;
    outline: none;
    vertical-align: top;
    background-color: white;
    animation: colorchange 15s infinite;

    &.white {
      color: white;
    }
    &.black {
      color: black;
    }
  }

  // Die einzelnen #-Abschnitte
  .box {
    max-width: 760px;
    padding: 1rem;
    margin: 0 auto;
  }

  // Der Header (sticky)
  .header {
    width: 100%;
    z-index: 100;
    position: fixed;
    top: 0; left: 0;
    background-color: $blau;
    border-bottom: 2px solid black;
  }

  .header-inner {
    display: flex;
    padding: 0.5rem 0.75rem;
    max-width: 760px;
    margin: 0 auto;
    color: white;
    align-items: center;
    justify-content: space-between;

    > article {
      display: flex;
      align-items: center;
    }

    a {
      color: white;
      display: inline-block;
      text-decoration: none;
    }

    // Etwas Abstand zw. Headline und Logo
    > .headline a {
      margin-right: 0.5rem;
    }

    @media all and (max-width: 400px) {
      padding: 0.5rem 0.5rem;
    }
    @media all and (min-width: 675px) {
      padding: 0.5rem 1rem;
    }
  }

  .header a.logo > img {
    display: inline-block;
    vertical-align: middle;
    height: 3rem;
  }

  // Der "Anruf"-Button, der nur auf mobile erscheint
  .call-button {
    > a {
      padding: 0.5rem 1rem;
      text-decoration: none;
      color: white;
      border-radius: 8px;
      background-color: black;
      border: 1px solid black;
    }
    > a:active,
    > a:hover {
      color: white;
      background-color: $blau;
    }
  }

  @media all and (min-width: 675px) {
    .call-button {
      display: none;
    }
  }

</style>
