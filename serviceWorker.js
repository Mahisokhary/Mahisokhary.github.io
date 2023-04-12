const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/logo.jpg",
  "/bg.gif",
  "https://code.jquery.com/jquery-3.6.0.js",
  "/logo-72.png"
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