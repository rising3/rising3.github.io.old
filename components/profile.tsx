import { FC } from 'react'

const checkList = (index: number, value: string) => {
    return <li key={index}><span className="fa-li"><i className="text-success fas fa-check"></i></span>{value}</li>
}

const motivates = [
    'CI/CD',
    'IaC',
    'build automation',
    'toolchain',
    'system and cloud service integration(SOA/ESB)',
    'microservices',
    'virtualization',
]

const motivateElements = motivates.map((value, index) => checkList(index, value) )

const Profile : FC = () => {
    return (
        <>
            <section id="about">
                <div className="row">
                    <div className="col-md-6 gx-5 mb-4">
                        <div className="bg-image hover-overlay ripple shadow-2-strong" data-mdb-ripple-color="light">
                            <img src="/profile.jpg" alt="About" className="img-fluid" />
                            <a href="#!">
                                <div className="mask">
                                </div>
                                <style jsx>{`
                                    div {
                                        background-color: rgba(251, 251, 251, 0.15);
                                    }
                                `}</style>
                            </a>
                        </div>
                    </div>

                    <div className="col-md-6 gx-5 mb-4">
                        <h1 className="text-primary"><strong>ABOUT</strong></h1>
                        <h2 className="text-secondary mb-0">MICHIO NAKAGAWA
                            <span className="text-dark h4">a.k.a</span>
                            <span>RISING3</span>
                        </h2>
                        <div className="mb-5">
                            <a href="https://rising3.github.io/">https://rising3.github.io</a>
                        </div>
                        <p className="text-muted">
                            {"I'm an architect/developer that an enterprise Java application development, and a web service development."}
                            {"I'm also playing with JVM(Java, Groovy, Scala, Kotlin, Clojure)/JavaScript/TypeScript and Go, Rust."}
                        </p>
                        <p className="text-muted">
                            Motivated to make my happy life with:
                        </p>
                        <ul className="fa-ul mb-0">
                            {motivateElements}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile
