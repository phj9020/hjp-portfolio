import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <Head>
        <title>박한진-포트폴리오</title>
        <meta name="keyword" content="프론트엔드, 개발, 포트폴리오, fontend, developer, nextjs, portfolio" />
        <meta name="description" content="박한진의 포트폴리오, Hanjin Park's portfolio" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
      <h1 className="text-purple-600 hover:text-red-500">박한진</h1>
    </div>
  )
}


