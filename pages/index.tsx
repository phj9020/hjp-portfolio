import Head from 'next/head'
import Image from 'next/image'
import Navbar from './../components/Navbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>박한진-포트폴리오</title>
        <meta name="keyword" content="프론트엔드, 개발, 포트폴리오, fontend, developer, nextjs, portfolio" />
        <meta name="description" content="박한진의 포트폴리오, Hanjin Park's portfolio" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
    </div>
  )
}


