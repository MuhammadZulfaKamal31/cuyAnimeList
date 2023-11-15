import Link from 'next/link'
//besar kecil itu sensitif
import InputSearch from './inputSearch'
import { UserActionButton } from './UserActionButton';

const Navbar = () => {
    return (
        <>
            <header className=' bg-color-accent '>
                <div className=' flex md:flex-row flex-col justify-between md:items-center p-4'>
                    <Link href="/" className=' font-bold text-white text-2xl'> CuyAnimeList </Link>
                    <InputSearch />
                    <UserActionButton />
                </div >
            </header>
        </>
    )
}
export default Navbar;


