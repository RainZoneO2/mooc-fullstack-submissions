import { useEffect } from "react"

const Filter = ({filter, setFilter, setRegex}) => {
    const handleFilterChange = (event) => {
        setFilter(event.target.value)
    }
    const escapeRegex = (string) => {
        return string.replace(/[/\-\\^$*+?.()|[\]{}]/g, '\\$&');
    }
    useEffect(() => {
        const regex = new RegExp(`^(${escapeRegex(filter)})`, 'i')
        setRegex(regex)
    }, [filter])
    
    return (
        <div>
            Find countries: <input value={filter} onChange={handleFilterChange}/>
        </div>
    )
}

export default Filter