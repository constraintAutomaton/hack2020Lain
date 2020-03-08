package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"math/rand"
	"net/http"
	"time"

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
	user := mux.Vars(r)["user"]
	w.Write([]byte(user))
}

func stringWithCharset(length int, charset string) string {
	b := make([]byte, length)
	var seededRand *rand.Rand = rand.New(
		rand.NewSource(time.Now().UnixNano()))
	for i := range b {
		b[i] = charset[seededRand.Intn(len(charset))]
	}
	return string(b)
}
