
-- =============================================
-- Author:		Steven Jirjis
-- Create date: 05/02/2017
-- =============================================

create PROCEDURE [dbo].[create_insert_trigger](
	@table_name varchar(255)
) 
AS 
BEGIN

DECLARE 
    @sql nvarchar(max), 
    @statement nvarchar(max)

SET @statement = '
-- =============================================
-- Author:		Steven Jirjis
-- Create date: 05/02/2017
-- =============================================
CREATE TRIGGER [dbo].[' + @table_name + '_ti] ON [dbo].[' + @table_name + ']
FOR insert 
AS
BEGIN
	SET NOCOUNT ON;

	update [' + @table_name + ']
	set last_update_dt = getdate()
	from [' + @table_name + '] a
		join inserted b on a.id = b.id

END'


 SET @sql = 
    'EXEC fantasyFootball.sys.sp_executesql 
                  N''EXEC(@statement)''
                , N''@statement nvarchar(max)''
                , @statement;'

EXEC sp_executeSQL @sql, N'@statement nvarchar(max)', @statement


END