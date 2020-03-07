package main

import (
	"log"
	"net/http"
	"os"

	"github.com/constraintAutomaton/hack2020Lain/src/controller"
	"github.com/gorilla/mux"
)

func main() {
	r := initializeServer()
	r.HandleFunc("/", controller.Ping).Methods("GET")
	r.HandleFunc("/event", controller.Event).Methods("GET")
	r.HandleFunc("/schedule/{user}", controller.Schedule).Methods("GET")
	r.HandleFunc("/schedule/{user}", controller.Schedule).Methods("POST")

	err := http.ListenAndServe(getPort(), r)
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
