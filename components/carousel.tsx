import { FC } from 'react'

type Props = {
    name: string,
    description: string,
    startUrl :string,
    downloadUrl :string,
    active: boolean,
}

const CarouselItem : FC<Props> = (props) => {
    const itemAttr = props.active ? 'carousel-item active' : 'carousel-item'
    return (
        <div className={itemAttr}>
            <div className="mask" >
                <div className="d-flex justify-content-center align-items-center h-100">
                    <div className="text-white text-center">
                        <h1 className="mb-3">{props.name}</h1>
                        <h5 className="mb-4">{props.description}</h5>
                        <a className="btn btn-outline-light btn-lg m-2" href="{props.startUrl}" role="button" rel="noreferrer" target="_blank">GETTING STARTED</a>
                        <a className="btn btn-outline-light btn-lg m-2" href="{props.downloadUrl}" role="button" rel="nofollow" target="_blank">DOWNLOAD</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Carousel : FC = () => {
    return (
        <>
            <div id="introCarousel" className="carousel slide carousel-fade shadow-2-strong" data-mdb-ride="carousel">
                {/* Indicators */}
                <ol className="carousel-indicators">
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" className="active"></li>
                    <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
                </ol>

                {/* Inner */}
                <div className="carousel-inner">
                    <CarouselItem
                        name='SemVer Gradle Plugin'
                        description='A plugin that can updating the semantic versions like `yarn version` command.'
                        startUrl='https://github.com/rising3/semver-gradle-plugin#readme'
                        downloadUrl='https://plugins.gradle.org/plugin/com.github.rising3.semver'
                        active={true} />
                    <CarouselItem
                        name='SemVer'
                        description='A set of Java libraries from the Semantic Versioning.'
                        startUrl='https://github.com/rising3/semver#readme'
                        downloadUrl='https://search.maven.org/artifact/com.github.rising3/semver'
                        active={false} />
                </div>

                {/* Controlls */}
                <a className="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <style global jsx>{`
                #introCarousel {
                    margin-top: -48px;
                }

                #introCarousel,
                .carousel-inner,
                .carousel-item,
                .carousel-item.active {
                    height: 35vh;
                }
                .carousel-item:nth-child(1) {
                    background-image: url('carousel1.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;
                }

                .carousel-item:nth-child(2) {
                    background-image: url('carousel2.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;
                }
                .carousel-item:nth-child(3) {
                    background-image: url('carousel3.jpg');
                    background-repeat: no-repeat;
                    background-size: cover;
                    background-position: center center;
                }
            `}</style>
        </>
    )
}

export default Carousel
