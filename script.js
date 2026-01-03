document.addEventListener("DOMContentLoaded", () => {
  const formPage = document.getElementById("formPage");
  const successPage = document.getElementById("successPage");
  const form = document.getElementById("jokeForm");

  form.addEventListener("submit", (e) => {
    const joke1 = document.getElementById("joke1").value.trim();
    const joke2 = document.getElementById("joke2").value.trim();

    if (!joke1 || !joke2) {
      e.preventDefault();
      alert("Please enter and confirm your joke.");
      return;
    }

    if (joke1 !== joke2) {
      e.preventDefault();
      alert("Jokes do not match!");
      return;
    }

    // Allow Formspree to submit, then swap pages
    setTimeout(() => {
      formPage.classList.add("hidden");
      successPage.classList.remove("hidden");
    }, 150);
  });
});
