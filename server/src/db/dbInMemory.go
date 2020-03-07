package db

import (
	"strconv"

	"github.com/icrowley/fake"
)

type DbInMemory struct {
	Event    []Event
	Schedule map[string]ScheduleData
}

func (db DbInMemory) ListEvent() []Event {
	return db.Event
}
func (db DbInMemory) ListSchedule() map[string]ScheduleData {
	return db.Schedule
}
func (db *DbInMemory) AddSchedule(user string, eventId int) {
}
func (db *DbInMemory) AddEvent(event Event) {
	db.Event = append(db.Event, event)
}
func (db DbInMemory) GetSchedule(user string) ScheduleData {
	return createDummySchedule()
}

func (db *DbInMemory) PopulateDbEvent(nb int) {
	for i := 0; i < nb; i++ {
		event := createDummyEvent()
		db.AddEvent(event)
	}
}

func (db *DbInMemory) PopulateDbSchedule(nb int) {
	date1, _ := strconv.Atoi(fake.DigitsN(20))
	for i := 0; i < nb; i++ {
		db.AddSchedule(fake.UserName(), date1)
	}
}
