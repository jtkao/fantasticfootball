$(document).ready(function() {
	
    $("#create_submit_all").on("click", function() {
        var firstName = $("#create_f_name").val().trim();
        var lastName = $("#create_l_name").val().trim();

        var position = $("#create_position").val().trim();
        var nflTeam = $("#create_nfl_team").val().trim();
        var number = $("#create_number").val()

        var createdPlayer = {
            "firstName": firstName,
            "lastName": lastName,
            "position": position,
            "nflTeam": nflTeam,
            "number": number
        };

        console.log(createdPlayer)

        $.post("/comcr", createdPlayer).then(window.location = "/comcr")
    });
})
