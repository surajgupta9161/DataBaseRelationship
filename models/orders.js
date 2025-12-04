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

const custSchema = new Schema({
    name: String,
    orders: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Order'
        }
    ]
})

const Order = mongoose.model("Order", orderSchema)
const Customer = mongoose.model("Customer", custSchema)

const addOrder = async () => {
    const result = await Order.insertMany([{ item: "Samosa", price: 10 }, { item: "Chocolate", price: 40 }, { item: "Chips", price: 20 }])
    console.log(result)
}

const addCustomer = async () => {
    const cust1 = new Customer({
        name: "Suraj Gupta"
    })
    let order1 = await Order.findOne({ item: "Samosa" })
    let order2 = await Order.findOne({ item: "Chips" })

    cust1.orders.push(order1)
    cust1.orders.push(order2)

    let result = cust1.save()
    console.log(result);

}
addCustomer()
// addOrder();