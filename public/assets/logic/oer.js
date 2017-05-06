function getSlotPosition(positionSlot){
    var first = positionSlot.slice(6)
    var second = first.substring(0,(first.length-4));
    console.log(second);
};



$(document).ready(function() {
    var moveFromBench = $(".selectToSwitch");
    var moveFromActive = $(".selectToSwap");
    var moveToBench = $(".moveToBench");
    var moveToActive = $(".moveToActive");

    moveToBench.hide();
    moveToActive.hide();
    moveFromActive.hide();
    moveFromBench.hide();

    $("#enableEdit").on("click", function() {
        moveFromBench.hide();
        moveFromActive.hide();

        var activeVisibility = moveToActive.is(':visible');
        var benchVisibility = moveToBench.is(':visible');

        if (activeVisibility === true && benchVisibility === true) {
            moveToActive.hide();
            moveToBench.hide();
        } else {
            moveToActive.show();
            moveToBench.show();
        }
    });

    moveToBench.on("click", function() {
        moveToBench.hide();
        moveToActive.hide();

        var selectedClass = ".active" + this.id.slice(4);
        var selectedPlayer = $(selectedClass);
        var activePlayerID = selectedPlayer[0].id;

        console.log(activePlayerID);

        // select player to switch
        moveFromBench.show();
        moveFromBench.on("click", function() {
        	var selectedClass = ".bench" + this.id.slice(14);
        	var selectedPlayer = $(selectedClass)
        	var benchPlayerID = selectedPlayer[0].id;

        	console.log(benchPlayerID)
        })

        // confirm that the player to be switched is the right position for the slot
        // then in db, switch active statuses 
        // the changes should be automatic IF the db moves are valid

    });

    moveToActive.on("click", function() {
        moveToActive.hide();
        moveToBench.hide();

        var selectedClass = ".bench" + this.id.slice(4);
        var selectedPlayer = $(selectedClass);
        var benchPlayerID = selectedPlayer[0].id;

        console.log(benchPlayerID);

        // select player to switch
        moveFromActive.show();
        moveFromActive.on("click", function() {
            var position = this.id.slice(12);
            console.log(position);

        	var selectedClass = ".active" + position;
        	var selectedPlayer = $(selectedClass)
        	var activePlayerID = selectedPlayer[0].id;

        	console.log(activePlayerID)
        });

        // confirm that the player to be switched is the right position for the slot
        // 
        // then in db, switch active statuses 
        // the changes should be automatic IF the db moves are valid
        // send POST request with benchPlayerID, activePlayerID, position 
        // check benchPlayerID position against position 
        // if ok, send PUT request to bench activePlayerID and activate benchPlayerID
    });
});
