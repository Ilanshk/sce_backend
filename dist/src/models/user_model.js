"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const userSchema = new mongoose_1.default.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: false
    },
    userImageUrl: {
        type: String,
        required: false
    },
    //If we let the user to enter the app from multiple places like personal computer,phone,tablet,etc.
    //then we keep a refresh token for each instance of the app
    //If we let the user to enter the app from a single place,then we keep a single refresh token
    tokens: {
        type: [String]
    }
});
exports.default = mongoose_1.default.model("User", userSchema);
//# sourceMappingURL=user_model.js.map