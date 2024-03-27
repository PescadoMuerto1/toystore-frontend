import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys, onRemoveToy, onSelectToy }) {

    return (
        <section className="toy-layout">
            <ul className="clean-list">
                {toys.map(toy =>
                    <li key={toy._id} onClick={() => onSelectToy(toy._id)}>
                        <ToyPreview toy={toy} />
                        <button onClick={(ev) => onRemoveToy(ev, toy._id)}>x</button>
                    </li>
                )}
            </ul>
        </section>
    )
}