import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'


export default function Home() {
  return (
    <>
      <Head>
        <title>Cash'd</title>
        <meta name="description" content="Digital tools to navigate the legal cannabis marketplace" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      
      
      <main>
        <section className="hero">
          
          <h1>Discover Your</h1>
          <h1>Perfect Cannabis Experience</h1>

          <h2>Get the Help of a Virtual Budtender, Stash Database, and Session Tracker - All in One Place!</h2>
            
          <button>Ask the Budtender</button>
        </section>

        <section className="usp">
          <h2 className='section-title'>The Right High at the Right Time</h2>
          <h3>Discover new strains, track purchases, and create reviews</h3>
            <div className="card-container">
            {
              [
                {
                  id: 1,
                  imgSrc: "/images/img1.jpg",
                  title: "Card 1 Title",
                  description: "Card 1 description text",
                },
                {
                  id: 2,
                  imgSrc: "/images/img2.jpg",
                  title: "Card 2 Title",
                  description: "Card 2 description text",
                },
                {
                  id: 3,
                  imgSrc: "/images/img3.jpg",
                  title: "Card 3 Title",
                  description: "Card 3 description text",
                },
            ].map((card) => (
              <div key={card.id} className="card">
                <Image
                  src={card.imgSrc}
                  width={200}
                  height={200}
                  alt={`Card ${card.id} Image`}
                />
                <h3>{card.title}</h3>
                <p>{card.description}</p>
                <button>Learn More</button>
              </div>))
            }
            </div>
      </section>
        
        <section className="benefits"></section>
        <section className="visual-context"></section>
        <section className="social-proof"></section>
        <section className="reinforcement"></section>
        <section className="closing"></section>
      </main>

    </>
  )
}


