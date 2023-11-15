"use client"
//saat kita mengimport library dr luar, tolong gunakan useclient
import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const inputSearch = () => {
    //kalau pakai useref pasti ada currentnya
    const searchRef = useRef()
    const router = useRouter()

    const handleSearch = (event) => {
        const keyword = searchRef.current.value
        //mengatur supaya kalau kosong gak mereload
        if (!keyword || keyword.trim() == "") return
        //bisa pakai logic ini tanpa harus menulis 2 function
        if (event.key === 'Enter' || event.type === "click") {
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }
    }

    return (
        <div className=" relative">
            {/* onKeyDown ketika tombol di klik */}
            <input ref={searchRef} placeholder=' cari anime ......' className='p-2 rounded w-full'
                onKeyDown={handleSearch} />
            <button className=' absolute top-2 end-2' onClick={handleSearch}>
                <MagnifyingGlass size={24} />
            </button>
        </div>
    )
}

export default inputSearch