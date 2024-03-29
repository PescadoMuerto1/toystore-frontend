import Checkbox from '@mui/material/Checkbox'
import FavoriteBorder from '@mui/icons-material/FavoriteBorder'
import Favorite from '@mui/icons-material/Favorite'

import toyImg from '../assets/img/img1.webp'

export function ToyPreview({ toy, handleLikeToy }) {
    const label = { checked: false }
    return (
        <>
            <img src={toyImg} />
            <h3>{toy.name}</h3>
            <h4>{toy.price}</h4>
            <Checkbox
                className='liked'
                onClick={ev => handleLikeToy(ev, toy)}
                checked={toy.favorite ? true : false}
                icon={<FavoriteBorder />}
                checkedIcon={<Favorite />}
                sx={{
                    color: '#FF9689',
                    '&.Mui-checked': {
                        color: '#FF9689',
                    }
                }} />
        </>
    )
}