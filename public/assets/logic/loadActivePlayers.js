function loadActiveRoster(activePlayerList) {
    var verifiedActiveRoster = {};
    var qbFull = false;
    var rb1Full = false;
    var rb2Full = false;
    var wr1Full = false;
    var wr2Full = false;
    var flexFull = false;
    var teFull = false;
    var kFull = false;
    var lbFull = false;
    var sFull = false;
    var cFull = false;
    var dlFull = false;

    for (var i = 0; i < activePlayerList.length; i++) {
        var isActive = activePlayerList[i].active

        if (isActive === "Y") {
            var playerPosition = parseInt(activePlayerList[i].position);
            
            if (playerPosition === 1 && !qbFull) {
                qbFull = true;
                verifiedActiveRoster["qb"] = {};
                verifiedActiveRoster["qb"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["qb"].position = playerPosition;
                verifiedActiveRoster["qb"].id = activePlayerList[i].id;

            } else if (playerPosition === 2 && !rb1Full) {
                rb1Full = true;
                verifiedActiveRoster["rb1"] = {};
                verifiedActiveRoster["rb1"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["rb1"].position = playerPosition;
                verifiedActiveRoster["rb1"].id = activePlayerList[i].id;

            } else if (playerPosition === 2 && !rb2Full) {
                rb2Full = true;
                verifiedActiveRoster["rb2"] = {};
                verifiedActiveRoster["rb2"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["rb2"].position = playerPosition;
                verifiedActiveRoster["rb2"].id = activePlayerList[i].id;

            } else if (playerPosition === 3 && !wr1Full) {
                wr1Full = true;
                verifiedActiveRoster["wr1"] = {};
                verifiedActiveRoster["wr1"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["wr1"].position = playerPosition;
                verifiedActiveRoster["wr1"].id = activePlayerList[i].id;

            } else if (playerPosition === 3 && !wr2Full) {
                wr2Full = true;
                verifiedActiveRoster["wr2"] = {};
                verifiedActiveRoster["wr2"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["wr2"].position = playerPosition;
                verifiedActiveRoster["wr2"].id = activePlayerList[i].id;


            } else if ((playerPosition === 2 || playerPosition === 3) && !flexFull) {
                flexFull = true;
                verifiedActiveRoster["flex"] = {};
                verifiedActiveRoster["flex"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["flex"].position = playerPosition;
                verifiedActiveRoster["flex"].id = activePlayerList[i].id;


            } else if (playerPosition === 4 && !teFull) {
                teFull = true;
                verifiedActiveRoster["te"] = {};
                verifiedActiveRoster["te"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["te"].position = playerPosition;
                verifiedActiveRoster["te"].id = activePlayerList[i].id;

            } else if (playerPosition === 9 && !kFull) {
                kFull = true;
                verifiedActiveRoster["k"] = {};
                verifiedActiveRoster["k"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["k"].position = playerPosition;
                verifiedActiveRoster["k"].id = activePlayerList[i].id;


            } else if (playerPosition === 5 && !lbFull) {
                lbFull = true;
                verifiedActiveRoster["lb"] = {};
                verifiedActiveRoster["lb"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["lb"].position = playerPosition;
                verifiedActiveRoster["lb"].id = activePlayerList[i].id;

            } else if (playerPosition === 6 && !sFull) {
                sFull = true;
                verifiedActiveRoster["s"] = {};
                verifiedActiveRoster["s"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["s"].position = playerPosition;
                verifiedActiveRoster["s"].id = activePlayerList[i].id;

            } else if (playerPosition === 7 && !cFull) {
                cFull = true;
                verifiedActiveRoster["c"] = {};
                verifiedActiveRoster["c"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["c"].position = playerPosition;
                verifiedActiveRoster["c"].id = activePlayerList[i].id;

            } else if (playerPosition === 8 && !dlFull) {
                dlFull = true;
                verifiedActiveRoster["dl"] = {};
                verifiedActiveRoster["dl"].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["dl"].position = playerPosition;
                verifiedActiveRoster["dl"].id = activePlayerList[i].id;
            }
        }
    };

    return verifiedActiveRoster;
};

module.exports = loadActiveRoster;
