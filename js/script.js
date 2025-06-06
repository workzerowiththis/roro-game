const scrollBtn = document.getElementById("j-go-to-up");

function toggleScrollBtn() {
  if (window.scrollY > window.innerHeight / 2) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
}

window.addEventListener("load", toggleScrollBtn);

window.addEventListener("scroll", toggleScrollBtn);

scrollBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.querySelectorAll("#scroll-to-top, #j-go-to-up").forEach((element) => {
  element.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".j-serchbar");
  const input = form.querySelector('input[type="search"]');
  const icon = form.querySelector("svg");

  function submitSearch() {
    const query = input.value.trim();
    if (query) {
      // Redirect to search.html with the query
      window.location.href = `search.html?${encodeURIComponent(query)}`;
    }
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    submitSearch();
  });

  icon.addEventListener("click", function () {
    submitSearch();
  });
});
