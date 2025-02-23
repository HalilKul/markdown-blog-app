// Global CSS stil dosyasını içe aktarır
import '../styles/globals.css'

// MyApp bileşenini tanımlar
function MyApp({ Component, pageProps }) {
    // Component: her sayfa bileşeni
    // pageProps: sayfa bileşenine iletilen props (özellikler)
    return <Component {...pageProps} />
}

export default MyApp
