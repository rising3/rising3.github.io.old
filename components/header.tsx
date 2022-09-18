import { FC } from 'react'
import NavBar from './navbar'
import Carousel from './carousel'

const Header : FC = () => {
    return (
        <>
            <header>
                <NavBar />
                <Carousel />
            </header>
        </>
    )
}

export default Header
