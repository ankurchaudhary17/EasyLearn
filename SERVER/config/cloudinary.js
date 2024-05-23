const cloudinary = require("cloudinary").v2; //! Cloudinary is being required

exports.cloudinaryConnect = () => {
	try {
		cloudinary.config({
			//!    ########   Configuring the Cloudinary to Upload MEDIA ########
			cloud_name: "dqwhm4byc",
			api_key: "721463979462567",
			api_secret: "Nt6ysuBcK5iMmv5u6Zz-8-Rjjzs",
		});
	} catch (error) {
		console.log(error);
	}
};
