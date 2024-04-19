import React from 'react'
import { Link } from 'react-router-dom'
import card1 from '../../assets/images/card11.png';
import card2 from '../../assets/images/card22.png';
import card3 from '../../assets/images/card33.png';
import card4 from '../../assets/images/card44.png';

const Section05 = () => {
    const displayCourse = [
        {   
            title:"Cyber security",
            img: card1,
            description: "Dive into the world of cybersecurity with 'The Insider,' a cutting-edge cyber escape room designed to educate and engage. Unravel the complexities of insider threats and boost cyber awareness, accommodating up to 120 players in a day, starting at just £39 per person. Elevate your team's cybersecurity knowledge today!",
            button_txt: "contact",
            link_to: "/contact"
        },
        {
            title:"Crypto currency",
            img: card2,
            description: "Embark on a thrilling educational journey with 'The Crypto Heist,' a unique cyber escape room. Uncover the secrets of cryptocurrency, from money movement to track and trace. In this immersive experience gain valuable insights and knowledge of virtual currency and the blockchain. Book your adventure now! From £39pp.",
            button_txt: "contact",
            link_to: "/contact"
        },
        {
            title:"Counter terrorism",
            img: card3,
            description: "Join 'Operation Hardcastle,' an adrenaline-pumping counter-terrorism escape room. Harness OSINT, crypto, and cybersecurity skills to crack the case. Engage in a high-stakes mission where every move matters. Unleash your expertise – book now. From £49 pp.",
            button_txt: "contact",
            link_to: "/contact"
        },
        {
            title:"anti-money laundering",
            img: card4,
            description: "Explore the depths of financial crime in our 4-day AML Master Class, featuring 'The Controller' a gripping experience based on true events. Delve into the world of bribery, corruption, and various money laundering tactics presented by the expert Gentium Team. From £149 pp.",
            button_txt: "contact",
            link_to: "/contact"
        },
    ];
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-semibold leading-tight sm:text-4xl lg:text-7xl">Do you like Escape Rooms?</h2>
                    <p className="max-w-7xl mx-auto text-[#38B6FF] mt-4 text-2xl leading-relaxed">Why not try these from our Cyber Escape Room series...</p>
                </div>
                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-4 gap-x-4 gap-y-12">
                 
                        {
                            displayCourse && displayCourse.map((item, i) => {
                                return <div key={i} to={item.link_to} className="flex items-start justify-items-stretch gap-1 flex-col aspect-w-3 bg-[#2653a8]">
                                    <h2 className='text-center text-2xl font-bold uppercase px-16 pt-2'>{item.title}</h2>
                                        <img className="object-contain w-full h-36" src={item.img} />
                                        <p className='py-2 px-2 text-center text-gray-300'>{item.description}</p>
                                    <Link className='px-8 py-2 bg-blue-800 self-center mb-4 shadow-xl border border-white-1 ' to={item.link_to}>{item.button_txt}</Link>
                                </div>
                            })
                        }

            
                </div>
            </div>
        </section>

    )
}

export default Section05
