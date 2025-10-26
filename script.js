// Smooth scroll for nav links
document.querySelectorAll("nav a").forEach(link => {
  link.onclick = e => {
    e.preventDefault();
    document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  };
};

// Basic form validation
document.querySelector("form").onsubmit = e => {
  const fields = document.querySelectorAll("input, textarea");
  for (let field of fields) {
    if (!field.value.trim()) {
      alert("Please fill out all fields.");
      field.focus();
      e.preventDefault();
      break;
    }
  }
};
