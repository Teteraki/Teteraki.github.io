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
  if (!localStorage.getItem("newsletterPopupShown")) {
    document.getElementById("newsletterModal").classList.remove("hidden");
    localStorage.setItem("newsletterPopupShown", "true");
  }

  document.getElementById("closeModalBtn").addEventListener("click", () => {
    document.getElementById("newsletterModal").classList.add("hidden");
  });

  document.getElementById("newsletterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g. send via fetch()
    alert("Thanks for subscribing!");
    document.getElementById("newsletterModal").classList.add("hidden");
  });
});
