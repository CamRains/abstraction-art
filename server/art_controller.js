let artGallery = [
    {
        name: 'Its Magic',
        url: 'https://cdn.shopify.com/s/files/1/2701/1798/products/it_s_magic_print_300x300.jpg?v=1534364007',
        artist: 'Kerri Rosenthal',
        price: 300,
        id: 0
    },
    {
        name: 'Brooklyn Bridge Reverberation',
        url: 'http://www.susanpowellfineart.com/wp-content/uploads/2018/05/David-Dunlop-Brooklyn-Bridge-Reverberations-Oil-on-aluminum-24-x-24-inches-300x300.jpg',
        artist: 'John Grayhound',
        price: 250,
        id: 1
    },
    {
        name: 'Mountains Wave',
        url: 'https://childsgallery.com/wp-content/uploads/jill_whitney_armstrong_the_rapids_18-05-armstrong-01_childs_gallery-1-300x300.jpg',
        artist: 'Susan Powell - David Dunlop',
        price: 400,
        id: 2
    },{
        name: 'Groovy Day',
        url: 'https://render.fineartamerica.com/images/rendered/search/print/8.000/8.000/break/images-medium-5/finding-paradise-jennifer-lommers.jpg',
        artist: 'Alice Green',
        price: 120,
        id: 3
    },
    {
        name: 'Shapes',
        url: 'https://www.overstockart.com/blog/wp-content/uploads/2017/07/blue-painting-cropped-300x300.jpg',
        artist: 'Barbara Row',
        price: 700,
        id: 3
    },
    {
        name: 'Sun Warmth',
        url: 'http://withdigitaleyes.com/wp-content/uploads/Amberweb-300x300.jpg',
        artist: 'Jared L. Abrams',
        price: 200,
        id: 4
    },
    {
        name: 'Color Twist',
        url: 'https://static1.squarespace.com/static/533ef944e4b0cccdfc39f46a/t/591a0c2715cf7d9476ba8641/1497205348136/Abstract+Art+Naples+FL?format=300w',
        artist: 'Susan Smith',
        price: 350,
        id: 5
    },
    {
        name: 'Splash',
        url: 'https://julienitz.com/wp-content/uploads/2018/08/JLN_white_color_abstract-300x300.jpg',
        artist: 'Jim Howler',
        price: 400,
        id: 6
    },
    {
        name: 'Artsy Boxes',
        url: 'https://www.xookart.com/wp-content/uploads/2018/06/abstract-canvas-paintings-300x300.jpg',
        artist: 'John Love',
        price: 500,
        id: 7
    }
];
let id = 8;
let faveArray = [];

module.exports = {
    getArt: (req, res) => {
        res.status(200).json(artGallery)
    },
    createArt: (req, res) => {
        id++
        let {name, url, artist, price} = req.body;
        let newArt = {
            name: name,
            url: url,
            artist: artist,
            price: price,
            id: id
        };
        artGallery.push(newArt);
        res.status(200).json(artGallery)
    },
    editArt: (req, res) => {
        let {id} = req.params;
        let {name, artist } = req.body;
        let newArt = artGallery.findIndex(art => {
           return +id === art.id
        })
        if(newArt === -1){
            res.status(404).send(`Art piece with id ${id} does now exist`)
        }else {
            artGallery[newArt].name = name;
            artGallery[newArt].artist = artist;
            res.json(artGallery)
        }
    },
    bidEdit: (req, res) => {
        let {id} = req.params;
        let {newPrice} = req.body;
        let newArt = artGallery.findIndex(art => {
           return +id === art.id
        })
        if(newArt === -1){
            res.status(404).send(`Art piece with id ${id} does now exist`)
        }else {
            console.log(req.body)
            artGallery[newArt].price = parseInt(newPrice);
            res.json(artGallery)
        }
    },
    deleteArt: (req, res) => {
    let {id} = req.params;
        let newArt = artGallery.findIndex(art => {
           return +id === art.id
        })
        if(newArt === -1){
            res.status(404).send(`Art piece with id ${id} does now exist`)
        }else {
            artGallery.splice(newArt, 1)
            res.json(artGallery)
        }
    }
}