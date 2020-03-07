package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func Event(w http.ResponseWriter, r *http.Request) {
	data := []int{2, 3, 5, 7, 11, 13}
	event := map[string][]int{"data": data}

	jsonValue, _ := json.Marshal(event)
	w.Header().Set("Content-Type", " application/json")
	fmt.Fprint(w, bytes.NewBuffer(jsonValue))
}
