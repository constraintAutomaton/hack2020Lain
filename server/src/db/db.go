package db

import (
	"strconv"

	"github.com/icrowley/fake"
)

type DbType int

const (
	NOT_SET DbType = iota
	IN_MEMORY
	POSTGRE
)

func (db DbType) String() string {
	return [...]string{"IN_MEMORY", "POSTGRE"}[db]
}

type DbDriver interface {
	AddSchedule(user string, eventId int)
	GetSchedule(user string) ScheduleData
	ListEvent() []Event
	ListSchedule() map[string]ScheduleData
	AddEvent(event Event)
	PopulateDbEvent(nb int)
	PopulateDbSchedule(nb int)
}
type Event struct {
	Coordinate     [2]float32
	NumerosDeFiche string
	Parcours       string
	NomDeLOeuvre   string
	Annee          int
	Promoteur      string
	Propriete      string
	Categorie      string
	NomArtiste     string
	SiteArtiste    string
	Id             int
}

type ScheduleData struct {
	DateRange   [2]int
	Event       Event
	Description string
}

func SetRepositoryType(dbType DbType) DbDriver {
	switch dbType {
	case IN_MEMORY:
		return &(DbInMemory{Event: []Event{}, Schedule: map[string]ScheduleData{}})
	}
	return &(DbInMemory{Event: []Event{}, Schedule: map[string]ScheduleData{}})
}

func GetRepository() *DbDriver {
	return currentDataBase
}
func setUpDb() *DbDriver {
	repo := SetRepositoryType(IN_MEMORY)
	repo.PopulateDbEvent(10)
	repo.PopulateDbSchedule(10)
	return &repo
}
func createDummyEvent() Event {
	data, _ := strconv.Atoi(fake.DigitsN(20))
	return Event{Coordinate: [2]float32{fake.Latitude(), fake.Longitude()},
		NumerosDeFiche: fake.DigitsN(20), Parcours: fake.DomainName(), NomDeLOeuvre: fake.Brand(),
		Annee: fake.Year(2000, 2020), Promoteur: fake.FemaleFullName(), Propriete: fake.FemaleFullName(),
		Categorie: fake.Industry(), NomArtiste: fake.FemaleFullName(), SiteArtiste: fake.DomainName(), Id: data}
}
func createDummySchedule() ScheduleData {
	date1, _ := strconv.Atoi(fake.DigitsN(20))
	date2, _ := strconv.Atoi(fake.DigitsN(20))
	return ScheduleData{DateRange: [2]int{date1, date2}, Event: createDummyEvent(), Description: fake.Paragraph()}
}

var currentDataBase = setUpDb()
