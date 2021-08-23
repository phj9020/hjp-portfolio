import Head from 'next/head';
import CapabilityCard from '../components/CapabilityCard';
import {services} from '../data';
import { motion } from "framer-motion";
import { fadeInAnimation, routeAnimation, stagger } from '../animation';

export default function Home() {
  return (
    <motion.div className="p-5" variants={routeAnimation} initial="initial" animate="animate" exit="exit">
      <Head>
        <title>박한진-포트폴리오 | About</title>
        <meta name="keyword" content="프론트엔드, 개발, 포트폴리오, fontend, developer, nextjs, portfolio" />
        <meta name="description" content="박한진의 포트폴리오, Hanjin Park's portfolio" />
      </Head>
      <div className="mb-9">
        <p className="text-sm justify text- lg:text-base">저는 설문조사 솔루션 스타트업에서 서비스 기획과 온라인 마케팅 업무를 담당하며 IT회사에서의 경력을 시작했습니다. 웹사이트 및 모바일 애플리케이션의 서비스 플로우 와이어프레이밍 및 
        개발 요구사항에 대한 테스트를 담당하였고 서비스 개시 후 GA와 Firebase를 이용하여 주요 KPI(웹사이트&모바일앱)를 트래킹하고 개선하는 업무를 담당하였습니다. 현재는
        기획한 기능을 스스로 구현해보고자 하는 욕망을 실현하기 위해 개발 공부를 시작했고 깊고 넒은 개발 세계에서 헤엄치고 있습니다.
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold mb-9">Capability</h2>
        <motion.div variants={stagger} initial="initial" animate="animate" className="grid lg:grid-cols-2 gap-x-4 gap-y-3">
          {services.map(service => (
            <motion.div variants={fadeInAnimation} key={service.id} >
              <CapabilityCard service={service}  />
            </motion.div>)
          )}
        </motion.div>
      </div>
    </motion.div>
  )
}


