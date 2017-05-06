1) Run schema slim.SQL - This builds the database and all tables

2) A second databse was created named ff_starter_data. Import t_game_schedule.csv into this database. This acts as a place holder in case we need to drop/recreate fantasy_football, we won't need to reimport this data

**Everything from this point forward will be done in database fantasy_football

3) Run seeds.sql 

Database is schema and data seeds is complete with the exception of player data (and history tables, as noted below).

I think lastly, we deal with history tables. That'll take place probably last becasue we need to run through some test data and get that straight first.