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
	result := []Event{}
	rows, err := db.driver.Query(sql_readall)
	if err != nil {
		panic(err)
	}
	defer rows.Close()

	return
}
func (db DbSqlite) ListSchedule() map[string]ScheduleData {
	return db.Schedule
}
func (db *DbSqlite) AddSchedule(user string, schedule ScheduleData) {
	db.Schedule[user] = schedule
}
func (db *DbSqlite) AddEvent(event Event) {
	db.Event = append(db.Event, event)
}
func (db DbSqlite) GetSchedule(user string) ScheduleData {
	return createDummySchedule()
}
*/
