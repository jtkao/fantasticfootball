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
        var playerPosition = activePlayerList[i].position;

        if (playerPosition === "QB" && !qbFull) {
            qbFull = true;
            verifiedActiveRoster["qb"] = activePlayerList[i];
        } else if (playerPosition === "RB" && !rb1Full) {
            rb1Full = true;
            verifiedActiveRoster["rb1"] = activePlayerList[i];
        } else if (playerPosition === "RB" && !rb2Full) {
            rb2Full = true;
            verifiedActiveRoster["rb2"] = activePlayerList[i];
        } else if (playerPosition === "WR" && !wr1Full) {
            wr1Full = true;
            verifiedActiveRoster["wr1"] = activePlayerList[i];
        } else if (playerPosition === "WR" && !wr2Full) {
            wr2Full = true;
            verifiedActiveRoster["wr2"] = activePlayerList[i];
        } else if ((playerPosition === "RB" || playerPosition === "WR") && (rb1Full && rb2Full && wr1Full && wr2Full && !flexFull)) {
            flexFull = true;
            verifiedActiveRoster["flex"] = activePlayerList[i];
        } else if (playerPosition === "TE" && !teFull) {
            teFull = true;
            verifiedActiveRoster["te"] = activePlayerList[i]
        } else if (playerPosition === "K" && !kFull) {
            kFull = true;
            verifiedActiveRoster["k"] = activePlayerList[i]
        } else if (playerPosition === "LB" && !lbFull) {
            lbFull = true;
            verifiedActiveRoster["lb"] = activePlayerList[i]
        } else if (playerPosition === "S" && !sFull) {
            sFull = true;
            verifiedActiveRoster["s"] = activePlayerList[i]
        } else if (playerPosition === "C" && !cFull) {
            cFull = true;
            verifiedActiveRoster["c"] = activePlayerList[i]
        } else if (playerPosition === "DL" && !dlFull) {
            dlFull = true;
            verifiedActiveRoster["dl"] = activePlayerList[i]
        }
    };

    return verifiedActiveRoster;
};

module.exports = loadActiveRoster;