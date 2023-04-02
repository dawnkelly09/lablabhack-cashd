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
                  title: "Budtender",
                  description: "Our virtual budtender is available 24/7, deeply knowledgeable, and always happy to help - without any judgement. Ask any cannabis question you have - no matter how basic or complex. Whatever you are looking for, we're here to help you find it.",
                  button: "Ask the Budtender",
                },
                {
                  id: 2,
                  imgSrc: "/images/img2.jpg",
                  title: "Stash",
                  description: "With Cash'd, you'll have access to a stash database to keep track of your purchases and create a personalized inventory and purchase history. No more forgetting where you found your new favorite strain.",
                  button: "Create Stash",
                },
                {
                  id: 3,
                  imgSrc: "/images/img3.jpg",
                  title: "Sessions",
                  description: "Use Sessions to document your cannabis consumption experiences. Capture notes with as little or as much detail as you like, rate your experience, and create product reviews to help guide future purchases.",
                  button: "Start Session",
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
                <button>{card.button}</button>
              </div>))
            }
            </div>
      </section>
        
      <section className="benefits">
        <ul>
          <li>Customized recommendations based on your preferences and desired experience</li>
          <li>Keep track of your favorite strains and products, and discover new ones</li>
          <li>Organize and document your cannabis consumption experiences in one convenient location</li>
        </ul>
      </section>
        
      <section className="visual-context"></section>
        
      <section className="social-proof"></section>
      
      <section className="reinforcement">
        <p>Cash'd is the all-in-one solution for anyone looking to enhance their cannabis experience. With our virtual budtender, stash database, and session tracker, you'll have everything you need to discover the perfect strain, keep track of your purchases, and document your experiences.</p> <p>Our knowledgeable and friendly virtual budtender is available to answer any questions you may have, while our stash database helps you stay organized and never forget where you found your favorite strain. Plus, with our session tracker, you can easily document your cannabis consumption experiences and create product reviews to guide your future purchases.</p>
      </section>
        <section className="closing">
          <h2>Ready to enhance your cannabis experience?</h2>
          <h3>Sign up for Cash'd today and discover a whole new world of possibilities.</h3>
          <p>With our virtual budtender, stash database, and session tracker, you'll have everything you need to take your cannabis journey to the next level.</p> <p>So what are you waiting for? Join the Cash'd community today!</p>
        </section>
      </main>

    </>
  )
}


