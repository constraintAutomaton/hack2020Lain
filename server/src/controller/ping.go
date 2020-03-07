package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
)

func Ping(w http.ResponseWriter, r *http.Request) {
	jsonStream := map[string]string{"Message": "Hello World"}

	jsonValue, _ := json.Marshal(jsonStream)
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, bytes.NewBuffer(jsonValue))
}
