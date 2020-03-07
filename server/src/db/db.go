package db

type DbDriver interface {
	listEvent()
}
type Event struct {
	Coordinate     [2]float64
	NumerosDeFiche string
	Parcours       string
	NomDeLOeuvre   string
	Annee          int
	Promoteur      string
	Propriete      string
	Categorie      string
	NomArtiste     string
	SiteArtiste    string
}
type Schedule struct {
	Data []ScheduleData
}
type ScheduleData struct {
	DateRange   [2]int64
	Event       Event
	Description string
}
