
import toyImg from '../assets/img/img1.webp'

export function ToyPreview({ toy }) {
    return (
        <>
            <img src={toyImg} />
            <h3>{toy.name}</h3>
            <h4>{toy.price}</h4>
        </>
    )
}