if ("geolocation" in navigator) {
    /* местоположение доступно */
    console.log(navigator.getCurrentPosition)
} else {
    /* местоположение НЕ доступно */
    console.log('false')
}