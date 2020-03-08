package db

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"net/http"
	"strconv"

	"github.com/icrowley/fake"
)

type DbInMemory struct {
	Event    []Event
	Events   []interface{}
	Schedule map[string]ScheduleData
}

func (db DbInMemory) ListEvent() []Event {
	return db.Event
}
func (db DbInMemory) ListEvent2() []interface{} {
	return db.Events
}
func (db DbInMemory) ListSchedule() map[string]ScheduleData {
	return db.Schedule
}
func (db *DbInMemory) AddSchedule(user string, eventId int) {
}
func (db *DbInMemory) AddEvent(event Event) {
	db.Event = append(db.Event, event)
}
func (db *DbInMemory) AddEvent2(event interface{}) {
	db.Events = append(db.Events, event)
}
func (db DbInMemory) GetSchedule(user string) ScheduleData {
	return createDummySchedule()
}

// func (db *DbInMemory) PopulateDbEvent(nb int) {
// 	for i := 0; i < nb; i++ {
// 		event := createDummyEvent()
// 		db.AddEvent(event)
// 	}
// }

func (db *DbInMemory) PopulateDbEvent(nb int) {
	go doIt("https://www.donneesquebec.ca/recherche/fr/dataset/1601c350-6b7f-41fe-80ad-5b9bca4973ed/resource/ddbb2a46-0995-4256-ae44-7d68ffc5b651/download/artpublic.json", db)
	// go doIt("https://www.donneesquebec.ca/recherche/fr/dataset/053ba55b-d6c4-42b4-86f5-0d0937d291ba/resource/d12a3f0b-6438-432d-bb69-de40736945dc/download/lieupublic.json", db)
}

func doIt(url string, db *DbInMemory) {
	res, err := http.Get(url)
	if err != nil {
		log.Fatal(err)
	}
	robots, err := ioutil.ReadAll(res.Body)
	res.Body.Close()
	if err != nil {
		log.Fatal(err)
	}

	var dat map[string]interface{}

	if err := json.Unmarshal(robots, &dat); err != nil {
		panic(err)
	}

	events := dat["features"].([]interface{})
	for _, ev := range events {
		db.AddEvent2(ev)
	}
}

func (db *DbInMemory) PopulateDbSchedule(nb int) {
	date1, _ := strconv.Atoi(fake.DigitsN(20))
	for i := 0; i < nb; i++ {
		db.AddSchedule(fake.UserName(), date1)
	}
}
