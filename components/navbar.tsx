import { FC } from 'react'

const NavBar : FC = () => {
    return (
        <>
            {/* Navbar*/}
            <nav className="navbar navbar-expand-lg navbar-dark d-lg-block" >
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbar"
                        aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbar">
                        <a className="navbar-brand nav-link" aria-current="page" href="#">
                            <strong>RISING3</strong>
                        </a>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#about">ABOUT</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#products">PRODUCTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://opensquare.jp" rel="noreferrer" target="_blank">BLOG</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav list-inline">
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.linkedin.com/in/michio-nakagawa-080902210/" rel="noreferrer" target="_blank">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://www.facebook.com/michio.nakagawa" rel="noreferrer" target="_blank">
                                    <i className="fab fa-facebook-f"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://twitter.com/rising3" rel="noreferrer" target="_blank">
                                    <i className="fab fa-twitter"></i>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="https://github.com/rising3" rel="noreferrer" target="_blank">
                                    <i className="fab fa-github"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <style jsx>{`
                nav {
                    background-color: mediumvioletred;
                    z-index: 2000;
                }
                .navbar .nav-link {
                    color: #fff !important;
                }
            `}</style>
        </>
    )
}
export default NavBar
