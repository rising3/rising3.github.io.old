import { FC } from 'react'

const products = [
    {
        name: 'SemVer Gradle Plugin',
        description: 'Gradle plugin for Updates the project version.A plugin that can updating the semantic versions like `yarn version` command.',
        license: 'Apache License 2.0',
        required: [`Java 8 or higher`, 'Gradle 6.x or higher'],
        startUrl: 'https://github.com/rising3/semver-gradle-plugin#readme',
        downloadUrl: 'https://plugins.gradle.org/plugin/com.github.rising3.semver',
    },
    {
        name: 'SemVer',
        description: 'SemVer is a set of Java libraries from the Semantic Versioning.',
        license: 'Apache License 2.0',
        required: ['Java 8 or higher'],
        startUrl: 'https://github.com/rising3/semver#readme',
        downloadUrl: 'https://search.maven.org/artifact/com.github.rising3/semver',
    },
    {
        name: 'Crypto cookbook for Kotlin',
        description: 'How to use javax.crypto for Java.',
        license: 'MIT',
        required: ['Java 17 or higher', 'Kotlin 1.7.10 or higher', 'Gradle 7.5 or higher'],
        startUrl: 'https://github.com/rising3/crypto-cookbook-kt#readme',
        downloadUrl: 'https://github.com/rising3/crypto-cookbook-kt',
    },
    {
        name: 'Crypto cookbook for TypeScript',
        description: 'How to use node:crypto module for Node.js.',
        license: 'MIT',
        required: ['Node.js 16 or higher', 'TypeScript 4.6 or higher'],
        startUrl: 'https://github.com/rising3/crypto-cookbook-ts#readme',
        downloadUrl: 'https://github.com/rising3/crypto-cookbook-ts',
    },
]

const checkList = (index: number, value: string) => {
    return <li key={index}><span className="fa-li"><i className="text-success fas fa-check"></i></span>{value}</li>
}

type Props = {
    name: string,
    description: string,
    license: string,
    required: string[],
    startUrl :string,
    downloadUrl :string,
}

const ProductCard : FC<Props> = (props) => {
    const requiredElements = props.required.map((value, index) => checkList(index, value) )

    return (
        <div className="col-md-6 mb-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">{props.name}</h5>
                    <p className="card-text">{props.description}</p>
                    <p className="card-text m-2"><strong>LICENSE: </strong>{props.license}</p>
                    <p className="card-text m-2"><strong>REQUIRED: </strong></p>
                    <ul className="fa-ul mb-0">
                        {requiredElements}
                    </ul>
                    <a className="btn btn-primary btn-lg d-block m-2" href={props.startUrl}
                        role="button"rel="noreferrer" target="_blank">GETTING STARTED</a>
                    <a className="btn btn-primary btn-lg d-block m-2" href={props.downloadUrl}
                        role="button" rel="noreferrer" target="_blank">DOWNLOAD</a>
                </div>
            </div>
        </div>
    
    )
}

const Products : FC = () => {
    const productElements = products.map((item, index) => {
        return <ProductCard key={index}
            name={item.name}
            description={item.description}
            license={item.license}
            required={item.required}
            startUrl={item.startUrl}
            downloadUrl={item.downloadUrl} />
    })

    return (
        <>
            <section id="products">
                <h1 className="text-primary text-center mb-5"><strong>PRODUCTS</strong></h1>
                <div className="row">
                    {productElements}
                </div>
            </section>
        </>
    )
}

export default Products
