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
        var username = $("#comse_username").val().trim();
        var password = $("#comse_password").val().trim();
        var league_name = $("#comse_leaguename").val().trim();

        var pass_td = $("#comse_pass_td").val();
        var rush_td = $("#comse_rush_td").val();
        var rec_td = $("#comse_rec_td").val();

        var pass_yd = $("#comse_pass_yd").val();
        var rush_yd = $("#comse_rush_yd").val();
        var rec_yd = $("#comse_rec_yd").val();

        var ppr = $("#comse_ppr").val();
        var kicks = $("#comse_fg").val();
        var tpc = $("#comse_tpc").val();

        var off_fumble = $("#comse_off_fumble").val();
        var off_int = $("#comse_off_int").val();

        var tackles = $("#comse_tackle").val();
        var sacks = $("#comse_sack").val();
        var def_fumble = $("#comse_def_fumble").val();
        var def_int = $("#comse_def_int").val();

        var comse_data = {
        	"username": username, 
        	"password": password,
        	"league_name": league_name,
        	"pass_td": pass_td, 
        	"rush_td": rush_td, 
        	"rec_td": rec_td, 
        	"pass_yd": pass_yd, 
        	"rush_yd": rush_yd, 
        	"rec_yd": rec_yd, 
        	"ppr": ppr, 
        	"kicks": kicks, 
            "tpc": tpc,
        	"off_fumble": off_fumble, 
        	"off_int": off_int, 
        	"tackles": tackles, 
        	"sacks": sacks
        };

        $.post("/comse", comse_data);
    });

    hideMe("#comse_oscore_trigger", "#comse_oscore_box");
    hideMe("#comse_dscore_trigger", "#comse_dscore_box");
})
