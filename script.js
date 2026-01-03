document.addEventListener("DOMContentLoaded", () => {
  const formPage = document.getElementById("formPage");
  const successPage = document.getElementById("successPage");
  const form = document.getElementById("jokeForm");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // STOP the default form submit

    const email = document.getElementById("email").value.trim();
    const joke1 = document.getElementById("joke1").value.trim();
    const joke2 = document.getElementById("joke2").value.trim();

    if (!email || !joke1 || !joke2) {
      alert("Please enter your email and both jokes.");
      return;
    }

    if (joke1 !== joke2) {
      alert("Jokes do not match!");
      return;
    }

    // Send data to Formspree
    const formData = new FormData();
    formData.append("email", email);
    formData.append("joke", joke1);
    formData.append("confirm_joke", joke2);

    try {
      const response = await fetch("https://formspree.io/f/mnjndjkp", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
      });

      if (response.ok) {
        // Show success page
        formPage.classList.add("hidden");
        successPage.classList.remove("hidden");
        form.reset();
      } else {
        alert("Error sending your joke. Please try again.");
      }
    } catch (err) {
      alert("Network error. Please check your connection.");
      console.error(err);
    }
  });
});
