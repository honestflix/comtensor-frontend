'use client'

import { useRef, useState, useEffect } from 'react'

import Image from 'next/image'
import { Transition } from '@headlessui/react'
import TabsImage01 from '@/public/images/tab-image-01.png'
import HeroImage01 from '@/public/images/hero-image-01.jpg'
import Stats from './stats'

export default function Tabs() {

  const [tab, setTab] = useState<number>(1)

  const tabs = useRef<HTMLDivElement>(null)

  const heightFix = () => {
	  if ( tabs.current && tabs.current.parentElement ) tabs.current.parentElement.style.height = `${tabs.current.clientHeight}px`
  }

  useEffect(() => {
    heightFix()
  }, [])    

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800 text-center">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12" data-aos-id-tabs>
            <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">How to support us</h2>
            <p className="text-xl text-gray-400" data-aos="fade-up" data-aos-delay="200" data-aos-anchor="[data-aos-id-tabs]">If you like and want to support our project, please consider staking your $com-ai with our validator hotkey.</p>
            <br/>
            <br/>
            <Stats />
            <div className="flex justify-center items-center">
              <p className="font-bold text-blue-500 text-[20px] bg-gray-800 mr-2 rounded-md px-1">5FcRCvjeLee9kpM8GmkjAnsUzUf4vXYFY6wTZugrgCAdE1TD</p>
              <button onClick={() => navigator.clipboard.writeText('5FcRCvjeLee9kpM8GmkjAnsUzUf4vXYFY6wTZugrgCAdE1TD')}>
              <svg width="30px" height="30px" viewBox="0 0 1024 1024" className="icon"  version="1.1" xmlns="http://www.w3.org/2000/svg"><path d="M589.3 260.9v30H371.4v-30H268.9v513h117.2v-304l109.7-99.1h202.1V260.9z" fill="#E1F0FF" /><path d="M516.1 371.1l-122.9 99.8v346.8h370.4V371.1z" fill="#E1F0FF" /><path d="M752.7 370.8h21.8v435.8h-21.8z" fill="#446EB1" /><path d="M495.8 370.8h277.3v21.8H495.8z" fill="#446EB1" /><path d="M495.8 370.8h21.8v124.3h-21.8z" fill="#446EB1" /><path d="M397.7 488.7l-15.4-15.4 113.5-102.5 15.4 15.4z" fill="#446EB1" /><path d="M382.3 473.3h135.3v21.8H382.3z" fill="#446EB1" /><path d="M382.3 479.7h21.8v348.6h-21.8zM404.1 806.6h370.4v21.8H404.1z" fill="#446EB1" /><path d="M447.7 545.1h261.5v21.8H447.7zM447.7 610.5h261.5v21.8H447.7zM447.7 675.8h261.5v21.8H447.7z" fill="#6D9EE8" /><path d="M251.6 763h130.7v21.8H251.6z" fill="#446EB1" /><path d="M251.6 240.1h21.8v544.7h-21.8zM687.3 240.1h21.8v130.7h-21.8zM273.4 240.1h108.9v21.8H273.4z" fill="#446EB1" /><path d="M578.4 240.1h130.7v21.8H578.4zM360.5 196.5h21.8v108.9h-21.8zM382.3 283.7h196.1v21.8H382.3zM534.8 196.5h65.4v21.8h-65.4z" fill="#446EB1" /><path d="M360.5 196.5h65.4v21.8h-65.4zM404.1 174.7h152.5v21.8H404.1zM578.4 196.5h21.8v108.9h-21.8z" fill="#446EB1" /></svg>
              </button>
            </div>
            
          </div>

          {/* Section content */}
          <h2 className="h2 mb-4" data-aos="fade-up" data-aos-anchor="[data-aos-id-tabs]">Main features</h2>
          <div>
            
            {/* Tabs buttons */}
            <div className="flex flex-wrap justify-center -m-2" data-aos="fade-up" data-aos-delay="400" data-aos-anchor="[data-aos-id-tabs]">
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 1 && 'opacity-50'}`}
                onClick={() => setTab(1)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M13.5 5.5c-.311.001-.62.061-.909.177l-2.268-2.268c.116-.29.176-.598.177-.909a2.5 2.5 0 00-5 0c.001.311.061.62.177.909L3.409 5.677A2.473 2.473 0 002.5 5.5a2.5 2.5 0 000 5c.311-.001.62-.061.909-.177l2.268 2.268c-.116.29-.176.598-.177.909a2.5 2.5 0 105 0 2.473 2.473 0 00-.177-.909l2.268-2.268c.29.116.598.176.909.177a2.5 2.5 0 100-5zM8 11c-.311.001-.62.061-.909.177L4.823 8.909a2.423 2.423 0 000-1.818l2.268-2.268a2.423 2.423 0 001.818 0l2.268 2.268a2.423 2.423 0 000 1.818l-2.268 2.268A2.473 2.473 0 008 11z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Bittranslate</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 2 && 'opacity-50'}`}
                onClick={() => setTab(2)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.043 6.293S9.79 1.905 6.745 0A5.37 5.37 0 014.72 3.887C3.42 5.03.974 7.6 1 10.34A6.285 6.285 0 004.451 16a3.984 3.984 0 011.394-2.755 3.253 3.253 0 001.246-2.185 5.856 5.856 0 013.1 4.881v.013a5.883 5.883 0 003.428-5.106c.216-2.574-1.194-6.074-2.445-7.218a6.793 6.793 0 01-2.13 2.663z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Quick action</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 3 && 'opacity-50'}`}
                onClick={() => setTab(3)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 10c-1.1 0-2-.9-2-2 0-.2 0-.3.1-.5L3.6 5 5 3.6l2.5 2.5c.2-.1.3-.1.5-.1 1.1 0 2 .9 2 2s-.9 2-2 2z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Quick action</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 4 && 'opacity-50'}`}
                onClick={() => setTab(4)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 9v6a8 8 0 008-8V1a8 8 0 00-8 8zM0 6v3a6 6 0 006 6v-3a6 6 0 00-6-6z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Quick action</span>
              </button>
              <button
                className={`flex items-center font-medium py-2 px-4 m-2 bg-gray-800 rounded-full group transition duration-500 ${tab !== 5 && 'opacity-50'}`}
                onClick={() => setTab(5)}
              >
                <svg className="w-4 h-4 fill-current text-purple-600 mr-2" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.936 6.007H8.358l1.594-4.685c.3-.997-.897-1.794-1.694-.997L.284 8.3c-.598.598-.199 1.694.698 1.694H7.56l-1.594 4.685c-.3.997.897 1.794 1.694.997L15.633 7.7c.598-.598.2-1.694-.697-1.694z" />
                </svg>
                <span className="text-gray-400 group-hover:text-gray-200 transition-colors duration-150 ease-in-out">Quick action</span>
              </button>
            </div>

            {/* Tabs items */}
            <div className="transition-all">
              <div className="relative flex flex-col mt-16" data-aos="fade-up" ref={tabs}>

                {/* Item 1 */}
                <Transition
                  show={tab === 1}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage01} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Com - Bittranslate</h4>
                      <p className="text-lg text-gray-400">BitTranslate’s process is a synergy between Validators and Miners. Validators begin by proceeding organic requests or by extracting sample texts in specific languages from the dataset. To guarantee uniqueness, these texts are processed using a Text Generation model.</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="/translate">
                        <span className="text-sm">Go to Com-Bittranslate</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 2 */}
                <Transition
                  show={tab === 2}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={HeroImage01} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2">Easy to start, optimize and scale</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur..</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 3 */}
                <Transition
                  show={tab === 3}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage01} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Optimize and scale, easy to start</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 4 */}
                <Transition
                  show={tab === 4}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:left-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={HeroImage01} width={516} height={387} alt="Tabs 02" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pl-16 md:max-w-lg lg:max-w-xl md:ml-auto">
                      <h4 className="h4 mb-2">Easy to start, optimize and scale</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

                {/* Item 5 */}
                <Transition
                  show={tab === 5}
                  className="w-full"
                  enter="transition ease-in-out duration-500 transform order-first"
                  enterFrom="opacity-0 scale-98"
                  enterTo="opacity-100 scale-100"
                  leave="transition ease-out duration-300 transform absolute"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-98"
                  beforeEnter={() => heightFix()}
                >
                  <article className="relative max-w-md mx-auto md:max-w-none">
                    <figure className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
                      <Image className="w-full h-full object-cover" src={TabsImage01} width={516} height={387} alt="Tabs 01" />
                    </figure>
                    <div className="relative bg-gray-800 py-8 md:py-16 px-6 md:pr-16 md:max-w-lg lg:max-w-xl">
                      <h4 className="h4 mb-2">Optimize and scale, easy to start</h4>
                      <p className="text-lg text-gray-400">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                      <a className="btn-sm text-white bg-purple-600 hover:bg-purple-700 mt-6" href="#0">
                        <span className="text-sm">Learn more</span>
                        <svg className="w-3 h-3 fill-current text-purple-400 shrink-0 ml-2" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                          <path d="M6 5H0v2h6v4l6-5-6-5z" />
                        </svg>
                      </a>
                    </div>
                  </article>
                </Transition>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
