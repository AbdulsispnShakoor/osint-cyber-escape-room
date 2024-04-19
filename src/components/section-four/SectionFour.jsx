import React from 'react'
import person01 from '../../assets/images/pro-01.png'
import person02 from '../../assets/images/pro-02.png'
import { Link } from 'react-router-dom'
const SectionFour = () => {
    return (
        <section className="text-white py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto sm:px-6 lg:px-32">
                <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 gap-x-16 xl:gap-x-24">
                    <div className="flex flex-col item-center gap-4">
                        <h2 className='text-2xl md:text-5xl lg:text-5xl font-semibold'>Who Developed it?</h2>
                        <p className='text-xl md:text-3xl text-[#38B6FF]'>Let's meet our team members</p>
                        <div className="flex item-center gap-4">
                            <div className=" bg_img01 w-96 h-[380px]">
                                <div className="flex items-center justify-center flex-col bg-[#0469eec7] h-full">
                                    <h3 className='text-xl font-bold text-center drop-shadow-lg text-white'>BRYAN <br /> SWEBERATH MISSER</h3>
                                    <img className="rounded-md w-28" src={person02} />
                                    <h3 className='text-xl font-bold text-center drop-shadow-lg text-white'>Director</h3>
                                    <p className='text-center'>Wolfmind  <br />Netherlands</p>
                                </div>
                            </div>
                            <div className=" bg_img02 w-96 h-[380px]">
                                <div className="flex items-center justify-center flex-col bg-[#0469eec7] h-full">
                                    <h3 className='text-xl font-bold text-center drop-shadow-lg text-white'>DANIEL <br /> GARNHAM</h3>
                                    <img className="rounded-md w-28" src={person01} />
                                    <h3 className='text-xl font-bold text-center drop-shadow-lg text-white'>Director</h3>
                                    <p className='text-center'>Gentium UK Cyber <br />United Kingdom</p>
                                </div>
                            </div>
            
                        </div>
                    </div>
                    <div className='px-4 lg:px-24'>
                        <p className="text-base leading-relaxed ">Meet our dynamic team at OSINT Escape Room, led by Daniel Garnham and Bryan Sewberath Misser. Comprising ex-officers and serving officers from diverse law enforcement backgrounds, our experts bring a wealth of experience to the innovative training platform. Their collective expertise in cybersecurity, strategic leadership, and real-world policing ensures that OSINT Escape Room delivers top-notch open-source intelligence training. Join us on an unparalleled learning journey where experience meets innovation.</p>
                        <p className="mt-4 text-base leading-relaxed ">Collaborating with Daniel Garnham and Bryan Sewberath Misser, our team at OSINT Escape Room comprises dedicated professionals, including ex-officers and serving officers. Spanning various law enforcement agencies, their diverse backgrounds, from cybersecurity to Major Crime, enrich our innovative product. Committed to infusing practical expertise, we've created an immersive training environment. OSINT Escape Room stands at the forefront of cutting-edge open-source intelligence training, thanks to our collective effort in crafting an effective and immersive learning experience.</p>
                        <Link  to={'/contact'} className='block mt-4'> <button className='gradient_btn'>Contact</button></Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SectionFour
