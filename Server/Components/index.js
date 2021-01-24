const MongoSchema = require("./studentSchema")
const controller = require("./studentController")

module.exports = {
	mongoSchema: MongoSchema,
	controller,
}
