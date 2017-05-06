drop database if exists fantasy_football;
CREATE DATABASE fantasy_football;

drop database if exists ff_starter_data;
CREATE DATABASE ff_starter_data;

use fantasy_football;

create table t_team_owner ( -- UG
	id int not null auto_increment,
		primary key (id),
	description varchar (255) not null,
	username varchar (255) not null,
	`password` varchar (255) not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_player ( -- static
	id int not null auto_increment,
		primary key (id),
	fname varchar (255) not null,
	lname varchar (255) not null,
	`position` varchar (255) not null,
	nfl_team varchar (255) not null,
	jersey_number int not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);


create table t_position ( -- static
	id int not null auto_increment,
		primary key (id),
	description varchar (255) not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_fantasy_team ( -- UG
	id int not null auto_increment,
		primary key (id),
	fantasy_team_id int,
		foreign key (fantasy_team_id) references t_fantasy_team (id),
	description varchar (255) not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_nfl_team ( -- static
	id int not null auto_increment,
		primary key (id),
	description varchar (255) not null,
	city varchar (255) not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_game_schedule ( -- static
	id int not null auto_increment,
		primary key (id),
	week_id int not null,
    game_type char (7) not null,
    home_team varchar (255) not null,
    away_team varchar (255) not null,
	home_team_score int not null,
	away_team_score int not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_season ( -- static/UG/automated
	id int not null auto_increment,
		primary key (id),
	description varchar (255) not null,
	active char(1) not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_game_stats ( -- UG
	id int not null auto_increment,
		primary key (id),
	season_id int,
		foreign key (season_id) references t_season (id),
	week_id int not null,
	player_id int,
		foreign key (player_id) references t_player (id),
	fantasy_team_id int,
		foreign key (fantasy_team_id) references t_fantasy_team (id),
	opposing_nfl_team_id int,
		foreign key (opposing_nfl_team_id) references t_nfl_team (id),
	active char(1),
	passing_yd int,
	rushing_yd int,
	receiving_yd int,
	passing_td int,
	rushing_td int,	
	receiving_td int,
	reception int,
	interception int,
	fumble int,
	field_goal int,
	sacks int,
	tackles int,
	two_point_conversion int,
	players_game_fantasy_score int,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table tx_fantasy_team_roster (-- automated based on UG data
	id int not null auto_increment,
		primary key (id),
	season_id int,
		foreign key (season_id) references t_season (id),
	week_id int not null,
	player_id int,
		foreign key (player_id) references t_player (id),
	fantasy_team_id int,
		foreign key (fantasy_team_id) references t_fantasy_team (id),
	active char(1),
	join_dt datetime,
	left_dt datetime,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_fantasy_team_stats ( -- automated
	id int not null auto_increment,
		primary key (id),
	season_id int,
		foreign key (season_id) references t_season (id),
	week_id int not null,
	player_id int,
		foreign key (player_id) references t_player (id),
	fantasy_team_id_a int,
		foreign key (fantasy_team_id_a) references t_fantasy_team (id),
	fantasy_team_id_b int,
		foreign key (fantasy_team_id_b) references t_fantasy_team (id),
	fantasy_team_a_score int,
	fantasy_team_b_score int,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_season_fantasy_team_stats ( -- automated
	id int not null auto_increment,
		primary key (id),
	season_id int,
		foreign key (season_id) references t_season (id),
	fantasy_team_id int,
		foreign key (fantasy_team_id) references t_fantasy_team (id),
	fantasy_score int,-- aggregate of active player fantasy score week over week
	win_ct int,
	loss_ct int,
	tie_ct int,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);

create table t_commissioner ( -- automated
	id int not null auto_increment,
		primary key (id),
	description varchar(255),
	league_name varchar(255),
	username varchar (255) not null,
	`password` varchar (255) not null,
	create_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	created_by varchar(50),
	last_update_dt datetime not null DEFAULT CURRENT_TIMESTAMP,
	last_updated_by varchar(50)
);
