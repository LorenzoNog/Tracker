import express from 'express'
import cors from 'cors'
import config from './config.js'
import './persistence/mongoDB/configMongo.js'
import cookieParser from 'cookie-parser'
import ExpenseRouter from './routes/expense.route.js'
import IncomeRouter from './routes/income.route.js'
import ViewsRouter from './routes/views.route.js'
import UsersRouter from './routes/users.route.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())

app.use("/", ViewsRouter)
app.use("/incomes", IncomeRouter)
app.use("/expenses", ExpenseRouter)
app.use("/users", UsersRouter)



app.listen(config.PORT, () => {
    console.log(`Escuchando al puerto ${config.PORT}`)
})