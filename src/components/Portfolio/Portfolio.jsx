import React from 'react'
import './portfolio.css';
import project1 from '../../assets/project_1.png'
import project2 from '../../assets/project_2.png'
import project3 from '../../assets/project_3.png'

function Portfolio() {

    const items = [
        { link: "https://scamguard-e21ec.web.app/", title: "SAFE BUY", img: project1 },
        { link: "https://akkiioo.web.app/", title: "Client Portfolio Website", img: project2 },
        { link: "https://reactjs-rps.web.app/", title: "Rock, Paper, Scissors Web App", img: project3 },
    ]

    return (
        <section id='portfolio'>
            <h1>MY <span>PORTFOLIO</span></h1>
            <div className='portfolio-item-container'>
                {items.map((item, id) => (
                    <div key={id} className="portolio-item">
                        <img src={item.img} alt={item.title} />
                        <div className='link-wrapper'>
                            <a href={item.link} target="_blank" rel="noreferrer">{item.title}</a>
                        </div>
                    </div>
                ))}
            </div>

        </section >
    )
}

export default Portfolio