import Header from "./../components/header/Header"
import "./stylesHome.css"

const Home = () => {
    return (
        <>
          <Header />
          <main className="section">
          <div className="container">
                <ul className="content-list-all">
                    <li className="content-list__skills">
                    <h2 className="my-skills">DEVELOPMENT</h2>
                        <div className="skills-container">
                             <div className="skills">JavaScript</div> 
                             <div className="skills">TypeScript</div>
                             <div className="skills">HTML</div>
                            <div className="skills">CSS</div>
                        </div>
                    </li>
                    <li className="content-list__skills">
                    <h2 className="my-skills">LIBRARY & FRAMEWORK</h2>
                    <div className="skills-container">
                        <div className="skills">ReactJS</div>
                        <div className="skills">Redux</div>
                        <div className="skills">BootStrap</div>
                        <div className="skills">TailwindCSS</div>
                        <div className="skills">Yarn</div>
                        <div className="skills">Npm</div>
                        <div className="skills">StyledComponents</div>
                    </div>
                    </li>
                    <li className="content-list__skills">
                    <h2 className="my-skills">BACKEND</h2>
                    <div className="skills-container">
                        <div className="skills">NodeJS</div>
                    </div>
                    </li>
                </ul>
          </div>
          </main>
        </>
    );
}

export default Home;