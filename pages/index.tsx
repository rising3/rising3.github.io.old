import type { NextPage } from 'next'

import Head from 'next/head'
import Header from '../components/header'
import Profile from '../components/profile'
import Products from '../components/products'
import Footer from '../components/footer'

const GhPages: NextPage = () => {
    return (
        <>
            <Head>
                <meta name="description" content="" />
                <title>Michio NAKAGAWA a.k.a RISING3, an architect/developer that web service development</title>
            </Head>
            <Header />
            <main className="mt-5">
                <div className="container">
                    <Profile />
                    <Products />
                </div>
            </main>
            <Footer />
        </>
    )
}

export default GhPages