//masuk lewat parameter anjir
export const getAnimeResponse = async (resource, query) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`)
    const anime = await response.json()
    return anime;
}

//handle nested api, yang di bagian entry(flet map)
export const getNestedAnimeResponse = async (resource, objectProperty) => {
    const response = await getAnimeResponse(resource);
    //fungsi flatmap memetakan array kedalam array baru
    return response.data.flatMap(item => item[objectProperty]);
}

export const reproduce = (data, gap) => {
    //~~ digunakan untuk melakukan floor atau mengkonversi nilai float ke integer.
    const first = ~~(Math.random() * (data.length - gap) + 1) //10
    const last = first + gap // ? 15

    //paham makanya namanya gap, karena sesuai gap, yang sati - dan satu plus
    const response = {
        data: data.slice(first, last)
    }
    return response
    // slice(first, last);
}