const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const listingControllers = require("../controllers/listings.js");
const { isLoggedIn, isOwner, validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

router
  .route("/")
  .get(wrapAsync(listingControllers.index)) //Index route
  .post(
    //Create route
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.createListing)
  );

// Search Route
router.get("/search", isLoggedIn, wrapAsync(listingControllers.search));

// Filter Route
router.get("/filter", isLoggedIn, wrapAsync(listingControllers.filter));

//New route
router.get("/new", isLoggedIn, listingControllers.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingControllers.showListing)) //Show route
  .put(
    //update route
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingControllers.updateListing)
  )
  .delete(
    //delete route
    isLoggedIn,
    isOwner,
    wrapAsync(listingControllers.destroyListing)
  );

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingControllers.renderEditForm)
);

module.exports = router;
