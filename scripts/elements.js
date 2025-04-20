
  const toggle = document.getElementById("toggleBtn");

  toggle.addEventListener("change", function () {
    if (!toggle.checked) {
      alert("⚠️ Light mode under development!");
      toggle.checked = true; // revert it back to checked
    }
  });