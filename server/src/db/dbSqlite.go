package db

import (
	"database/sql"
	"fmt"
)

type DbSqlite struct {
	driver *sql.DB
}

func (db DbSqlite) ListEvent() []Event {

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
func (db *DbSqlite) AddSchedule(user string, eventId []int, dateRange [][2]int) {
	eventIds := ""
	dateRanges := ""
	for _, element := range eventId {
		eventIds += string(element) + ";"
	}
	eventIds = eventIds[0:len(eventIds)]
	for _, el := range dateRange {
		dateRanges += string(el[0]) + "," + string(el[1]) + ";"
	}
	dateRanges = dateRanges[0:len(dateRanges)]
	sqlInsert := fmt.Sprintf("INSERT INTO calendrier('DateRange','userId','EvenementsId') VALUES(%s,%s,%s)", dateRanges, user, eventIds)
	_, err := db.driver.Exec(sqlInsert)
	if err != nil {
		panic(err)
	}

}
func (db *DbSqlite) AddEvent(event Event) {
	db.Event = append(db.Event, event)
}
func (db DbSqlite) GetSchedule(user string) ScheduleData {
	return createDummySchedule()
}
