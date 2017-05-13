function loadActiveRoster(activePlayerList, team) {
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
                verifiedActiveRoster["qb_" + team] = {};
                verifiedActiveRoster["qb_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["qb_" + team].position = playerPosition;
                verifiedActiveRoster["qb_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["qb_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 2 && !rb1Full) {
                rb1Full = true;
                verifiedActiveRoster["rb1_" + team] = {};
                verifiedActiveRoster["rb1_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["rb1_" + team].position = playerPosition;
                verifiedActiveRoster["rb1_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["rb1_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 2 && !rb2Full) {
                rb2Full = true;
                verifiedActiveRoster["rb2_" + team] = {};
                verifiedActiveRoster["rb2_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["rb2_" + team].position = playerPosition;
                verifiedActiveRoster["rb2_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["rb2_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 3 && !wr1Full) {
                wr1Full = true;
                verifiedActiveRoster["wr1_" + team] = {};
                verifiedActiveRoster["wr1_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["wr1_" + team].position = playerPosition;
                verifiedActiveRoster["wr1_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["wr1_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 3 && !wr2Full) {
                wr2Full = true;
                verifiedActiveRoster["wr2_" + team] = {};
                verifiedActiveRoster["wr2_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["wr2_" + team].position = playerPosition;
                verifiedActiveRoster["wr2_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["wr2_" + team].score = activePlayerList[i].score;


            } else if ((playerPosition === 2 || playerPosition === 3) && !flexFull) {
                flexFull = true;
                verifiedActiveRoster["flex_" + team] = {};
                verifiedActiveRoster["flex_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["flex_" + team].position = playerPosition;
                verifiedActiveRoster["flex_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["flex_" + team].score = activePlayerList[i].score;


            } else if (playerPosition === 4 && !teFull) {
                teFull = true;
                verifiedActiveRoster["te_" + team] = {};
                verifiedActiveRoster["te_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["te_" + team].position = playerPosition;
                verifiedActiveRoster["te_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["te_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 9 && !kFull) {
                kFull = true;
                verifiedActiveRoster["k_" + team] = {};
                verifiedActiveRoster["k_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["k_" + team].position = playerPosition;
                verifiedActiveRoster["k_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["k_" + team].score = activePlayerList[i].score;


            } else if (playerPosition === 5 && !lbFull) {
                lbFull = true;
                verifiedActiveRoster["lb_" + team] = {};
                verifiedActiveRoster["lb_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["lb_" + team].position = playerPosition;
                verifiedActiveRoster["lb_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["lb_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 6 && !sFull) {
                sFull = true;
                verifiedActiveRoster["s_" + team] = {};
                verifiedActiveRoster["s_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["s_" + team].position = playerPosition;
                verifiedActiveRoster["s_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["s_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 7 && !cFull) {
                cFull = true;
                verifiedActiveRoster["c_" + team] = {};
                verifiedActiveRoster["c_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["c_" + team].position = playerPosition;
                verifiedActiveRoster["c_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["c_" + team].score = activePlayerList[i].score;

            } else if (playerPosition === 8 && !dlFull) {
                dlFull = true;
                verifiedActiveRoster["dl_" + team] = {};
                verifiedActiveRoster["dl_" + team].name = activePlayerList[i].fname + " " + activePlayerList[i].lname;
                verifiedActiveRoster["dl_" + team].position = playerPosition;
                verifiedActiveRoster["dl_" + team].id = activePlayerList[i].id;
                verifiedActiveRoster["dl_" + team].score = activePlayerList[i].score;
            }
        }
    };

    return verifiedActiveRoster;
};

module.exports = loadActiveRoster;
