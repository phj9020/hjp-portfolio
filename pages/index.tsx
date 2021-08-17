import Head from 'next/head';
import CapabilityCard from '../components/CapabilityCard';
import {services} from '../data';

// export const getStaticProps = async(context:GetStaticPropsContext)=> {
//   const res = await fetch('http://localhost:3000/api/services');
//   const data = await res.json();
//   console.log(data)
//   return {
//     props: {
//       data
//     }
//   }
// };

export default function Home() {
  return (
    <div className="p-5">
      <Head>
        <title>박한진-포트폴리오 | About</title>
        <meta name="keyword" content="프론트엔드, 개발, 포트폴리오, fontend, developer, nextjs, portfolio" />
        <meta name="description" content="박한진의 포트폴리오, Hanjin Park's portfolio" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
      <div className="mb-9">
        <p className="text-sm justify text- lg:text-base">저는 설문조사 솔루션 스타트업에서 서비스 기획과 온라인 마케팅 업무를 담당하며 IT회사에서의 경력을 시작했습니다. 웹사이트 및 모바일 애플리케이션의 서비스 플로우 와이어프레이밍 및 
        개발 요구사항에 대한 테스트를 담당하였고 서비스 개시 후 GA와 Firebase를 이용하여 주요 KPI(웹사이트&모바일앱)를 트래킹하고 개선하는 업무를 담당하였습니다. 현재는
        기획한 기능을 스스로 구현해보고자 하는 욕망을 실현하기 위해 개발 공부를 시작했고 깊고 넒은 개발 세계에서 헤엄치고 있습니다.
        </p>
      </div>
      <div>
        <h2 className="text-base font-bold mb-9">Capability</h2>
        <div className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
          {services.map(service => (
            // To do : Framer motion apply 
            <div key={service.id} >
              <CapabilityCard service={service}  />
            </div>)
          )}
        </div>
      </div>
    </div>
  )
}


