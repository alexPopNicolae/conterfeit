var express = require('express');
var app = express();
var cors = require('cors');
var PORT = 4002;

app.use(cors());

var products = [
    {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2016",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
    },
    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
    },
    {
        "productId": 8,
        "productName": "Saw",
        "productCode": "TBX-0022",
        "releaseDate": "May 15, 2016",
        "description": "15-inch steel blade hand saw",
        "price": 11.55,
        "starRating": 3.7,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png"
    },
    {
        "productId": 10,
        "productName": "Video Game Controller",
        "productCode": "GMG-0042",
        "releaseDate": "October 15, 2015",
        "description": "Standard two-button video game controller",
        "price": 35.95,
        "starRating": 4.6,
        "imageUrl": "http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png"
    }
];

var users = [
    {
        userId:1,
        userName:'Pop Nicolae-Alexandru',
        userEmail:'alexpop@gmail.com',
        description:'cel mai smecher baiat'
    },
    {
        userId:2,
        userName:'Ioana Nicoleta Pop',
        userEmail:'ioana_haja@gmail.com',
        description:'ce mai tare fata'
    },
    {
        userId:3,
        userName:'Mama',
        userEmail:'mama@gmail.com',
        description:'cel mai tare din parcate'
    },
    {
        userId:4,
        userName:'Tata',
        userEmail:'tata@gmail.com',
        description:'cel mai tare din parcare cand parcarea era goala'
    }
];

app.get('/products', function(req, res) {
    setTimeout(()=>{
        res.json(products);
    }, 1000)
});

app.get('/users', function(req, res) {
    res.json(users);
});

app.listen(PORT);
console.log("Server Listening on port: " + PORT);