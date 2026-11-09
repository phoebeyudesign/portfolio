(function () {
  var toggle = document.querySelector(".menu-toggle");
  var menu = document.getElementById("main-menu");
  function setOpen(open) {
    toggle.classList.toggle("is-open", open);
    menu.classList.toggle("is-open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  }
  toggle.addEventListener("click", function () { setOpen(!menu.classList.contains("is-open")); });
  menu.querySelectorAll("a").forEach(function (a) { a.addEventListener("click", function () { setOpen(false); }); });

  // YouTube: paste a link or video ID into data-youtube="" on a .video box.
  document.querySelectorAll("[data-youtube]").forEach(function (box) {
    var v = box.getAttribute("data-youtube").trim();
    var m = v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
    var id = m ? m[1] : (/^[\w-]{11}$/.test(v) ? v : "");
    if (!id) return; // keeps the "Video coming soon" placeholder
    var f = document.createElement("iframe");
    f.src = "https://www.youtube.com/embed/" + id + "?rel=0";
    f.title = box.getAttribute("title") || "Video";
    f.loading = "lazy";
    f.allow = "autoplay; encrypted-media";
    f.allowFullscreen = true;
    box.innerHTML = "";
    box.appendChild(f);
  });
})();
