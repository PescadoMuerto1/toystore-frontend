
import { storageService } from './async-storage.service.js'
import { utilService } from './util.service.js'

const STORAGE_KEY = 'toyDB'
_createToys()

export const toyService = {
    query,
    getById,
    save,
    remove,
    getEmptyToy,
    getDefaultFilter
}

function query(filterBy = {}) {
    return storageService.query(STORAGE_KEY)
        .then(toys => {
            if (!filterBy.txt) filterBy.txt = ''
            if (!filterBy.maxPrice) filterBy.maxPrice = Infinity
            const regExp = new RegExp(filterBy.txt, 'i')
            return toys.filter(toy =>
                regExp.test(toy.vendor) &&
                toy.price <= filterBy.maxPrice
            )
        })
}

function getById(toyId) {
    return storageService.get(STORAGE_KEY, toyId)
}

function remove(toyId) {
    return storageService.remove(STORAGE_KEY, toyId)
}


function save(toy) {
    if (toy._id) {
        return storageService.put(STORAGE_KEY, toy)
    } else {
        toy.owner = userService.getLoggedinUser()
        return storageService.post(STORAGE_KEY, toy)
    }
}


function getEmptyToy() {
    return {
        name: '',
        price: 0,
        // labels: ['Doll', 'Battery Powered', 'Baby'],
        createdAt: Date.now(),
        inStock: true,
    }
}

function getDefaultFilter() {
    return { txt: '', maxPrice: '' }
}

function _createToys() {
    let toys = utilService.loadFromStorage(STORAGE_KEY)
    if (!toys || !toys.length) {

        toys = [
            {
                _id: 't101',
                name: 'Talking Doll',
                price: 123,
                labels: ['Doll', 'Battery Powered', 'Baby'],
                createdAt: 1631031801011,
                inStock: true
            },
            {
                _id: 't102',
                name: 'Remote Control Car',
                price: 45,
                labels: ['Car', 'Remote Controlled', 'Toy'],
                createdAt: 1631031801022,
                inStock: true
            },
            {
                _id: 't103',
                name: 'Building Blocks Set',
                price: 30,
                labels: ['Building Blocks', 'Educational', 'Creative'],
                createdAt: 1631031801033,
                inStock: true
            },
            {
                _id: 't104',
                name: 'Stuffed Teddy Bear',
                price: 20,
                labels: ['Teddy Bear', 'Soft Toy', 'Cuddly'],
                createdAt: 1631031801044,
                inStock: false
            },
            {
                _id: 't105',
                name: 'Puzzle Game',
                price: 15,
                labels: ['Puzzle', 'Brain Teaser', 'Educational'],
                createdAt: 1631031801055,
                inStock: true
            }
        ]
    }
    utilService.saveToStorage(STORAGE_KEY, toys)
}