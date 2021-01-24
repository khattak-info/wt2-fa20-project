const mongoose = require("mongoose")
const connectionString = "mongodb://localhost:27017/WT2-PROJECT"

const Students = require("../components")

const mongooseOptions = {
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true,
	useUnifiedTopology: true,
}

mongoose.connect(connectionString, mongooseOptions)

const Student = mongoose.model("Student", Students.mongoSchema)
const adminEmail = "aahmed.bese17seecs@seecs.edu.pk"
async function seedStudent(Model) {
	const found = await Model.findOne({ email: adminEmail })
	if (!found) {
		await Model.create({
			name: "Afaq Ahmed",
            email: adminEmail,
            cms:215185,
            bio:"I am passionationate web developer with 2-years of experience in web application development in various startups. I am currently doing Bachelors in Software Engineering from NUST. I am 22 years old.",
            github:"https://github.com/afaq2327",
            address:"Islamabad,Pakistan."
		})
	}
}

seedStudent(Student)


module.exports = Student