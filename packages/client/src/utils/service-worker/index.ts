export const registerSW = async (swUrl: string) => {
  if (!import.meta.env.PROD) {
    console.log('Service worker is not registered in development mode.')
    return
  }
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        await navigator.serviceWorker.register(swUrl)
      } catch (e) {
        console.error(`Registration of service worker failed with ${e}`)
      }
    })
  } else {
    console.log('Service workers are not supported.')
  }
}
