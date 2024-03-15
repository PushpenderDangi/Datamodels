import mongoose from 'mongoose'

const orderItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product"
        },
        quantity: {
            type: Number,
            required: true
        }
    })
const orderSchema = new mongoose.Schema(
    {
        orderPrice: {
            type: String,
            required: true,
        },
        customer: {
            type: mongoose.Schema.types.ObjectId,
            ref: "User",
        },
        orderItems: {
            type: [orderItemSchema]
        },
        address: {
            type: String,
            required: true
        },
        statud: {
            type: String,
            enum: ["Pending", "Cancelled", "Delivered"], //gives choices so that we can select.
            default: "Pending"
        }
    }
    ,{timestamps:true})

export const Order = mongoose.model("Order", orderSchema)