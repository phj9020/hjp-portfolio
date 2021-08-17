import Head from 'next/head';

export const getStaticProps = async(context:getStaticPropsContext)=> {
  const res = await fetch('http://localhost:3000/api/services');
  const data = await res.json();
  return {
    props: {
      data
    }
  }
};

export default function Home({data}) {
  const {services} = data;

  return (
    <div className="p-5">
      <Head>
        <title>박한진-포트폴리오</title>
        <meta name="keyword" content="프론트엔드, 개발, 포트폴리오, fontend, developer, nextjs, portfolio" />
        <meta name="description" content="박한진의 포트폴리오, Hanjin Park's portfolio" />
        <link rel="icon" href="/portfolio.png" />
      </Head>
      <div className="mb-7">
        <p className="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
          molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
          numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
          optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestiasProvident similique accusantium nemo autem. Veritatis
          obcaecati tenetur iure eius earum ut molestias
        </p>
      </div>
      <div>
        <h2 className="mb-2 text-base font-bold">Capability</h2>
        {services.map(service => 
          <div key={service.id}>
            
            <div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          </div>)
        }
      </div>
    </div>
  )
}


