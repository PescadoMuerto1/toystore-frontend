import { useSelector } from "react-redux"
import { useEffect } from "react"

import { loadToys, removeToyOptimistic, setFilterBy, saveToy } from "../store/actions/toy.actions"
import { ToyList } from "../cmps/ToyList"
import { ToyFilter } from "../cmps/ToyFilter"
import { NavLink, useNavigate } from "react-router-dom"

export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const navigate = useNavigate()

    useEffect(async () => {
        try {
            await loadToys()
        }
        catch (err) {
            console.error(err)
            // showErrorMsg('Cannot load toys!')
        }
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    async function onRemoveToy(ev, toyId) {
        ev.stopPropagation()
        try {
            await removeToyOptimistic(toyId)
            console.log('Toy removed')
            // showSuccessMsg('Toy removed')
        }
        catch (err) {
            // showErrorMsg('Cannot remove toy')
            console.error(err, 'Cannot remove toy')
        }
    }

    function onSelectToy(toyId) {
        navigate(`/toy/edit/${toyId ? toyId : ''}`)
    }

    function handleLikeToy(ev, toy) {
        ev.stopPropagation()
        toy.favorite = !toy.favorite
        saveToy(toy)
    }

    return (
        <main className="content-layout">
            <div className="add-and-filter-container">
                <NavLink to="/toy/edit" className="btn-add">Add toy</NavLink>
                <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter} /></div>
            {!isLoading
                ?
                <ToyList
                    toys={toys} onRemoveToy={onRemoveToy} onSelectToy={onSelectToy} handleLikeToy={handleLikeToy} />

                : <div>Loading...</div>}

        </main>
    )
}