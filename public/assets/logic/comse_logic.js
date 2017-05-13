function hideMe(trigger, box) {
    $(trigger).on("click", function() {
        var visible = $(box).is(':visible');
        console.log(visible);

        if (visible === true) {
            $(box).hide();
        } else {
            $(box).show();
        };
    });
};

$(document).ready(function() {
    $("#comse_submit").on("click", function() {
        var league_name = $("#comse_leaguename").val().trim();

        var passing_td = $("#comse_pass_td").val();
        var rushing_td = $("#comse_rush_td").val();
        var receiving_td = $("#comse_rec_td").val();

        var passing_yd = $("#comse_pass_yd").val();
        var rushing_yd = $("#comse_rush_yd").val();
        var receiving_yd = $("#comse_rec_yd").val();

        var reception = $("#comse_ppr").val();
        var field_goal = $("#comse_fg").val();
        var two_point_conversion = $("#comse_tpc").val();

        var fumble = $("#comse_off_fumble").val();
        var interception = $("#comse_off_int").val();

        var tackles = $("#comse_tackle").val();
        var sacks = $("#comse_sack").val();

        var comse_data = {
        	"league_name": league_name,
        	"passing_td": passing_td, 
        	"rushing_td": rushing_td, 
        	"receiving_td": receiving_td, 
        	"passing_yd": passing_yd, 
        	"rushing_yd": rushing_yd, 
        	"receiving_yd": receiving_yd, 
        	"reception": reception, 
        	"field_goal": field_goal, 
            "two_point_conversion": two_point_conversion,
        	"fumble": fumble, 
        	"interception": interception, 
        	"tackles": tackles, 
        	"sacks": sacks
        };

        $.post("/comse", comse_data);
    });

    hideMe("#comse_oscore_trigger", "#comse_oscore_box");
    hideMe("#comse_dscore_trigger", "#comse_dscore_box");
})
