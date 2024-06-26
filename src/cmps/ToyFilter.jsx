import { useRef, useState } from "react"
import { useEffectUpdate } from "../customHooks/useEffectUpdate"
import { utilService } from "../services/util.service"

export function ToyFilter({ filterBy, onSetFilter }) {

    const [filterByToEdit, setFilterByToEdit] = useState({ ...filterBy })
    onSetFilter = useRef(utilService.debounce(onSetFilter, 300))

    useEffectUpdate(() => {
        onSetFilter.current(filterByToEdit)
    }, [filterByToEdit])

    function handleChange({ target }) {
        let { value, name: field, type } = target
        setFilterByToEdit((prevFilter) => ({ ...prevFilter, [field]: value }))
    }

    return (
        <div className="toy-filter">
            <form onSubmit={ev => ev.preventDefault()}>
                <label htmlFor="name"></label>
                <input type="text"
                    id="name"
                    name="txt"
                    placeholder="Search"
                    value={filterByToEdit.txt}
                    onChange={handleChange}
                />

            </form>

        </div>
    )
}