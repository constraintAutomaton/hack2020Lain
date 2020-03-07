package controller

import (
	"bytes"
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

const CONVERT_VALUE = 182

func Co2(w http.ResponseWriter, r *http.Request) {
	queryDistance := r.FormValue("distance")
	distance, _ := strconv.ParseFloat(queryDistance, 64)
	co2 := CONVERT_VALUE * distance

	jsonStream := map[string]string{"Value": strconv.FormatFloat(co2, 'g', 1, 64)}

	jsonValue, _ := json.Marshal(jsonStream)
	w.Header().Set("Content-Type", "application/json")
	fmt.Fprint(w, bytes.NewBuffer(jsonValue))
}
