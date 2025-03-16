const mongoose = require("mongoose");

module.exports = () => {
	try {
		mongoose.connect(process.env.DB, {
			serverSelectionTimeoutMS: 5000, // Timeout for MongoDB connection
		});
		console.log("Connected to database successfully");
	} catch (error) {
		console.error("Could not connect to database!", error);
	}
};