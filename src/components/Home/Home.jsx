import React from 'react'
import Profile from '../../assets/profile.jpg'
import resume from '../../assets/Adarsh_UIUX.pdf'
import './home.css'
import { MdDownload } from "react-icons/md";

function Home() {
    return (
        <section className='container about'>
            <div className="container-about-wrapper">
                <img src={Profile} alt="profile" />
                <div className="text-content">
                    <h1>I'M ADARSH S.<br />
                        <span>UI DEVELOPER</span></h1>
                    <p>I'm a Kerala based UI/UX designer and React dveloper focused on crafting clean and user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                    <div className='resume-btn-container'>
                        <button>
                            <a download href={resume}>DOWNLOAD RESUME</a>
                            <span className='download-icon-span'>
                                <MdDownload />
                            </span>
                        </button>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Home