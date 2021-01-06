const getPets = async () => [ // mock, en el futuro deberia consultar al backend
    {
        name: "Toto",
        img: "https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg",
        birthday: new Date("2020-01-01"),
        id: 1,
        adopted: true
    },
    {
        name: "Jason",
        img: "https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/HB4AT3D3IMI6TMPTWIZ74WAR54.jpg",
        birthday: new Date("2015-01-01"),
        id: 2,
        adopted: true
    },
    {
        name: "Mike",
        img: "https://i.ytimg.com/vi/MPV2METPeJU/maxresdefault.jpg",
        birthday: new Date("2017-01-01"),
        id: 3,
        adopted: false
    },
    {
        name: "Rover",
        img: "https://www.thespruce.com/thmb/YJn7I1UJXis9JdnQHHbmDUsRD8E=/1204x903/smart/filters:no_upscale()/plants-poisonous-to-dogs-2132451-hero-1e4d76f8e1eb47449ab00084b22dd2d0.jpg",
        id: 4,
        birthday: new Date("2015-01-01"),
        adopted: false
    },
    {
        name: "Coco",
        img: "https://www.humanesociety.org/sites/default/files/styles/768x326/public/2020-07/dog-518805.jpg?h=e22bf01e&itok=uE4KGkuj",
        birthday: new Date("2020-01-01"),
        id: 1,
        adopted: true
    },
    {
        name: "Max",
        img: "https://thecatandthedog.com/wp-content/uploads/2020/11/105992231-1561667465295gettyimages-521697453.jpeg",
        birthday: new Date("2021-01-01"),
        id: 2,
        adopted: false
    }
]

export default getPets