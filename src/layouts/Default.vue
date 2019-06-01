<template>
  <div class="layout">
    <header class="header">
      <article>
        <a href="https://www.fabian-marcus.de">
          <strong>Fabian Marcus</strong><br />
          Frontend-Entwickler
        </a>
      </article>
      <article class="call-button">
        <a href="tel:01633060438" alt="Anrufen">Anrufen</a>
      </article>
    </header>
    <slot/>
  </div>
</template>

<static-query>
  query {
    metaData {
      siteName
    }
  }
</static-query>

<style>
  body {
    position: relative;
    margin:0;
    padding:0;
    line-height: 1.5;
    background-color: white;
    font-family: "Titillium Web",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }

  h1, h2, h3, strong {
    font-weight: 600;
  }

  .box {
    max-width: 760px;
    padding: 1rem;
    margin: 0 auto;
  } 

  .header {
    display: flex;
    padding: 1rem;
    max-width: 760px;
    margin: 0 auto;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    z-index: 100;
  }

  .header a {
    color: black;
    text-decoration: none;
  }

  .call-button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid black;
  } 

  @media all and (min-width: 675px) {
    .call-button {
      display: none;
    }
  }

</style>
