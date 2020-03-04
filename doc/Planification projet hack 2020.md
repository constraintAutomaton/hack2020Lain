# Planification projet hack 2020


## Vision
Faire un planificateur de journée d'activités dans la ville de Rimouski, qui permet à l'usager de partager sa planification et suivre la journée d'un autre.L'application offre la possibilité d'avoir des suggestions de journées ou d'activités similaires, complètement différentes ou aléatoire (selon un indice de corrélation par exemple -1, 0, 1).
## User story principal
Il y a deux possibilités dans l'application, l'utilisateur peut soit automatiquement générer sa journée selon des tags choisis, soit parcourir la map lui-même et ajouter des activités manuellement à son calendrier.

Le calendrier doit permettre de drag and drop pour la plage horaire (surtout pour mobile)

L'utilisateur pourra share un lien unique de façon à être capable de partager facilement sa journée pour que les gens puissent le rejoindre.
## DataSet
### Activités
https://www.donneesquebec.ca/recherche/fr/dataset/lieux-publics
https://www.donneesquebec.ca/recherche/fr/dataset/art-public
https://www.donneesquebec.ca/recherche/fr/dataset/pistes-cyclables-rim
https://www.donneesquebec.ca/recherche/fr/dataset/parcs-et-espaces-verts-rim
### Indicateurs optionnels
https://www.donneesquebec.ca/recherche/fr/dataset/reseau-wifi
https://www.donneesquebec.ca/recherche/fr/dataset/transport-collectif
https://www.donneesquebec.ca/recherche/fr/dataset/parcometres
https://www.donneesquebec.ca/recherche/fr/dataset/stationnement-public

## Technologie
Backend 
golang, data manipulation, ML, sqlite

Frontend
React, OpenStreetMap; Leaflet
## Organisation du code

### Diagramme de classe de conception

## Ui
### Desktop
- map (centre sur la ville de rimouski)
- Horaire
- Tableau des activites
- Bouton share
- zone de texte pour decrire les activites dans calendrier
- zone de texte pour specifier l'activite quand necessaire
### mobile
- navbar avec mode carte et mode horaire
## Maquette

## Fonctionnalite optionnel
