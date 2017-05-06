module.exports = function hideMe(box) {
    var visible = $(box).is(':visible');
    console.log(visible);

    if (visible === true) {
    	console.log("hey")
        $(box).hide();
    } else {
    	console.log("nah")
        $(box).show();
    }
};
