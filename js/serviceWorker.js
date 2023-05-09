const staticDevCoffee = "Qoqnus-master"
const assets = [
  "../assets/logo.jpg",
  "../assets/bg2.gif",
  "https://code.jquery.com/jquery-3.6.0.js",
  "../assets/logo-72.png",
  "../assets/Mojangles.ttf",
  "https://cdn.jsdelivr.net/gh/rastikerdar/vazirmatn@v33.003/fonts/webfonts/Vazirmatn[wght].woff2') format('woff2-variations",
  
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})
self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})