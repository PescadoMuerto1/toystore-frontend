import { ToyPreview } from "./ToyPreview"

export function ToyList({ toys, onRemoveToy, onSelectToy }) {

    return (
       
            <ul className="toy-list toys-layout clean-list">
                {toys.map(toy =>
                    <li key={toy._id} className='toy-preview' onClick={() => onSelectToy(toy._id)}>
                        <ToyPreview toy={toy} />
                        <div className="btns-container">
                            <button onClick={(ev) => onRemoveToy(ev, toy._id)}>delete</button>
                            <button onClick={(ev) => onSelectToy(ev, toy._id)}>details</button>
                        </div>
                    </li>
                )}
            </ul>
        
    )
}