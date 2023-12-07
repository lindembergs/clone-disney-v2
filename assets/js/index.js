const toggleNav = () => {
  const expandBar = document.querySelector(".more");
  expandBar.classList.toggle("display-none");
};

const toggleLink = document.getElementById("toggleLink");
toggleLink.addEventListener("click", toggleNav);
