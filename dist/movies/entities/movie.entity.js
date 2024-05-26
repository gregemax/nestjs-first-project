"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Movie = void 0;
const mongoose = require("mongoose");
exports.Movie = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'movie name is a required filed'],
        unique: true,
    },
    duration: {
        type: Number,
    },
    createAt: {
        type: Date,
        default: Date.now()
    },
    ratings: {
        type: Number,
        default: 1.0
    }
});
//# sourceMappingURL=movie.entity.js.map