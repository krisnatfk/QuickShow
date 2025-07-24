import { Inngest } from "inngest";
import User from "../models/User.js";

export const inngest = new Inngest({ id: "movie-ticket-booking" });

// save user to database
const syncUserCreation = inngest.createFunction(
    {id: 'sync-user-from-clerk'},
    {event: 'clerk/user.created'},
    async ({event}) => {
        try {
            const {id, first_name, last_name, email_addresses, image_url} = event.data;
            const userData = {
                _id: id,
                email: email_addresses[0].email_address,
                name: `${first_name} ${last_name}`,
                image: image_url
            };
            await User.create(userData);
            return { success: true, message: 'User created successfully' };
        } catch (error) {
            console.error('Error in syncUserCreation:', error);
            throw error; // This will mark the function as failed in Inngest
        }
    }
);

// inngest delete user
const syncUserDeletion = inngest.createFunction(
    {id: 'delete-user-with-clerk'},
    {event: 'clerk/user.deleted'},
    async ({event}) => {
        try {
            const {id} = event.data;
            await User.findByIdAndDelete(id);
            return { success: true, message: 'User deleted successfully' };
        } catch (error) {
            console.error('Error in syncUserDeletion:', error);
            throw error;
        }
    }
);

// inngest update user
const syncUserUpdation = inngest.createFunction(
    {id: 'update-user-from-clerk'},
    {event: 'clerk/user.updated'},
    async ({event}) => {
        try {
            const {id, first_name, last_name, email_addresses, image_url} = event.data;
            const userData = {
                email: email_addresses[0].email_address,
                name: `${first_name} ${last_name}`,
                image: image_url
            };
            await User.findByIdAndUpdate(id, userData, { new: true });
            return { success: true, message: 'User updated successfully' };
        } catch (error) {
            console.error('Error in syncUserUpdation:', error);
            throw error;
        }
    }
);

export const functions = [syncUserCreation, syncUserDeletion, syncUserUpdation];