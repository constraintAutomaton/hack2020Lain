package db

import "database/sql"

type DbSqlite struct {
	driver *sql.DB
}

/**
func (db DbSqlite) ListEvent() []Event {
	sql_readall := `
	SELECT Id, Name, Phone FROM items
	ORDER BY datetime(InsertedDatetime) DESC
	`
	rows, err := db.driver.Query(sql_readall)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	return
}
*/
