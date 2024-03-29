import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { toyService } from "../services/toy.service"
import { saveToy } from "../store/actions/toy.actions"

export function ToyEdit() {
    const [toy, setToy] = useState(toyService.getEmptyToy())
    const { toyId } = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        if (toyId) loadToy()
        else setToy(toyService.getEmptyToy())
    }, [])

    function loadToy() {
        toyService.getById(toyId)
            .then(_toy => setToy(_toy))
            // .catch(console.log('err', err))
    }

    function handleChange({ target }) {
        const { value, name: field } = target
        setToy(prevToy => ({ ...prevToy, [field]: value }))
    }

    function onSave(ev) {
        ev.preventDefault()
        saveToy(toy)
            .then(navigate('/toy'))
    }

    return <section>
        <form onSubmit={onSave}>
            <input type="text" name="name" value={toy.name} onChange={handleChange} placeholder="Name" />
            <input type="number" name="price" value={toy.price} onChange={handleChange} placeholder="Price" />
            <button>Save</button>
        </form>
    </section>
}