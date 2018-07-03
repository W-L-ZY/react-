let express = require( 'express' );
let login = require( './login' );
let router = express.Router();

router.use( '/',login );

module.exports = router;