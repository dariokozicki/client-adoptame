import {getPets} from './PetsApi'

export const getFavoriteIds: (userId: string | undefined) => string[] = (userId) => {
    if (!userId){
        return getFavoritesFromCache();
    } else {
        return ['1','2','3','4'] // axios.get ...
    }
}

const getFavoritesFromCache: () => string[] = () => {
    const petIdsString = localStorage.getItem('favoritePetIds')
    if (!petIdsString){
        localStorage.setItem('favoritePetIds', JSON.stringify([]))
        return []
    } else {
        return (JSON.parse(petIdsString) as string[])
    }
}

const setFavorites = async (userId: string | undefined, favorites: string[]) => {
    if(!userId)
        localStorage.setItem('favoritePetIds', JSON.stringify(favorites))
    else ;
        // to do
}


export const addFavorite = async (userId: string | undefined, petId: string) => {
    setFavorites(userId, getFavoriteIds(userId).concat(petId))
}

export const removeFavorite = async (userId: string | undefined, petId: string) => {
    setFavorites(userId, getFavoriteIds(userId).filter(fav => fav !== petId))
}

export const getFavorites = async (userId: string | undefined) => {
    const pets = await getPets();
    return pets.filter(pet => getFavoriteIds(userId).includes(pet.id))
}