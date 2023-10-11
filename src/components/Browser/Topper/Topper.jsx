import React, { useState, useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import './Topper.scss'

const Topper = () => {

    const [background, setBackground] = useState(20)

    const skyRef = useRef(null)
    const mountainsRef = useRef(null)
    const cloudsRef = useRef(null)
    const logoRef = useRef(null)

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.registerPlugin(ScrollTrigger);

            const tl = gsap.timeline({
                defaults: { duration: 1 },
                scrollTrigger: {
                    trigger: cloudsRef.current,
                    start: "top top",
                    stop: "5000 bottom",
                    scrub: true,
                    pin: true,
                    onUpdate: (self) => {
                        setBackground(Math.ceil(self.progress * 100))
                    }
                }
            })
            tl.to(cloudsRef.current,
                {
                    opacity: 0.5,
                    scale: 1.2,
                    duration: 20,
                    y: "-60%"
                }, -10);

            tl.to(mountainsRef.current,

                {
                    scale: 0.95,
                    duration: 30,
                    y: "-50%"
                }, -10)


            tl.to(logoRef.current, {
                filter: "blur(5px)",
                duration: 20,
                y: "-20%"
            },
                20)
        });
        return () => ctx.revert();
    }, [])

    return (
        <>
            <div className="topper_container">

                <div ref={skyRef} className="sky">
                    <img className='headline' src={process.env.PUBLIC_URL + `/images/headline.svg`} alt="headline" />

                    <div ref={mountainsRef} className="gory">
                        <img src={process.env.PUBLIC_URL + `/images/TLO.webp`} alt="gory" />
                    </div>

                    <div ref={cloudsRef} className='chmury' >
                        <img src={process.env.PUBLIC_URL + `/images/chmury.webp`} alt="chmury" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Topper