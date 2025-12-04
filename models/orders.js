const mongoose = require("mongoose");
const { Schema } = mongoose;
let MONGOOSE_URL = "mongodb://127.0.0.1:27017/relationship";
main().then(() => console.log("Connect to the DB")).catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGOOSE_URL)
}

const orderSchema = new Schema({
    item: String,
    price: Number
})

const Order = mongoose.model("Order", orderSchema)

const addOrder = async () => {
    const result = await Order.insertMany([{ item: "Samosa", price: 10 }, { item: "Chocolate", price: 40 }, { item: "Chips", price: 20 }])
    console.log(result)
}

addOrder();