<template>
  <div class="layout">
    <header class="header">
      <div class="header__inner">
        <article>
          <a href="https://www.fabian-marcus.de">
            <strong>Fabian Marcus</strong><br />
            Informatiker / Entwickler
          </a>
        </article>
        <article class="call-button">
          <a href="tel:01633060438" alt="Anrufen">Anrufen</a>
        </article>
      </div>
    </header>
    <nuxt />
  </div>
</template>

<style lang="scss">
  @keyframes colorchange {
    0% { background-color: white }
    20% { background-color: white }
    35% { background-color: black }
    75% { background-color: black } 
    100% { background-color: white }
  }

  body {
    position: relative;
    margin: 4rem 0 0 0;
    padding:0;
    line-height: 1.5;
    color: white;
    background-color: #243447;
    font-family: "Titillium Web",Roboto,"Helvetica Neue",Arial,sans-serif;
  }

  a:hover,
  a:active {
    text-decoration: none;
  }

  h1, h2, h3, strong {
    font-weight: 600;
  }

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
    animation: colorchange 20s infinite;

    &.white {
      color: white;
    }
    &.black {
      color: black;
    }
  }

  .box {
    max-width: 760px;
    padding: 1rem;
    margin: 0 auto;
  } 

  .header {
    position: fixed;
    top: 0; left: 0;
    width: 100%;
    z-index: 100;
    border-bottom: 2px solid black;
    background-color: #243447;
  }
  .header__inner {
    display: flex;
    padding: 0.5rem 1rem;
    max-width: 760px;
    margin: 0 auto;
    color: white;
    align-items: center;
    justify-content: space-between;
  }

  .header a {
    color: white;
    text-decoration: none;
  }

  .call-button {
    padding: 0.5rem 1rem;
    border-radius: 8px;
    border: 1px solid white;
  } 

  @media all and (min-width: 675px) {
    .call-button {
      display: none;
    }
  }

</style>
