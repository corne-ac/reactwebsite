import './Home.css'

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
                    <a className="home-title typewriter">Hi, my name is <b>Piet Retief</b></a>
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