const express = require("express")
const app = express()
const stripe = require("stripe")("sk_test_51OGXX3CatlryZd5sh55KFkOglkoQ1S5qbmkqdSt0kt0FrKl1HJutxYaXkL0F3439HHY2rYRwG8cuxC5ZwBXRuk2O00aBYdULny")
const bodyParser = require("body-parser")
const cors = require("cors")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/payment", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Redmi UZ Shop",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

app.listen(process.env.PORT || 4000, () => {
	console.log("Sever is listening on port 4000")
})