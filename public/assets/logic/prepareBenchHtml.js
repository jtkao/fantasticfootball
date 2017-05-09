var prepareBenchHtml = function(list) {
    var data = [];

    for (var i = 0; i < list.length; i++) {
        var player = {};
        player.name = list[i].name;
        player.id = list[i].id;
        player.position = list[i].position;
        player.benchSlot = "bench" + (i + 1) + "Slot";
        player.class = "bench" + (i + 1);
        player.buttonID = "swap" + (i + 1);
        player.selectionButtonID = "selectToSwitch" + (i + 1);
        data.push(player);
    }

    return data;
};

module.exports = prepareBenchHtml;