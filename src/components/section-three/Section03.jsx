import React from 'react'
import mobileImg from '../../assets/images/mobile_img1.png'
import { Link } from 'react-router-dom'

const Section03 = () => {
    return (
        <section className="text-white py-10  sm:py-16 lg:py-24">
            <div className="px-4 mx-auto md:px-32 max-w-8xl">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className='text-5xl font-black'><span className='text-cyan-400 '>OSINT</span> Courses</h2>
                    <p className="mx-auto mt-4 text-base font-normal leading-relaxed ">Often when you ask a business what their biggest asset is, the response is people. Wrong, people should not be treated as asset but instead should be treated as an investment.
                    <br />
                    </p>
                </div>
                <div className="grid max-w-md grid-cols-1 mx-auto mt-12 lg:max-w-full lg:mt-16 lg:grid-cols-3 gap-x-16 gap-y-12">
                    <div>

                        <p className="mt-6 text-3xl font-semibold">
                            Zero to Hero
                        </p>
                        <p className='text-[#38B6FF] text-2xl mt-2'>1 day In person course.</p>
                        <p className="mt-4 ">A short sharp 1 day crash course at your location for up to 40 participants. 1/2 day learning with Op Shadow Trace to test your detective skills.</p>
                        <p className='text-[#38B6FF] text-2xl mt-4'>£99/€115 pp .</p>
                        <div className="h-0 mt-6 mb-4 " />
                        <p className="mt-6 text-3xl font-semibold">
                            3 Day Course
                        </p>
                        <p className='text-[#38B6FF] text-2xl mt-2'> 03 / Hosted 3-5 Day course.</p>
                        <p className="mt-4 ">Let the Gentium Cyber and Wolf mind team take care of your accommodation and catering for a 3 day OSINT course or 5 Day advanced course which includes Operation Shadow Trace. Currently Hosting facilities in: UK, Germany, Italy and the Netherlands
                            UK, Germany, Italy and Netherlands.</p>
                        <p className='text-[#38B6FF] text-2xl mt-4'> From: £599pp €695pp.</p>
                    </div>
                    <div className='flex items-center justify-center flex-col'>
                        <img className="object-cover w-3/4 h-full" src={mobileImg} alt="mobile image" />
                        <Link className='bg-blue-600 px-14 py-4 mt-8' to={'/contact'} >Contact us</Link>
                    </div>
                    <div>

                        <p className="mt-6 text-3xl font-semibold">
                            3 Day Course
                        </p>
                        <p className='text-[#38B6FF] text-2xl mt-2'> 02 / 3 day in person course.</p>
                        <p className="mt-4 ">A more intense session teaching you various forms of OSINT techniques used by Law-enforcement and Cyber security experts delivered at your premises of choice. Consolidating your learning on day 3 with Op Shadow Trace to test your detective skills.</p>
                        <p className='text-[#38B6FF] text-2xl mt-4'> £199/€229 pp.</p>
                        <div className="h-0 mt-6 mb-4 " />
                        <p className="mt-6 text-3xl font-semibold">
                            Virtual Training
                        </p>
                        <p className='text-[#38B6FF] text-2xl mt-2'>04 / Online Training.</p>
                        <p className="mt-4 ">Currently the Op Shadow Trace mission is not available until September 2024. But exciting online training sessikns packed with live scenario's are available.</p>
                        <p className='text-[#38B6FF] text-2xl mt-4'>£49/€56 pp (Min of 10 max of 40).</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Section03
