import express from "express"
import {uploadExco,getExco, deleteExco} from "../../controllers/executives.controller.js"
import { deleteAdvert, postAdvert } from "../../controllers/advert.controller.js"
import { deleteEvent, postEvents } from "../../controllers/event.controller.js"
import { deleteSponsor, postSponsor } from "../../controllers/sponsor.controller.js"
import { deleteEventImage, eventImages } from "../../controllers/eventImages.controller.js"
import signup from "../../controllers/signup.controller.js"
import login from "../../controllers/login.controller.js"
import authAdmin from "../../auth/admin.auth.js"
const adminRouter = express.Router()



adminRouter.post("/login",login)
adminRouter.post("/signup", signup)

adminRouter.use(authAdmin)
adminRouter.post("/uploadExco",uploadExco)
adminRouter.post("/deleteExco",deleteExco)
adminRouter.post("/postAdvert", postAdvert)
adminRouter.post("/deleteAdvert",deleteAdvert)
adminRouter.post("/postEvent", postEvents)
adminRouter.post("/deleteEvent", deleteEvent)
adminRouter.post("/postSponsor", postSponsor)
adminRouter.post("/deleteSponsor", deleteSponsor)
adminRouter.post("/postEventImages", eventImages)
adminRouter.post("/deleteEventImages", deleteEventImage)
export default adminRouter



