package main

import (
	"fmt"
	"log"
	"net/http"
	"os"

	"github.com/constraintAutomaton/hack2020Lain/src/controller"
	"github.com/gorilla/handlers"
	"github.com/gorilla/mux"
)

type e interface{}

type Schedule struct {
	Event []e
}

type scheduleHandler func(w http.ResponseWriter, r *http.Request)

func createScheduleHandler(w http.ResponseWriter, r *http.Request, m *map[string]interface{}) {
	user := r.URL.Path[len("/save/"):]
	body := r.FormValue("body")

	fmt.Fprint(w, body)
}

func loadScheduleHandler(w http.ResponseWriter, r *http.Request, m map[string]interface{}) {
	user := r.URL.Path[len("/load/"):]
	body := r.FormValue("body")

	fmt.Fprint(w, body)
}

func makeHandler(fn func(http.ResponseWriter, *http.Request, map[string]interface{}), m map[string]interface{}) scheduleHandler {
	return func(w http.ResponseWriter, r *http.Request) {
		fn(w, r, m)
	}
}

func main() {
	r := initializeServer()
	memmap := make(map[string]interface{})
	r.HandleFunc("/", controller.Ping).Methods("GET")
	r.HandleFunc("/event", controller.Event).Methods("GET")
	r.HandleFunc("/schedule", controller.GetAllSchedule).Methods("GET")
	// r.HandleFunc("/schedule/{user}", controller.GetSchedule).Methods("GET")
	// r.HandleFunc("/schedule/{user}", controller.PostSchedule).Methods("POST")
	r.HandleFunc("/user", controller.User).Methods("GET")
	r.HandleFunc("/co2", controller.Co2).Methods("GET").Queries("distance", "{distance}")
	//r.HandleFunc("/csv", controller.Co2).Methods("GET").Queries("distance", "{distance}")
	r.HandleFunc("/save/", makeHandler(createScheduleHandler, &memmap)).Methods("POST")
	r.HandleFunc("/load/", makeHandler(loadScheduleHandler, memmap))

	err := http.ListenAndServe(getPort(), handlers.CORS()(r))
	if err != nil {
		log.Fatal(err)
	}
}
func initializeServer() *mux.Router {
	r := mux.NewRouter()
	r.Use(mux.CORSMethodMiddleware(r))

	static := r.PathPrefix("/static/")
	fs := http.FileServer(http.Dir("assets/"))

	static.Handler(http.StripPrefix("/static/", fs))
	return r
}

func getPort() string {
	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
		log.Println("[-] No PORT environment variable detected. Setting to ", port)
	} else {
		log.Println("Starting app at ", port)
	}
	return ":" + port
}
