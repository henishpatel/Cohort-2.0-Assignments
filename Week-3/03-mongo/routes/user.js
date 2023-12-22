const { Router } = require("express");
const app = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
// User Routes
app.post("/signup", (req, res) => {
	// Implement user signup logic
	try {
		User.create({
			username: req.body.username,
			password: req.body.password,
		});
		res.status(200).send({
			success: true,
			message: "User created successfully",
		});
	} catch (err) {
		res.status(404).send({
			success: false,
			message: "Error creating User",
		});
	}
});

app.get("/courses", async (req, res) => {
	// Implement listing all courses logic
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

app.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	try {
		const course = await Course.findOne({ _id: req.params.courseId });
		if (course) {
			const user = await User.findOne({
				username: req.headers["username"],
			});
			await User.findByIdAndUpdate(user._id, {
				$push: { courses: req.params.courseId },
			});
			res.status(200).send({
				success: true,
				message: "Course purchased successfully",
			});
		} else {
			res.status(404).send({
				success: false,
				message: "Error while purchasing Course",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(404).send({
			success: false,
			message: "Error Getting Course",
		});
	}
});

app.get("/purchasedCourses", userMiddleware, async (req, res) => {
	// Implement fetching purchased courses logic
	try {
		const user = await User.findOne({ username: req.headers["username"] });
		if (user) {
			const purchasedCourses = await Course.find({
				_id: { $in: user.courses },
			});

			res.status(200).send({
				success: true,
				courses: purchasedCourses,
			});
		} else {
			res.status(404).send({
				success: false,
				message: "User not found",
			});
		}
	} catch (err) {
		console.log(err);
		res.status(404).send({
			success: false,
			message: "Error Getting Course",
		});
	}
});

module.exports = app;
