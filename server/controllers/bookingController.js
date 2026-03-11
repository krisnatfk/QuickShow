import Booking from "../models/Booking.js";
import Show from "../models/Show.js"


// Function to check availablelity of select seat for a movie
const checkSeatsAvailability = async (showId, selectedSeats) => {
    try {
        const showData = await Show.findById(showId)
        if(!showData) return false;

        const occupiedSeats = showData.occupiedSeats;

        const isAnySeatTaken = selectedSeats.some(seat => occupiedSeats[seat]);

        return !isAnySeatTaken;
    } catch (error) {
        console.log(error.message);
        return false;
        
    }
}

export const createBooking = async (req, res)=> {
    try {
        const {userId} = req.auth();
        const {showId, selectedSeats} = req.body;
        const {origin} = req.headers;

        // check if seat is available for the  selected show
        const isAvailable = await checkSeatsAvailability(showId, selectedSeats);

        if (!isAvailable) {
            returnres.json({success: false, message: "Selected Seat are not available."});
        }

        // get show detail
        const showdata = await Show.findById(showId).populate('movie');

        // create new booking
        const booking = await Booking.create({
            user: userId,
            show: showId,
            amount: showdata.showPrice * selectedSeats.length,
            bookedSeats: selectedSeats
        })

        selectedSeats.map((seat)=> {
            showdata.occupiedSeats[seat] = userId;
        })

        showdata.markModified('occupiedSeats');

        await showdata.save();

        // stripe gateway instalize

        res.json({success: true, massege: 'Booked Successfully'});


    } catch (error) {
        console.log(error.message);
        res.json({success: false, massege: error.message});
    }
}

export const getOccupiedSeats = async (req, res) => {
    try {
        
        const {showId} = req.params;
        const showData = await Show.findById(showId)

        const occupiedSeats = Object.keys(showData.occupiedSeats)

        res.json({success: true, occupiedSeats})

    } catch (error) {
        console.log(error.message);
        res.json({success: false, massege: error.message});
    }
}