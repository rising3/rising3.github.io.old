import { FC } from 'react'

const Footer : FC = () => {
    return (
        <>
            <footer>
                <div className="text-center p-3">
                    © 2022 Copyright:
                    <a className="text-dark" href="https://rising3.github.io/">rising3.github.io</a>
                </div>
            </footer>
            <style jsx>{`
                footer {
                    background-color: gainsboro;
                }
            `}</style>
        </>
    )
}

export default Footer
