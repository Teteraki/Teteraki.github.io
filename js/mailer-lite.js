// MailerLite Universal

(function (w, d, e, u, f, l, n) {
  (w[f] =
    w[f] ||
    function () {
      (w[f].q = w[f].q || []).push(arguments);
    }),
    (l = d.createElement(e)),
    (l.async = 1),
    (l.src = u),
    (n = d.getElementsByTagName(e)[0]),
    n.parentNode.insertBefore(l, n);
})(
  window,
  document,
  "script",
  "https://assets.mailerlite.com/js/universal.js",
  "ml"
);
ml("account", "1437495");

// Newsletter popup.
window.addEventListener("load", () => {
  const hasSignedUp = localStorage.getItem("newsletterSignedUp");
  const noThanksClicked = sessionStorage.getItem("newsletterNoThanks");

  // Only show the popup if user hasn't signed up and didn't already say "no thanks" this session
  if (!hasSignedUp && !noThanksClicked) {
    document.getElementById("newsletterModal").classList.remove("hidden");
  }

  // Handle "No thanks" button
  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("newsletterModal").classList.add("hidden");
    // Mark that they said "no thanks" for this session
    sessionStorage.setItem("newsletterNoThanks", "true");
  });

  // Handle "Already signed up" button
  document
    .getElementById("alreadySignedUpBtn")
    .addEventListener("click", () => {
      document.getElementById("newsletterModal").classList.add("hidden");
      // Mark that the user is signed up, so popup never shows again
      localStorage.setItem("newsletterSignedUp", "true");
    });
});
