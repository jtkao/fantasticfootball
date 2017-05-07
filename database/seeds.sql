use fantasy_football;

delete from t_position;

insert into t_position (description, created_by, last_updated_by) values ("Quarterback",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Running Back",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Wide Receiver",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Tight End",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Linebacker",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Safety",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Corner",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Dline",current_user(),current_user());
insert into t_position (description, created_by, last_updated_by) values ("Kicker",current_user(),current_user());

delete from t_nfl_team;

insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Bills","Buffalo",current_user(),current_user(),"AFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Dolphins","Miami",current_user(),current_user(),"AFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Patriots","New England",current_user(),current_user(),"AFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Jets","New York",current_user(),current_user(),"AFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Ravens","Baltimore",current_user(),current_user(),"AFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Bengals","Cincinnati",current_user(),current_user(),"AFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Browns","Cleveland",current_user(),current_user(),"AFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Steelers","Pittsburgh",current_user(),current_user(),"AFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Texans","Houston",current_user(),current_user(),"AFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Colts","Indianapolis",current_user(),current_user(),"AFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Jaguars","Jacksonville",current_user(),current_user(),"AFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Titans","Tennessee",current_user(),current_user(),"AFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Broncos","Denver",current_user(),current_user(),"AFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Chiefs","Kansas City",current_user(),current_user(),"AFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Raiders","Oakland",current_user(),current_user(),"AFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Chargers","San Diego",current_user(),current_user(),"AFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Cowboys","Dallas",current_user(),current_user(),"NFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Giants","New York",current_user(),current_user(),"NFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Eagles","Philadelphia",current_user(),current_user(),"NFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Redskins","Washington",current_user(),current_user(),"NFC-EAST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Bears","Chicago",current_user(),current_user(),"NFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Lions","Detroit",current_user(),current_user(),"NFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Packers","Green Bay",current_user(),current_user(),"NFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Vikings","Minnesota",current_user(),current_user(),"NFC-NORTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Falcons","Atlanta",current_user(),current_user(),"NFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Panthers","Carolina",current_user(),current_user(),"NFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Saints","New Orleans",current_user(),current_user(),"NFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Buccaneers","Tampa Bay",current_user(),current_user(),"NFC-SOUTH");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Cardinals","Arizona",current_user(),current_user(),"NFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Rams","St. Louis",current_user(),current_user(),"NFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("49ers ","San Francisco",current_user(),current_user(),"NFC-WEST");
insert into t_nfl_team (description, city, created_by, last_updated_by, division) values ("Seahawks","Seattle",current_user(),current_user(),"NFC-WEST");

delete from t_season;

insert into t_season (start_year, end_year, created_by, last_updated_by) values(2017,2018,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2018,2019,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2019,2020,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2020,2021,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2021,2022,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2022,2023,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2023,2024,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2024,2025,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2025,2026,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2026,2027,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2027,2028,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2028,2029,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2029,2030,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2030,2031,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2031,2032,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2032,2033,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2033,2034,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2034,2035,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2035,2036,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2036,2037,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2037,2038,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2038,2039,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2039,2040,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2040,2041,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2041,2042,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2042,2043,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2043,2044,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2044,2045,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2045,2046,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2046,2047,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2047,2048,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2048,2049,current_user(),current_user());
insert into t_season (start_year, end_year, created_by, last_updated_by) values(2049,2050,current_user(),current_user());

insert t_game_schedule (
    week_id,
    game_type,
    home_team,
    away_team,
    home_team_score,
    away_team_score,    
    create_dt,
    created_by,
    last_update_dt,
    last_updated_by

)

select 
    *,
    null,
    null,
    now(),
    current_user(),
    now(),
    current_user()
from ff_starter_data.t_game_schedule;

delete from t_player;

insert into t_player(fname,lname,position,nfl_team,jersey_number) values ("mike","jones",1,"lions",34);
insert into t_player(fname,lname,position,nfl_team,jersey_number) values ("john","johnson",2,"cowboys",65);
insert into t_player(fname,lname,position,nfl_team,jersey_number) values ("steve","jirjis",3,"giants",23);
insert into t_player(fname,lname,position,nfl_team,jersey_number) values ("josh","khao",4,"jets",5);
insert into t_player(fname,lname,position,nfl_team,jersey_number) values ("joe","mama",5,"broncos",13);

delete from t_fantasy_team;

insert into t_fantasy_team (description) values ("steven fantasy team");
insert into t_fantasy_team (description) values ("josh fantasy team");
insert into t_fantasy_team (description) values ("purple fantasy team");
insert into t_fantasy_team (description) values ("ft winner fantasy team");
insert into t_fantasy_team (description) values ("nfl beast fantasy team");

