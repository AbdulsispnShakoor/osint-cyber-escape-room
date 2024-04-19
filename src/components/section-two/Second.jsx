import React from 'react'
import s1 from '../../assets/images/search-01.png'
import s2 from '../../assets/images/search-02.png'
import s3 from '../../assets/images/search-03.png'
import video1 from '../../assets/videos/intro.mp4'
import LoginToStart from '../loginStart/LoginToStart'
const Second = () => {
    return (
        <section className="py-10 sm:py-16 lg:py-24">
            <div className=" px-4 mx-auto lg:px-32 sm:px-6 text-white">
                <div className="grid items-center grid-cols-1 lg:items-stretch md:grid-cols-2 gap-y-8 gap-x-12 xl:gap-x-20">
                    <div className="relative">
                        <h2 className="text-4xl font-medium text-center lg:text-left sm:text-6xl lg:text-7xl lg:w-[650px]">
                            What Does  <span className='text-[#38B6FF]'>Operation Shadow Trace</span>  Entail
                        </h2>
                        <div className="lg:aspect-w-4 lg:aspect-h-3 pt-8 flex items-center justify-center flex-col">
                            <img className="object-cover lg:w-64 h-full" src={s1} alt="search-01" />
                            <img className="object-cover lg:w-96 h-full lg:ml-48 my-4 lg:-mt-12 z-50" src={s2} alt="search-02" />
                            <img className="object-cover lg:w-64 h-full lg:ml-96 lg:-mt-8" src={s3} alt="search-03" />
                        </div>

                    </div>
                    <div className="flex flex-col space-y-8">

                        <p className="text-xl font-light leading-relaxed ">Step into the shoes of a detective with OSINT Escape Room - Operation Shadow Trace, the second thrilling chapter in the 5-part Cyber Escape Room Series. Join the London-based International Cyber Crime Unit on a global pursuit, navigating through a blend of hands-on and digital experiences that challenge your investigative skills. Embark on a journey that transcends borders, testing your wit and cyber expertise in these exciting immersive adventure.
                            <br /> <br />
                            Developed by current and ex-law enforcement professionals, each task is rooted in real police cases. Master OSINT techniques, from geolocation mapping to reverse image searching, as you unravel the intricate web of crime. Make learning unforgettable with a hands-on approach to real-world investigations!</p>
                        <div className="list_items">
                            <div className="mt-2">
                                <div className="list flex flex-start space-x-4">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.818848 11.7611C4.16338 15.3798 7.40619 18.6376 10.5234 22.7579C13.9124 16.0173 17.3812 9.25324 23.1046 1.92809L21.5624 1.22168C16.7296 6.34699 12.9749 11.1986 9.71244 16.9642C7.44369 14.9204 3.77713 12.0282 1.53838 10.5423L0.818848 11.7611Z" fill="white" />
                                        </svg>
                                    </div>
                                        <h3 className='text-xl'>
                                        Geolocation Mastery 
                                        </h3>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="list flex flex-start space-x-4">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.818848 11.7611C4.16338 15.3798 7.40619 18.6376 10.5234 22.7579C13.9124 16.0173 17.3812 9.25324 23.1046 1.92809L21.5624 1.22168C16.7296 6.34699 12.9749 11.1986 9.71244 16.9642C7.44369 14.9204 3.77713 12.0282 1.53838 10.5423L0.818848 11.7611Z" fill="white" />
                                        </svg>
                                    </div>
                                        <h3 className='text-xl'>
                                        Advanced Reverse Image Search Proficiency  
                                        </h3>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="list flex flex-start space-x-4">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.818848 11.7611C4.16338 15.3798 7.40619 18.6376 10.5234 22.7579C13.9124 16.0173 17.3812 9.25324 23.1046 1.92809L21.5624 1.22168C16.7296 6.34699 12.9749 11.1986 9.71244 16.9642C7.44369 14.9204 3.77713 12.0282 1.53838 10.5423L0.818848 11.7611Z" fill="white" />
                                        </svg>
                                    </div>
                                        <h3 className='text-xl'>
                                        Social Media Investigation Skills 
                                        </h3>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="list flex flex-start space-x-4">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.818848 11.7611C4.16338 15.3798 7.40619 18.6376 10.5234 22.7579C13.9124 16.0173 17.3812 9.25324 23.1046 1.92809L21.5624 1.22168C16.7296 6.34699 12.9749 11.1986 9.71244 16.9642C7.44369 14.9204 3.77713 12.0282 1.53838 10.5423L0.818848 11.7611Z" fill="white" />
                                        </svg>
                                    </div>
                                        <h3 className='text-xl'>
                                        Open-Source Data Analysis
                                        </h3>
                                </div>
                            </div>
                            <div className="mt-2">
                                <div className="list flex flex-start space-x-4">
                                    <div className="icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.818848 11.7611C4.16338 15.3798 7.40619 18.6376 10.5234 22.7579C13.9124 16.0173 17.3812 9.25324 23.1046 1.92809L21.5624 1.22168C16.7296 6.34699 12.9749 11.1986 9.71244 16.9642C7.44369 14.9204 3.77713 12.0282 1.53838 10.5423L0.818848 11.7611Z" fill="white" />
                                        </svg>
                                    </div>
                                        <h3 className='text-xl'>
                                        Real Police Case Solving 
                                        </h3>
                                </div>
                            </div>
                        </div>
                        <div className="last_row flex flex-col md:flex-row items-center lg:space-x-8 md:space-y-0 space-y-6 justify-between">
                            <h4 className='text-[#38B6FF]'>View The trailer now</h4>
                            <div className="icon-arrow md:rotate-0 rotate-90 ">
                                <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.3335 42L29.1668 28L9.3335 14V42ZM30.3335 14V42L50.1668 28L30.3335 14Z" fill="#38B6FF"/>
                                </svg>
                            </div>
                            <div className="lg:w-1/3">
                           <iframe  src="https://www.youtube.com/embed/mx0u1vAeAX8?si=CFMNrmKUE_5kujr6" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />

                                {/* <video src={video1} autoPlay controls></video> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <LoginToStart />
        </section>
    )
}

export default Second
