import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <img src='/img/logo.jpg' layout='responsive' />
                </div>
                <Link href="/">
                    Home
                </Link>
                <Link href="/about">
                    About
                </Link>
                <Link href="/ninjas">
                    Ninja List
                </Link>
            </nav>
        </div>
    );
}

export default Navbar;