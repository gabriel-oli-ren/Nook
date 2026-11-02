document.addEventListener("DOMContentLoaded", function () {
  const navBar = `
<nav class="navbar">
    <div class="navbar-brand">
        <a href="/">
            <img src="../media/nook-logo.png" alt="Nook" class="navbar-logo" />
            <span class="navbar-title">Nook</span>
        </a>
    </div>
    <div class="navbar-links">
        <a href="/" class="navbar-link"><span class="icon" aria-hidden="true"><i class="fas fa-home"></i></span> <p class="navbar-text">Home</p></a>
        <a href="/science" class="navbar-link"><span class="icon" aria-hidden="true"><i class="fas &#x66;&#x61;&#x2d;&#x67;&#x61;&#x6d;&#x65;&#x70;&#x61;&#x64;"></i></span> <p class="navbar-text">&#x47;&#x61;&#x6d;&#x65;&#x73;</p></a>
        <a href="/ai" class="navbar-link"><span class="icon" aria-hidden="true"><i class="fas fa-robot"></i></span> <p class="navbar-text">AI</p></a>
        <a href="/math" class="navbar-link"><span class="icon" aria-hidden="true"><i class="fas fa-grid-2"></i></span> <p class="navbar-text">&#x41;&#x70;&#x70;&#x73;</p></a>
        <a href="/settings" class="navbar-link"><span class="icon" aria-hidden="true"><i class="fas fa-cog"></i></span> <p class="navbar-text">Settings</p></a>
        <a href="/more" class="navbar-link"><span class="icon" aria-hidden="true"><i class="fas fa-plus"></i></span> <p class="navbar-text">More</p></a>
    </div>
</nav>
`;
  const container = document.querySelector(".navbar-container");

  if (container) {
    if (window.location.pathname === "/go") {
      null;
    } else {
      container.innerHTML = navBar;
    }
  }
});
