import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import NextNProgress from 'nextjs-progressbar';
import Layout from "../../app/ui/Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return <Layout>
    <NextNProgress color="white" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
    <Component {...pageProps} />
  </Layout>
}
