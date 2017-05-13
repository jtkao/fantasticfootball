var muBench = function(list) {
    console.log(list)
    var data = [];

    for (var i = 0; i < list.length; i++) {
        if (list[i].active === "N") {
            var player = {};
            player.name = list[i].fname + " " + list[i].lname;
            player.id = list[i].id;
            player.position = list[i].position;
            player.score = list[i].score;
            player.benchSlot = "bench" + (i + 1) + "Slot";
            player.class = "bench" + (i + 1);
            player.buttonID = "swap" + (i + 1);
            player.selectionButtonID = "selectToSwitch" + (i + 1);
            data.push(player);
        }
    }

    return data;

};

module.exports = muBench;
