import express from "express"
import { getExco } from "../../controllers/executives.controller.js"
import { getAdvert } from "../../controllers/advert.controller.js"
import { getEvents } from "../../controllers/event.controller.js"
import { getSponsor } from "../../controllers/sponsor.controller.js"
import { geteventImages } from "../../controllers/eventImages.controller.js"
const userRouter = express.Router()

userRouter.get("/getExco", getExco)
userRouter.get("/getAdverts", getAdvert)
userRouter.get("/getEvents",getEvents)
userRouter.get("/getSponsors", getSponsor)
userRouter.get("/getEventImages", geteventImages)

export default userRouter

