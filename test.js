const {dec, inc} = require("./index.js");

if(inc(1) !== 2){
	throw("Error");
}
if(dec(2) !== 1)
	throw("Error");
