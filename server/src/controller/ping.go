package controller

import (
	"fmt"
	"net/http"
)

const jsonStream = `{"Message": "Hello World"}`

func Ping(w http.ResponseWriter, r *http.Request) {
	w.WriteHeader(http.StatusOK)
	w.Header().Set("Content-Type", "text/json; application/json")
	fmt.Fprint(w, jsonStream)
}
