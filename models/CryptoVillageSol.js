import mongoose from "mongoose";
const { Schema } = mongoose;

const CryptoVillageSolSchema = new mongoose.Schema({
    discordID: {
        type: String,
        required: true,
        unique: true
    },
    wallet: {
        type: String,
        required: true,
        unique: true
    },
    tokenID: {
        type: Number,
        required: true,
        unique: true
    },
    expires: {
        type: Number,
        required: true 
    }
}, { timestamps: true } );

export default mongoose.model('CryptoVillageSol', CryptoVillageSolSchema)