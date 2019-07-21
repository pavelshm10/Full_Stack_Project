const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
//const Customer = require("./customer");
//const Manager = require("./manager");
const server = express();

server.use(cors());

server.use(express.json());

mongoose.connect("mongodb://localhost:27017/market",
    { useNewUrlParser: true }, (err, mongoClient) => {
        if (err) {
            console.log(err);
            return;
        }
        console.log("We're connected to " + mongoClient.name + " database on MongoDB");
    });

//1.
const customerSchema = mongoose.Schema({
    _id: String,
    fname: String,
    lname: String,
    mail: String,
    password: String,
    phone: String,
    city: String,
    street: String,
    houseNumber: Number
});

const Customer = mongoose.model("Customer", customerSchema, "customers");

//2.
const managerSchema = mongoose.Schema({
    fname: String,
    lname: String,
    mail: String,
    password: String
});

const Manager = mongoose.model("Manager", managerSchema, "managers");

//3.
const categorySchema = mongoose.Schema({
    _id:Number ,
    categoryName: String
});

const Category = mongoose.model("Category", categorySchema, "categories");

//4.
const productSchema = mongoose.Schema({
    productName: String,
    catrgoryId: { type: Number, ref: "Category" },
    price: Number,
    pictureName: String
    //cartItem: { type: mongoose.Schema.Types.ObjectId, ref: "CaerItem"}
});

const Product = mongoose.model("Product", productSchema, "products");

//5.
const cartSchema = mongoose.Schema({
    customerId: { type: String, ref: "Customer" },
    createDate: Date
});

const Cart = mongoose.model("Cart", cartSchema, "carts");


//6.
const cartItemSchema = mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    //productName: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
    amount: Number,
    total: Number,
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" }
});

const CartItem = mongoose.model("CartItem", cartItemSchema, "cartItems");


//7.
const orderSchema = mongoose.Schema({
    customerId: { type: String, ref: "Customer" },
    cartId: { type: mongoose.Schema.Types.ObjectId, ref: "Cart" },
    finalPrice: Number,
    shippingCity: String,
    shippingAdress: String,
    sippingDate: Date,
    carditCardNumber: Number
});


const Order = mongoose.model("Order", orderSchema, "orders");

//customer

server.get("/api/customers", (request, response) => {
    Customer.find({},(err, customers) => {
        if (err) return response.status(500).json(err);
        response.json(customers);
    });
}); 

server.get("/api/customers/:mail&:password", (request, response) => {
    Customer.findOne({ mail: request.params.mail, password: request.params.password}, (err,customer) => {
        if (err) return response.status(500).json(err);
        response.json(customer);
    });
});

server.post("/api/customers", (request, response) => {
    const customer = new Customer(request.body);
    customer.save((err, customer) => {   
        if (err) return response.status(500).json(err);
        return response.status(201).json(customer);
    });
});

//order
server.get("/api/orders", (request, response) => {
    Order.find({}).populate("customer cart").exec((err, orders) => {
        if (err) return response.status(500).json(err);
        response.json(orders);
    });
});

server.get("/api/orders/:customerId", (request, response) => {
    
    Order.findOne({ customerId: request.params.customerId }, (err, order) => {
        if (err) return response.status(500).json(err);
        response.json(order);
    });
});

server.post("/api/orders", (request, response) => {
    const order = new Order(request.body);
    order.save((err, order) => {
        if (err) return response.status(500).json(err);
        return response.status(201).json(order);
    });
});

// server.delete("/api/orders/:_id", (request, response) => {
//     Order.deleteOne({ _id: request.params._id }, (err) => {
//         if (err) return response.status(500).json(err);
//         response.status(204).json();
//     });
// });

// server.patch("/api/orders/:_id", (request, response) => {
//     const order = new Order(request.body);
//     order._id = request.params._id;
//     order.updateOne({ _id: request.params._id }, order, (err) => {
//         if (err) return response.status(500).json(err);
//         response.json(order);
//     });
// });

//cart

server.get("/api/carts", (request, response) => {
    Cart.find({}).populate("customer").exec((err, carts) => {
        if (err) return response.status(500).json(err);
        response.json(carts);
    });
});

