declare @table_name varchar(255),
	@loop_id int

select @loop_id = min([object_id]) from sys.tables

while isnull(@loop_id, 0) <> 0
begin

	select @table_name = (select [name] from sys.tables where object_id = @loop_id)

	execute [dbo].[create_update_trigger] @table_name = @table_name
	execute [dbo].[create_insert_trigger] @table_name = @table_name
	execute [dbo].[create_delete_trigger] @table_name = @table_name

	select @loop_id = min([object_id]) from sys.tables where object_id > @loop_id

end