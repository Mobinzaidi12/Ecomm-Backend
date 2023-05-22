const { Router } = require("express");
const productRouter = require("./productRoutes");
const userRouter = require("./userRoutes");

const appRouter = Router()

appRouter.use('/user', userRouter)
appRouter.use('/product', productRouter)



module.exports = appRouter;