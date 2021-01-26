
export type PetProps = {
    name: string,
    img: string,
    dateRegister: Date,
    id: number,
    birthday: Date,
    adopted: boolean,
    breed: string,
    species: string,
    sex: string,
    neutered: boolean,
    ageCategory: string,
    size: string,
    shelterId: number
}

const getPets: () => Promise<PetProps[]> = async ()=> [ // mock, en el futuro deberia consultar al backend
    {
        name: "Toto",
        img: "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        birthday: new Date("2020-01-01"),
        id: 1,
        adopted: true,
        breed: "Golden Retriever",
        species: "Perro",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Jason",
        img: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg",
        birthday: new Date("2015-01-01"),
        id: 2,
        adopted: true,
        breed: "Poodle",
        species: "Perro",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Mike",
        img: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
        birthday: new Date("2017-01-01"),
        id: 3,
        adopted: false,
        breed: "Bulldog",
        species: "Perro",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Rover",
        img: "https://www.thespruce.com/thmb/YJn7I1UJXis9JdnQHHbmDUsRD8E=/1204x903/smart/filters:no_upscale()/plants-poisonous-to-dogs-2132451-hero-1e4d76f8e1eb47449ab00084b22dd2d0.jpg",
        id: 4,
        birthday: new Date("2015-01-01"),
        adopted: false,
        breed: "German Shepherd",
        species: "Perro",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Coco",
        img: "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2020-07/dog-518805.jpg?h=e22bf01e&itok=uE4KGkuj",
        birthday: new Date("2020-01-01"),
        id: 5,
        adopted: true,
        breed: "Beagle",
        species: "Perro",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Max",
        img: "https://thecatandthedog.com/wp-content/uploads/2020/11/105992231-1561667465295gettyimages-521697453.jpeg",
        birthday: new Date("2021-01-01"),
        id: 6,
        adopted: false,
        breed: "Golden Retriever",
        species: "Perro",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Minino",
        img: "https://estaticos.muyinteresante.es/media/cache/1140x_thumb/uploads/images/gallery/594a1ced5bafe85dfd3c9869/gato-romano_0.jpg",
        birthday: new Date("2021-01-01"),
        id: 7,
        adopted: false,
        breed: "Golden Retriever",
        species: "Gato",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    },
    {
        name: "Michi",
        img: "https://www.infobae.com/new-resizer/oWZXB8xLLNfiTgqgTJ49AfA5cFk=/420x236/filters:format(jpg):quality(85)/arc-anglerfish-arc2-prod-infobae.s3.amazonaws.com/public/3KJ4AFYLUZAG7DYO7IJULMZ3P4.jpg",
        birthday: new Date("2021-01-01"),
        id: 8,
        adopted: false,
        breed: "Golden Retriever",
        species: "Gato",
        sex: "Male",
        neutered: true,
        ageCategory: "Cachorro",
        size: "Small",
        dateRegister: new Date("2020-01-01"),
        shelterId: 1
    }
]


const getPetsFiltered: (petModel: Partial<PetProps>) => Promise<PetProps[]> = async (petModel) => {
    return getPets().then(pets => pets.filter(pet => 
        Object.keys(petModel).every((key: string) =>{ 
            const valueModel = (petModel as any)[key]
            if(key === "species" && valueModel === "Todos") return true
            const value = (pet as any)[key]
            switch(typeof valueModel){
                case 'string': return ((value as string).toLowerCase()).includes((valueModel as string).toLowerCase())
                case 'number':
                case 'boolean': 
                    return value === valueModel
                default: return true
            }
        })
    ))
}

const getSpecies = async () => [
    "Todos",
    "Perro",
    "Gato"
]

export {getPetsFiltered, getSpecies}