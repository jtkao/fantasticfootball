$(document).ready(function() { 

    $("#submit_sort").on("click", function() {
        var sortTeam = $("#sortby_team").val();
        var sortPosition = $("#sortby_position").val();
        var sortOrder = $("#sortby_position").val();

        var sorted = {
            "team": sortTeam,
            "position": sortPosition,
            "order": sortOrder
        };

        $.post("/oww", sorted)
    });


    $(".showSeasonStats").on("click", function() {
        var playerId = this.id;

        var url = "/api/" + playerId;
        console.log(playerId, url)

        $.get(url).then(function(){
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

})
