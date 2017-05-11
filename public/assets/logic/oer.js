function hideMe(box) {
    var visible = $(box).is(':visible');
    console.log(visible);

    if (visible === true) {
        $(box).hide();
    } else {
        $(box).show();
    }
}

function makeActive(playerPosition, slotPosition) {
    // the player being made active should be on the bench

    var legalMove = false;

    if (slotPosition === "FLEX") {
        if (playerPosition === "WR" || playerPosition === "RB") {
            legalMove = true;
        }
    } else if (slotPosition === "RB1" || slotPosition === "RB2") {
        if (playerPosition === "RB") {
            legalMove = true;
        }
    } else if (slotPosition === "WR1" || slotPosition === "WR2") {
        if (playerPosition === "WR") {
            legalMove = true;
        }
    } else if (slotPosition === playerPosition) {
        legalMove = true;
    }

    return legalMove;
    // if legalMove is true, then change active to true;
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

    $(".dropMe").hide();
    $("#enableDropMe").hide();

    $("#enableEdit").on("click", function() {
        $("#enableEdit").hide();
        $("#enableDropMe").show();

        $(".dropMe").hide();
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

        var activeSlotPosition = this.id.slice(4);

        var selectedClass = ".active" + this.id.slice(4);
        var selectedPlayer = $(selectedClass);
        var activePlayerID = selectedPlayer[0].id;

        console.log("first select", activePlayerID, activeSlotPosition);

        // select player to switch
        moveFromBench.show();
        moveFromBench.on("click", function() {

            var benchPlayerPosition = $(this).data("position");

            var selectedClass = ".bench" + this.id.slice(14);
            var selectedPlayer = $(selectedClass)
            var benchPlayerID = selectedPlayer[0].id;

            console.log("second select", benchPlayerID, benchPlayerPosition);

            var legal = makeActive(benchPlayerPosition, activeSlotPosition);

            if (legal) {
                console.log("legal roster move! send put request")

                var myData = {"moveToBench":{ "id": activePlayerID, "active": false },
                "makeActive":{ "id": benchPlayerID, "active": true }};

                $.ajax({
                    url: "/oer",
                    type: 'PUT',
                    data: myData
                })
            } else {
                console.log("ILLEGAL ROSTER MOVE.");
            }
        })
    });

    moveToActive.on("click", function() {
        moveToActive.hide();
        moveToBench.hide();

        var benchPlayerPosition = $(this).data("position");

        var selectedClass = ".bench" + this.id.slice(4);
        var selectedPlayer = $(selectedClass);
        var benchPlayerID = selectedPlayer[0].id;

        console.log("first select", benchPlayerID, benchPlayerPosition);

        // select player to switch
        moveFromActive.show();
        moveFromActive.on("click", function() {
            var activeSlotPosition = this.id.slice(12);

            var selectedClass = ".active" + activeSlotPosition;
            var selectedPlayer = $(selectedClass)
            var activePlayerID = selectedPlayer[0].id;

            console.log("second select", activePlayerID, activeSlotPosition);

            var legal = makeActive(benchPlayerPosition, activeSlotPosition);

            if (legal) {
                console.log("legal roster move! send put request")

                var myData = {"moveToBench":{ "id": activePlayerID, "active": false },
                "makeActive":{ "id": benchPlayerID, "active": true }};

                $.ajax({
                    url: "/oer",
                    type: 'PUT',
                    data: myData
                })
            } else {
                console.log("ILLEGAL ROSTER MOVE.");
            }
        });
    });

    $(".dropMe").on("click", function(){
        var id = this.id;
        console.log("drop this id: ", id)
        var url = "/api/drop/" + id

        $.ajax({
            url: url,
            type: 'PUT',
        })
    });

    $("#enableDropMe").on("click", function(){
        $("#enableDropMe").hide();
        $("#enableEdit").show();

        hideMe(".dropMe");

        moveToBench.hide();
        moveToActive.hide();
        moveFromActive.hide();
        moveFromBench.hide();
    });
});
