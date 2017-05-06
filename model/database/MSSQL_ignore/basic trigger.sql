use fantasyFootball
go

SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Steven Jirjis
-- Create date: 05/02/2017
-- =============================================
ALTER TRIGGER [dbo].[tr_team_owner_tu] ON [dbo].[tr_team_owner]
FOR UPDATE 
AS
BEGIN
	SET NOCOUNT ON;

    update [tr_team_owner]
	set last_update_dt = getdate()
	from [tr_team_owner] a
		join inserted b on a.id = b.id

END
GO