server.get("/api/carts/:customerId", (request, response) => {
    Cart.findOne({ customerId: request.params.customerId }, (err, cart) => {
        
        if (err) return response.status(500).json(err);
        response.json(cart);
    });
});

server.post("/api/carts", (request, response) => {
    const cart = new Cart(request.body);
    cart.save((err, cart) => {
        if (err) return response.status(500).json(err);
        return response.status(201).json(cart);
    });
});


// server.patch("/api/carts/:customerId", (request, response) => {
//     const cart = new Order(request.body);
//     cart.updateOne({ customerId: request.params.customerId }, order, (err) => {
//         if (err) return response.status(500).json(err);
//         response.json(cart);
//     });
// });

// server.delete("/api/carts/:customerId", (request, response) => {
//     Cart.deleteOne({ customerId: request.params.customerId }, (err) => {
//         if (err) return response.status(500).json(err);
//         response.status(204).json();
//     });
// });

// //cartItem
// server.get("/api/cartItems", (request, response) => {
//     CartItem.find({}).populate("cart","product").exec((err, cartItems) => {
//         if (err) return response.status(500).json(err);
//         response.json(cartItems);
//     });
// });

server.post("/api/cartItems", (request, response) => {
    const cartItem = new CartItem(request.body);
    cartItem.save((err, cartItem) => {
        if (err) return response.status(500).json(err);
        return response.status(201).json(cartItem);
    });
});


server.get("/api/cartItems/:cartId", (request, response) => {
    CartItem.find({cartId: request.params.cartId}).populate({path:"productId",select:"productName"}).populate("cart").exec((err, cartItems) => {
        if (err) return response.status(500).json(err);
        response.json(cartItems);
    });
});


// server.patch("/api/cartItems/:_id", (request, response) => {
//     const cartItem = new CartItem(request.body);
//     cartItem._id = request.params._id;
//     cartItem.updateOne({ _id: request.params._id }, cartItem, (err) => {
//         if (err) return response.status(500).json(err);
//         response.json(cartItem);
//     });
// });

// server.delete("/api/cartItems/:_id", (request, response) => {
//     CartItem.deleteOne({ _id: request.params._id }, (err) => {
//         if (err) return response.status(500).json(err);
//         response.status(204).json();
//     });
// });

//manager
// server.get("/api/managers", (request, response) => {
//     Manager.find({}, (err, managers) => {
//         if (err) return response.status(500).json(err);
//         response.json(mangers);
//     });
// });


// server.post("/api/managers", (request, response) => {
//     const manager = new Manger(request.body);
//     manager.save((err, customer) => {
//         if (err) return response.status(500).json(err);
//         return response.status(201).json(manager);
//     });
// });

// //category
server.get("/api/categories", (request, response) => {
    Category.find({}, (err, categories) => {
        if (err) return response.status(500).json(err);
        response.json(categories);
    });
});

// server.post("/api/categories", (request, response) => {
//     const category = new Category(request.body);
//     category.save((err, category) => {
//         if (err) return response.status(500).json(err);
//         return response.status(201).json(category);
//     });
// });

// product
server.get("/api/products", (request, response) => {
    Product.find({}).populate("category").exec((err, products) => {
        if (err) return response.status(500).json(err);
        response.json(products);
    });
});

server.post("/api/products", (request, response) => {
    const product = new Product(request.body);
    product.save((err, product) => {
        if (err) return response.status(500).json(err);
        return response.status(201).json(product);
    });
});

server.patch("/api/products/:_id", (request, response) => {
    const product = new Product(request.body);
    product._id = request.params._id;
    Product.updateOne({ _id: request.params._id }, product, (err) => {
        if (err) return response.status(500).json(err);
        response.json(product);
    });
});

server.delete("/api/products/:_id", (request, response) => {
    Product.deleteOne({ _id: request.params._id }, (err) => {
        if (err) return response.status(500).json(err);
        response.status(204).json();
    });
});



server.listen(3000, () => {
    console.log("Listening on http://localhost:3000");
});