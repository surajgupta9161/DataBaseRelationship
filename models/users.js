const mongoose = require("mongoose");
const { Schema } = mongoose;
let MONGOOSE_URL = "mongodb://127.0.0.1:27017/relationship";
main().then(() => console.log("Connect to the DB")).catch(err => console.log(err));
async function main() {
    await mongoose.connect(MONGOOSE_URL)
}

const userSchema = new Schema({
    username: String,
    addresses: [
        {
            _id: false,
            location: String,
            city: String
        }
    ]
})

const user = mongoose.model("user", userSchema);

const adduser = async () => {
    let user1 = new user({
        username: "Suraj Gupta",
        addresses: [
            {

                location: "223B BKT Bhaisamau",
                city: "Lucknow"
            },
            {
                location: "Karmaini 272206",
                city: "Siddharth Nagar"
            }
        ]
    })

    const result = await user1.save();
    console.log(result);
}

adduser();