const checks = document.querySelectorAll(".build-checklist input");
checks.forEach((check) => {
  check.addEventListener("change", () => {
    check.closest("label").classList.toggle("done", check.checked);
  });
});
