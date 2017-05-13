$(document).ready(function() {
    // modal copy pasted from w3

    var modal = document.getElementById('myModal');

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    $(".showSeasonStats").on("click", function() {
        var playerId = this.id;

        var url = "/api/" + playerId;
        console.log(playerId, url)

        $.get(url).then(function() {
            modal.style.display = "block";
        })
    });

    $(".addMe").on("click", function() {
        var playerId = this.id;

        var url = "/api/add/" + playerId;
        console.log(playerId, url)

        $.ajax({
            url: url,
            method: 'PUT',
            data: playerId
        }).then(window.location = "/oww");
    });

    $("#submit_sort").on("click", function() {

        var exempt = document.getElementsByClassName("sortable");

        for (var i = 0; i < exempt.length; i++) {
            $(exempt[i]).show();
        };

        var sortTeam = $("#sortby_team").val();
        var sortPosition = $("#sortby_position").val();
        var sortOrder = $("#sortby_order").val();


        for (var i = 0; i < exempt.length; i++) {
            var test = $(exempt[i]).attr("class");

            var team = test.slice(18);
            team = team.slice(0, -9);

            var position = test.slice(16,18);
            position = parseInt(position);

            if ((sortPosition === "ALL") && (sortTeam === "ALL")) {
                i = exempt.length;

            } else if ((sortPosition === "ALL") && (sortTeam != "ALL")) {
                console.log(sortTeam)

                if (team != sortTeam) {
                    console.log(team, sortTeam)
                    $(exempt[i]).hide();
                }

            } else if ((sortPosition != "ALL") && (sortTeam === "ALL")) {
                console.log(sortPosition)

                if (position != sortPosition) {
                    console.log(position, sortPosition)
                    $(exempt[i]).hide();
                }
            } else {

                if ((position != sortPosition) || (team != sortTeam)){
                    $(exempt[i]).hide();
                }
            }
        }
    });
});
