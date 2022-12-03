importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js'//URL
);
importScripts('https://cdn.onesignal.com/sdks/OneSignalSDKWorker.js');


workbox.precaching.precacheAndRoute([//Guardar los archivos en cache
  "index.html",// no es necesario guardarlo en el prechache, carga por defecto
  "offline.html", // Se mostrara cuando la pagína este en offline
  "img/offline.png"
]);

workbox.routing.registerRoute(//Identificamos el tipo de recurso
  ({request}) => request.destination === 'image',//Si el recurso del destino es igual a una imagen 
  new workbox.strategies.NetworkOnly()// creamos un nueva estrategia de solo red
);

workbox.routing.registerRoute(//Identificamos el tipo de recurso
  ({request}) => request.destination === 'document',//Si el recurso del destino es igual a una un documento 
  new workbox.strategies.NetworkFirst()// creamos un nueva estrategia de la red es lo primero
);

// workbox.routing.registerRoute(//Identificamos el tipo de recurso
//   ({request}) => request.destination === 'document',//Si el recurso del destino es igual a una un documento 
//   new workbox.strategies.CacheFirst()// creamos un nueva estrategia de chache es primero
// );

// workbox.routing.registerRoute(//Identificamos el tipo de recurso
//   ({request}) => request.destination === 'document',//Si el recurso del destino es igual a una un documento 
//   new workbox.strategies.CacheOnly()// creamos un nueva estrategia solomente cache
// );

// si hay un error, cachamos ese error
workbox.routing.setCatchHandler(async context=>{
  if(context.request.destination === 'image'){// si el error es de tipo imagen, retornamos la imagen
    return workbox.precaching.matchPrecache('img/offline.png');
  }else if(context.request.destination === 'document'){// si el error es de tipo document, retornamos el archivo
    return workbox.precaching.matchPrecache('offline.html');
  }
  return Response.error();
})



















// self.addEventListener("install", (e) => {
//   console.log("instalado");

//   e.waitUntil((async () => {
//     const cache = await caches.open(cacheName);
//     await cache.addAll(contenidoCache);
//   })());
// });

// self.addEventListener("fetch", (e) => {
//   e.respondWith(
//     (async () => {
//       const r = await caches.match(e.request);
//       if (r) return r;
//       const response = await fetch(e.request);
//       const cache = await caches.open(cacheName);
//       cache.put(e.request, response.clone());
//       return response;
//     })());
// });

// self.addEventListener("fetch", (e) => {
//   e.respondWith((async () => {
//     const r = await cachself.addEventListener("install", (e) => {
//       console.log("instaldo");
//       e.waitUntil((async () => {
//         const cache = await caches.open(cacheName);
//         await cache.addAll(contenidoCache);
//       }))
//     })
//   })())
// });
