const form = document.querySelector("#address-form");
const address = document.querySelector("#address");
const hint = document.querySelector("#hint");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = address.value.trim();
  if (!value) {
    hint.textContent = "Enter a search term or website first.";
    return;
  }

  const looksLikeUrl = /^(https?:\/\/)?([\w-]+\.)+[a-z]{2,}([/:?#].*)?$/i.test(value);
  const destination = looksLikeUrl
    ? (value.startsWith("http") ? value : `https://${value}`)
    : `https://www.google.com/search?q=${encodeURIComponent(value)}`;

  hint.textContent = "Opening in a regular browser tab while the ASTRAL engine is under development.";
  window.open(destination, "_blank", "noopener,noreferrer");
});
