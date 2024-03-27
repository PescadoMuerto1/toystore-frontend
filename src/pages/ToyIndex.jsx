import { useSelector } from "react-redux"
import { useEffect } from "react"

import { loadToys, removeToyOptimistic, setFilterBy } from "../store/actions/toy.actions"
import { ToyList } from "../cmps/ToyList"
import { ToyFilter } from "../cmps/ToyFilter"
import { useNavigate } from "react-router-dom"

export function ToyIndex() {

    const toys = useSelector(storeState => storeState.toyModule.toys)
    const isLoading = useSelector(storeState => storeState.toyModule.isLoading)
    const filterBy = useSelector(storeState => storeState.toyModule.filterBy)
    const navigate = useNavigate()

    useEffect(() => {
        loadToys()
            .catch(err => {
                showErrorMsg('Cannot load toys!')
            })
    }, [filterBy])

    function onSetFilter(filterBy) {
        setFilterBy(filterBy)
    }

    function onRemoveToy(ev, toyId) {
        removeToyOptimistic(toyId)
            .then(() => {
                console.log('Toy removed')
                // showSuccessMsg('Toy removed')
            })
            .catch(err => {
                // showErrorMsg('Cannot remove toy')
                console.error(err, 'Cannot remove toy')
            })
    }

    function onSelectToy(toyId) {
        navigate(`/toy/edit/${toyId ? toyId : ''}`)
    }

    return (
        <main>
            <ToyFilter filterBy={filterBy} onSetFilter={onSetFilter}/>
            {!isLoading
                ? <ToyList
                    toys={toys} onRemoveToy={onRemoveToy} onSelectToy={onSelectToy}/>
                : <div>Loading...</div>}
        </main>
    )
}