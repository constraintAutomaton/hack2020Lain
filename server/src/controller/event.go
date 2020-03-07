package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/constraintAutomaton/hack2020Lain/src/db"
)

func Event(w http.ResponseWriter, r *http.Request) {

	repository := *(db.GetRepository())

	jsonValue, _ := json.Marshal(repository.ListEvent())
	w.Header().Set("Content-Type", " application/json")
	fmt.Fprint(w, bytes.NewBuffer(jsonValue))
}
