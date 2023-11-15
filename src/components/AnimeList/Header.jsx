import Link from "next/link"


const Header = ({ title, linkHref, linkTitle }) => {
    return (
        //bisa kayak gini ya pintar juga
        <div className=" p-4 flex justify-between items-center">
            <h1 className=" text-2xl font-bold text-color-primary"> {title}</h1>
            {
                linkHref && linkTitle ?
                    <Link href={linkHref} className=" text-md md:text-xl underline hover:text-color-accent text-color-primary transition-all">
                        {linkTitle}
                    </Link>
                    :
                    null
            }

        </div>
    )
}
export default Header