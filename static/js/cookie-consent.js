(function () {
  var KEY = "sdvhub_ads_consent";
  var banner = document.getElementById("cookie-banner");
  if (!banner) return;
  var state = null;
  try { state = localStorage.getItem(KEY); } catch (e) {}
  if (state === "accepted") { loadAds(); banner.style.display = "none"; return; }
  if (state === "declined") { banner.style.display = "none"; return; }
  banner.style.display = "block";
  document.getElementById("cookie-accept").addEventListener("click", function () {
    try { localStorage.setItem(KEY, "accepted"); } catch (e) {}
    banner.style.display = "none";
    loadAds();
  });
  document.getElementById("cookie-decline").addEventListener("click", function () {
    try { localStorage.setItem(KEY, "declined"); } catch (e) {}
    banner.style.display = "none";
  });
  function loadAds() {
    if (!window.__adsenseClient || document.getElementById("adsense-script")) return;
    var s = document.createElement("script");
    s.id = "adsense-script";
    s.async = true;
    s.crossOrigin = "anonymous";
    s.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=" + window.__adsenseClient;
    document.head.appendChild(s);
    setTimeout(function () {
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {}
    }, 400);
  }
})();
