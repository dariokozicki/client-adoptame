export type RefugeProps = {
    id: string,
    name: string,
    telefono: string,
    facebook: string,
    website: string,
    img: string,
    ubicacion: string,
    detalle: string
}

export const getRefuges: () => Promise<RefugeProps[]> = async () => [
    {
        id: "1",
        name: "El Campito Refugio",
        telefono: "+123 456 789",
        facebook: "http://facebook.com/animalitos",
        website: "http://animalitos.com",
        img: "http://www.fullaventura.com/notas/thumbs/736_1.jpg",
        ubicacion: "Recoleta 123",
        detalle: "Somos unos grosos"
    },
    {
        id: "2",
        name: "Otro refugio de animales",
        telefono: "+123 456 789",
        facebook: "http://facebook.com/animalitos",
        website: "http://animalitos.com",
        img: "https://steemitimages.com/p/2gsjgna1uruvUuS7ndh9YqVwYGPLVszbFLwwpAYXZ1AcBHnMZLSsSGrnYACxvLD1ATvAGJujRUcEmzHDRYr2GD9prC4DpbyBD2qVdUetHokmyR5Pav?format=match&mode=fit&width=640",
        ubicacion: "Recoleta 123",
        detalle: "Somos unos capos"
    },
    {
        id: "3",
        name: "Otro refugio de animales 2",
        telefono: "+123 456 789",
        facebook: "http://facebook.com/animalitos",
        website: "http://animalitos.com",
        img: "https://image.shutterstock.com/image-vector/logo-pet-shop-veterinary-clinic-600w-609115460.jpg",
        ubicacion: "Recoleta 123",
        detalle: "Estamos bien"
    }
]

