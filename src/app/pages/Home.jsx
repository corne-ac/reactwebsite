import './Home.css'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const cardContents = [
    { header: 'What', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae velit ex.' },
    { header: 'Why', content: 'Mauris dapibus risus quis suscipit vulputate. Egestas purus viverra accumsan in nisl nisi.' },
    { header: 'How', content: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.' }
];

export default function Home () {
    return (
        <div>

            <div className="home-container">

                {/*Home Title Content*/}
                <div className="home-title-container">
                    {window.innerWidth <= 800 ? (
                        <a className="home-title typewriter">Hi,<br/> my name is <br/><b>Piet Retief </b></a>
                    ) : (
                        <a className="home-title typewriter">Hi, my name is <b>Piet Retief</b></a>
                    )}

                    <div className="icons-container">
                        <a className="icon-button" href="https://github.com/corne-ac" target="_blank" rel="noopener noreferrer"><FaGithub/></a>
                        <a className="icon-button" href="https://www.linkedin.com/in/corn%C3%A9-ackerman-0687bb230/" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                    </div>

                </div>

                {/*cards*/}
                <div className="home-card-container">
                    {cardContents.map((card, i) => (
                        <div className="home-card" key={i}>
                            <h1>{card.header}</h1>
                            <a>{card.content}</a>
                        </div>
                    ))}
                </div>

                {/*mark button area*/}
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '80px' }}>
                    <div style={{ width: '30px', height: '2px', background: '#ccc', marginRight: '15px' }} />
                    <a>Want to show others that you were here? add to the murial!</a>
                    <div style={{ width: '30px', height: '2px', background: '#ccc', marginLeft: '15px' }} />
                </div>
                <button className="mark-button" style={{ marginBottom: '50px'}}>LEAVE YOUR MARK</button>

                {/*links*/}
                <div>

                </div>


            </div>

        </div>
    )
}