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

    switch (slotPosition) {
        case "TE":
            slotPosition = 4;
            break;
        case "QB":
            slotPosition = 1;
            break;
        case "K":
            slotPosition = 9;
            break;
        case "LB":
            slotPosition = 5;
            break;
        case "S":
            slotPosition = 6;
            break;
        case "C":
            slotPosition = 7;
            break
        case "DL":
            slotPosition = 8;
            break;
        default:
            slotPosition = slotPosition;
            break;
    };

    var legalMove = false;

    if (slotPosition === "FLEX") {
        if (playerPosition === 3 || playerPosition === 2) {
            legalMove = true;
        }
    } else if (slotPosition === "RB1" || slotPosition === "RB2") {
        if (playerPosition === 2) {
            legalMove = true;
        }
    } else if (slotPosition === "WR1" || slotPosition === "WR2") {
        if (playerPosition === 3) {
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

        console.log("drop ", activePlayerID, activeSlotPosition);

        var myData = {
            "moveToBench": { "id": activePlayerID, "active": false },
            "makeActive": { "id": 0, "active": true }
        };

        $.ajax({
            url: "/oer",
            type: 'PUT',
            data: myData
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

            var legal = makeActive(benchPlayerPosition, activeSlotPosition);

            if (legal) {
                console.log("legal roster move! send put request")

                var selectedClass = ".active" + activeSlotPosition;
                var selectedPlayer = $(selectedClass)

                if (selectedPlayer.length) {
                    var activePlayerID = selectedPlayer[0].id;
                } else {
                    activePlayerID = 0;
                }

                var myData = {
                    "moveToBench": { "id": activePlayerID, "active": false },
                    "makeActive": { "id": benchPlayerID, "active": true }
                };

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

    $(".dropMe").on("click", function() {
        var id = this.id;
        console.log("drop this id: ", id)
        var url = "/api/drop/" + id

        $.ajax({
            url: url,
            type: 'PUT',
        });
    });






    $("#enableDropMe").on("click", function() {
        $("#enableDropMe").hide();
        $("#enableEdit").show();

        hideMe(".dropMe");

        moveToBench.hide();
        moveToActive.hide();
        moveFromActive.hide();
        moveFromBench.hide();
    });
});
