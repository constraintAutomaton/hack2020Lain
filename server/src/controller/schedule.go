package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/constraintAutomaton/hack2020Lain/src/db"
	"github.com/gorilla/mux"
)

func GetSchedule(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	repository := *(db.GetRepository())

	jsonValue, _ := json.Marshal(repository.GetSchedule(vars["user"]))
	w.Header().Set("Content-Type", " application/json")
	fmt.Fprint(w, bytes.NewBuffer(jsonValue))
}
func GetAllSchedule(w http.ResponseWriter, r *http.Request) {
	repository := *(db.GetRepository())

	jsonValue, _ := json.Marshal(repository.ListSchedule())
	w.Header().Set("Content-Type", " application/json")
	fmt.Fprint(w, bytes.NewBuffer(jsonValue))
}
func PostSchedule(w http.ResponseWriter, r *http.Request) {

}
