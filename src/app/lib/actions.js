"use server";

import mongoose from "mongoose";
import { connectToDB } from "./utils";
import { Admin } from "./models";

export const fetchCustomers = async () => {
    connectToDB();
    console.log(mongoose.model("Admin"));
    const customers = await mongoose.model("Admin").find({});
    return { customers };
};
