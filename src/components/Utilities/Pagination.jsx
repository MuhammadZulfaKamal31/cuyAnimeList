const Pagination = ({ page, lastPage, setPage }) => {

    const handleNextPage = () => {
        setPage((prevState) => prevState + 1)
    }

    const handlePrevtPage = () => {
        setPage((prevState) => prevState - 1)
    }
    return (
        <div className=" flex justify-center text-2xl items-center gap-4 py-4 px-2 text-color-primary">
            {page <= 1 ? null :
                <button onClick={handlePrevtPage} className=" transition-all hover:text-color-accent">Prev</button>
            }
            <p>{page} of {lastPage}</p>
            {page >= lastPage ? null :
                <button onClick={handleNextPage} className=" transition-all hover:text-color-accent">Next</button>
            }
        </div>
    )
}

export default Pagination