import { authUserSession } from "@/libs/auth-libs"
import Image from "next/image";

const Page = async () => {
    const user = await authUserSession();
    console.log()
    return (
        <div className=" text-color-primary">
            <h3>Dashboar</h3>
            <h5> welcome, {user.name}</h5>
            <Image src={user.image} alt="..." width={250} height={250} />
        </div>
    )

}
export default Page;
