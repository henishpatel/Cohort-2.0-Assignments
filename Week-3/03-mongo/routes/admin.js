const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const app = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
app.post("/signup", (req, res) => {
	// Implement admin signup logic
	try {
		Admin.create({
			username: req.body.username,
			password: req.body.password,
		});
		res.status(200).send({
			success: true,
			message: "Admin created successfully",
		});
	} catch (err) {
		res.status(404).send({
			success: false,
			message: "Error creating admin",
		});
	}
});

app.post("/courses", adminMiddleware, (req, res) => {
	// Implement course creation logic
	try {
		Course.create({
			title: req.body.title,
			description: req.body.description,
			price: req.body.price,
			imageLink: req.body.imageLink,
		});
		res.json({
			success: true,
			message: "Course created successfully",
		});
	} catch (err) {
		res.status(404).send({
			success: false,
			message: "Error creating Course",
		});
	}
});

app.get("/courses", adminMiddleware, async (req, res) => {
	// Implement fetching all courses logic
	try {
		const courses = await Course.find();
		res.status(200).send({
			success: true,
			message: "Course List",
			data: courses,
		});
	} catch (err) {
		console.log(err);
		res.status(404).send({
			success: false,
			message: "Error Getting Course",
		});
	}
});

module.exports = app;
