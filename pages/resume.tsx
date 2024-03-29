import Head from 'next/head';
import { Bar } from '../components/Bar';
import {languages, tools} from '../data';
import { motion } from "framer-motion";
import { fadeInAnimation, routeAnimation } from '../animation';

function resume() {
    return (
        <motion.div variants={routeAnimation} initial="initial" animate="animate" exit="exit">
            <Head>
                    <title>박한진-포트폴리오 | Resume</title>
                    <meta name="keywords" content="Javascript, react.js, expo, graphql, apollo, material-ui"/>
                    <meta name="description" content="박한진의 이력서" />
            </Head>
            <div className="p-5">
                {/* Experience & Dev Study */}
                <div className="grid grid-cols-1 gap-4 mb-6 md:grid-cols-2">
                    <motion.div variants={fadeInAnimation} initial="initial" animate="animate" className="mb-4 md:mb-0">
                        <h3 className="mb-2 text-lg font-bold">Experience</h3>
                        <div className="text-sm md:text-base">
                            <h4 className="mb-2 italic">IMHC (2017.02 ~ 2020.06)</h4>
                            <p>플럼보드 서비스(설문조사 솔루션) 기획 및 마케팅</p>
                            <div className="w-3/12 mt-3 text-center border-2 rounded-lg border-menuActive dark:border-pinkyEnd">
                                <span className="py-0.5 px-1 whitespace-nowrap block text-sm ">담당업무</span>
                            </div>
                            <ul className="pl-5 mt-2 list-disc">
                                <li>기획 요구사항 정리 및 개발자, 디자이너와 조율</li>
                                <li>서비스 흐름도 작성 &amp; 시나리오 케이스 테스트</li>
                                <li>GA(Google Analytics) 운영 및 관리</li>
                                <li>구글 Ads 운영 및 관리</li>
                                <li>Google Tag Manager 운영 및 관리</li>
                                <li>마케팅 KPI 추적 및 분석</li>
                            </ul>
                        </div>
                    </motion.div>
                    <motion.div variants={fadeInAnimation} initial="initial" animate="animate">
                        <h3 className="mb-2 text-lg font-bold">Dev Study</h3>
                        <div className="mb-3 text-sm md:mb-3 md:text-base">
                            <h4 className="mb-1 italic">Autodidacticism (2021.02 ~ 현재)</h4>
                            <ul>
                                <li>프론트엔드(react.js, next.js, redux)</li>
                                <li>백엔드(node.js, express.js, apollo, firebase)</li>
                                <li>데이터베이스(MongoDB, PostgreSQL)</li>
                            </ul>
                        </div>
                        <div className="text-sm md:text-base">
                            <h4 className="mb-1 italic">[NCS]프론트엔드 개발 과정 이수(2020.07 ~ 2021.01)</h4>
                            <p>결과물</p>
                            <ul>
                                <li>
                                    <a className="underline transition duration-300 hover:text-red-400" 
                                    href="http://geomang.dothome.co.kr/geomangmn/index.php" 
                                    target="_blank"
                                    rel="noreferrer">개오망 웹사이트(html,css,javascript)</a>
                                </li>
                                <li>
                                    <a className="underline transition duration-300 hover:text-red-400" href="http://geomang.dothome.co.kr/hjp/" target="_blank" rel="noreferrer">프리 디자인 웹사이트(html,css,javascript)</a>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
                {/* Language & tool chart */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Language &amp; Framework</h3>
                        <div className="text-sm md:text-base">
                            {languages.map(language =>
                                <Bar data={language} key={language.id} />
                            )}
                        </div>
                    </div>
                    <div>
                        <h3 className="mb-4 text-lg font-bold">Tools</h3>
                        <div className="text-sm md:text-base">
                            {tools.map(tool =>
                                <Bar data={tool} key={tool.id} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default resume;
