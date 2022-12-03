if('serviceWorker' in navigator){
    navigator.serviceWorker.register("https://awp10a-production.up.railway.app/sw.js");
    serviceWorker.unregister();
}
