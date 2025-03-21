import express from "express"
import {uploadExco,getExco} from "../../controllers/images.cloudinary.js"
import { postAdvert } from "../../controllers/advert.controller.js"
import { postEvents } from "../../controllers/event.controller.js"
import { postSponsor } from "../../controllers/sponsor.controller.js"
import { eventImages } from "../../controllers/eventImages.controller.js"
import signup from "../../controllers/signup.controller.js"
import login from "../../controllers/login.controller.js"
import authAdmin from "../../auth/admin.auth.js"
const adminRouter = express.Router()



adminRouter.post("/login",login)
adminRouter.post("/signup", signup)

adminRouter.use(authAdmin)
adminRouter.post("/uploadExco",uploadExco)
adminRouter.post("/postAdvert", postAdvert)
adminRouter.post("/postEvent", postEvents)
adminRouter.post("/postSponsor", postSponsor)
adminRouter.post("/postEventImages", eventImages)
export default adminRouter

