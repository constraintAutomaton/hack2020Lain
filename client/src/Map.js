import React from 'react';
import { Map as LeafletMap, TileLayer, } from "react-leaflet"
import Pastille from "./Pastille"


class LeafletComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            lat: 48.45,
            lng: -68.53,
            zoom: 13
        }
    }

    renderPastilles() {
        return data.features.map(el => {
            const obj = { lat: el.geometry.coordinates[1], lng: el.geometry.coordinates[0] }
            const desc = [el.properties.PROPRIETE, el.properties.TECHNIQUE, el.properties.MATERIAUX]
            return <Pastille key={el.properties.OBJECTID} position={obj} popupMessage={desc} ></Pastille>
        })
    }

    render() {
        const position = [this.state.lat, this.state.lng];
        return (
            <LeafletMap center={position} zoom={this.state.zoom} id="map" style={{ position: "static" }}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url='https://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                {this.renderPastilles()}
            </LeafletMap>
        );
    }
}

const data = {
    "type": "FeatureCollection",
    "name": "ArtPublic",
    "features": [
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5305810894, 48.4505363579]
            },
            "properties": {
                "OBJECTID": 1,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-08",
                "PARCOURS": "Parcours en bord de mer",
                "NOM_DE_L_OEUVRE": "L’esprit des lieux",
                "ANNEE": "2019",
                "EMPLACEMENT": "À l’ouest de la Soper, sur la rue des Marins",
                "PROMOTEUR": "SOPER",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Treillis métallique et fibre de verre",
                "TECHNIQUE": "Fibre de verre sur armature en métal déployé réalisée en exemplaire unique par des techniques de modelage et laminage",
                "DIMENSIONS": "Hauteur 4 m, largeur 1 m",
                "Y_LATITUDE": "48,4505363579384",
                "X_LONGITUDE": "-68,5305810893829",
                "NOM_ARTISTE": "Christian Girard",
                "COORDONNEE_ARTISTE": "Non disponible",
                "SITE_WEB_ARTISTE": "Non disponible",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5164921882, 48.469980192]
            },
            "properties": {
                "OBJECTID": 2,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-07",
                "PARCOURS": "Parcours en bord de mer",
                "NOM_DE_L_OEUVRE": "Cap à l’Est",
                "ANNEE": "2017",
                "EMPLACEMENT": "Entré de la halte rue St-Germain Est",
                "PROMOTEUR": "Rimouski Ville cyclable",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Métal de cuivre, métal argent et acier forgé",
                "TECHNIQUE": "",
                "DIMENSIONS": "",
                "Y_LATITUDE": "48,4699801919829",
                "X_LONGITUDE": "-68,5164921882392",
                "NOM_ARTISTE": "Étienne Guay",
                "COORDONNEE_ARTISTE": "atelieretienneguay@hotmail.com",
                "SITE_WEB_ARTISTE": "Non disponible",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5282572786, 48.4509039393]
            },
            "properties": {
                "OBJECTID": 3,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-01",
                "PARCOURS": "Parcours de la Cathédrale",
                "NOM_DE_L_OEUVRE": "Si tu allais quelque part",
                "ANNEE": "2015",
                "EMPLACEMENT": "Place du 6 mai 1950",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Texte gravé",
                "MATERIAUX": "Granit",
                "TECHNIQUE": "",
                "DIMENSIONS": "",
                "Y_LATITUDE": "48,450903939335",
                "X_LONGITUDE": "-68,5282572785834",
                "NOM_ARTISTE": "Paul-Chanel Malenfant",
                "COORDONNEE_ARTISTE": "atelieretienneguay@hotmail.com",
                "SITE_WEB_ARTISTE": "Non disponible",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5444176077, 48.4455884766]
            },
            "properties": {
                "OBJECTID": 4,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-10",
                "PARCOURS": "Parcours en bord de mer",
                "NOM_DE_L_OEUVRE": "La fascinée",
                "ANNEE": "2019",
                "EMPLACEMENT": "Sentier du littoral",
                "PROMOTEUR": "Société Rimouskoise du Patrimoine",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Bois d’épinette lamellée et collée",
                "TECHNIQUE": "",
                "DIMENSIONS": "Largeur  5,7 m, Longueur 12,8 m",
                "Y_LATITUDE": "48,4455884765869",
                "X_LONGITUDE": "-68,5444176077389",
                "NOM_ARTISTE": "Gilles Caron, Yvon Lavoie, Marquise Leblanc et Alain Ross",
                "COORDONNEE_ARTISTE": "atelieretienneguay@hotmail.com",
                "SITE_WEB_ARTISTE": "Non disponible",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.542704297, 48.4456132655]
            },
            "properties": {
                "OBJECTID": 5,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-09",
                "PARCOURS": "Parcours en bord de mer",
                "NOM_DE_L_OEUVRE": "La macrée",
                "ANNEE": "2016",
                "EMPLACEMENT": "Sentier du littoral",
                "PROMOTEUR": "Société Rimouskoise du Patrimoine",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Acier corten, bois lamellé-collé cintré",
                "TECHNIQUE": "",
                "DIMENSIONS": "Hauteur 3 m, Largeur 4,8 m, Longueur 7,8 m",
                "Y_LATITUDE": "48,4456132654772",
                "X_LONGITUDE": "-68,5427042969807",
                "NOM_ARTISTE": "Gilles Caron, Yvon Lavoie, Marquise Leblanc et Alain Ross",
                "COORDONNEE_ARTISTE": "atelieretienneguay@hotmail.com",
                "SITE_WEB_ARTISTE": "Non disponible",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5472417023, 48.4450175847]
            },
            "properties": {
                "OBJECTID": 6,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-11",
                "PARCOURS": "Parcours en bord de mer",
                "NOM_DE_L_OEUVRE": "Le sentier poétique",
                "ANNEE": "2005",
                "EMPLACEMENT": "Sentier du littoral",
                "PROMOTEUR": "Salon du livre de Rimouski",
                "PROPRIETE": "Salon du livre de Rimouski",
                "CATEGORIE": "installation",
                "MATERIAUX": "pierre gravée",
                "TECHNIQUE": "",
                "DIMENSIONS": "variées",
                "Y_LATITUDE": "48,4450175846763",
                "X_LONGITUDE": "-68,5472417022687",
                "NOM_ARTISTE": "Paul-Chanel Malenfant, Joséphine Bacon, Hélène Dorion, Victor Lévy Beaulieu, Gatien Lapointe, Pierre Perrault, Lawrence Lepage, Gilles Vigneault, Yvon Rivard, Ève Belisle, Madeleine Gagnon",
                "COORDONNEE_ARTISTE": "Non disponible",
                "SITE_WEB_ARTISTE": "Non disponible",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5266737571, 48.4503773897]
            },
            "properties": {
                "OBJECTID": 7,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-02",
                "PARCOURS": "Parcours de la Cathédrale",
                "NOM_DE_L_OEUVRE": "Murale 150e",
                "ANNEE": "2017",
                "EMPLACEMENT": "Rue Sainte-Marie",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Peinture murale",
                "MATERIAUX": "Contreplaqu., peinture",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.5 m, Largeur 7 m",
                "Y_LATITUDE": "48,4503773896706",
                "X_LONGITUDE": "-68,5266737571103",
                "NOM_ARTISTE": "Stéphane Dufresne",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5258186662, 48.4498687429]
            },
            "properties": {
                "OBJECTID": 8,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-03",
                "PARCOURS": "Parcours de la Cathédrale",
                "NOM_DE_L_OEUVRE": "Oeuvre du Palais de justice",
                "ANNEE": "2020",
                "EMPLACEMENT": "Palais de justice",
                "PROMOTEUR": " ",
                "PROPRIETE": "Œuvre d'intégration 1 %",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4498687428697",
                "X_LONGITUDE": "-68,5258186661927",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5254633507, 48.4499277154]
            },
            "properties": {
                "OBJECTID": 9,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-04",
                "PARCOURS": "Parcours de la Cathédrale",
                "NOM_DE_L_OEUVRE": "Observatoire (Dans le regard du peintre)",
                "ANNEE": "2014",
                "EMPLACEMENT": "Galerie d'art Léonard-Parent",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Peinture murale",
                "MATERIAUX": "Peinture",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4499277154289",
                "X_LONGITUDE": "-68,5254633507378",
                "NOM_ARTISTE": "Jean-Philippe Roy",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.527391666, 48.4480415115]
            },
            "properties": {
                "OBJECTID": 10,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-14",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "La grande hune",
                "ANNEE": "2008",
                "EMPLACEMENT": "Cégep de Rimouski",
                "PROMOTEUR": "Cégep de Rimouski",
                "PROPRIETE": "Cégep de Rimouski",
                "CATEGORIE": "installation, sculpture",
                "MATERIAUX": "Aluminium brossé",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 9 m",
                "Y_LATITUDE": "48,4480415115085",
                "X_LONGITUDE": "-68,5273916660486",
                "NOM_ARTISTE": "Gwenaël Bélanger",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5226434425, 48.4471071422]
            },
            "properties": {
                "OBJECTID": 11,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-05",
                "PARCOURS": "Parcours de la Cathédrale",
                "NOM_DE_L_OEUVRE": "Murale Jeu'n'Art",
                "ANNEE": "2015",
                "EMPLACEMENT": "Piscine St-Germain",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Peinture murale",
                "MATERIAUX": "Béton peint",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Longueur 60 m",
                "Y_LATITUDE": "48,4471071421859",
                "X_LONGITUDE": "-68,5226434425372",
                "NOM_ARTISTE": "Yvon Lavoie",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5210741767, 48.446877496]
            },
            "properties": {
                "OBJECTID": 12,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-06",
                "PARCOURS": "Parcours de la Cathédrale",
                "NOM_DE_L_OEUVRE": "Le bon élan",
                "ANNEE": "2020",
                "EMPLACEMENT": "Caserne de pompier",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4468774959735",
                "X_LONGITUDE": "-68,5210741767157",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4634799218, 48.3649181747]
            },
            "properties": {
                "OBJECTID": 13,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-48",
                "PARCOURS": "Parcours hors-ville",
                "NOM_DE_L_OEUVRE": "Jeune famille",
                "ANNEE": "1995",
                "EMPLACEMENT": "Parc de Saint-Blandine",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Béton armé coloré dans la masse du moyen d’oxyde de fer",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 7 m, longueur hors tout 10,60 m, largeur 10,30 m",
                "Y_LATITUDE": "48,3649181747021",
                "X_LONGITUDE": "-68,4634799217519",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4609928939, 48.3601403499]
            },
            "properties": {
                "OBJECTID": 14,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-52",
                "PARCOURS": "Parcours hors-ville",
                "NOM_DE_L_OEUVRE": "Sculpture thématique et ses symboles",
                "ANNEE": "1996",
                "EMPLACEMENT": "Bibliothèque de Sainte-Blandine",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Installation",
                "MATERIAUX": "béton alluminium et fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,3601403499196",
                "X_LONGITUDE": "-68,4609928938511",
                "NOM_ARTISTE": "Jean-Marc Fillion",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4686097224, 48.5171508455]
            },
            "properties": {
                "OBJECTID": 15,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-38",
                "PARCOURS": "Parcours de l'Est",
                "NOM_DE_L_OEUVRE": "de profundis",
                "ANNEE": "2000",
                "EMPLACEMENT": "Site historique maritime",
                "PROMOTEUR": " ",
                "PROPRIETE": "Site historique maritime",
                "CATEGORIE": "Sculpture aménagement",
                "MATERIAUX": "Béton, acier corten, peinture et pigment",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 6 m, Largeur 5 m, Largeur 0,5 m",
                "Y_LATITUDE": "48,5171508454972",
                "X_LONGITUDE": "-68,468609722391",
                "NOM_ARTISTE": "Gilles Girard",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4688457791, 48.5172914714]
            },
            "properties": {
                "OBJECTID": 16,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-39",
                "PARCOURS": "Parcours de l'Est",
                "NOM_DE_L_OEUVRE": "Empresse-toi contre moi",
                "ANNEE": "2014",
                "EMPLACEMENT": "Site historique maritime",
                "PROMOTEUR": " ",
                "PROPRIETE": "Site historique maritime",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Acier, bois",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,5172914713841",
                "X_LONGITUDE": "-68,468845779092",
                "NOM_ARTISTE": "François Maltais",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4685721924, 48.5173373462]
            },
            "properties": {
                "OBJECTID": 17,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-37",
                "PARCOURS": "Parcours de l'Est",
                "NOM_DE_L_OEUVRE": "La grande nageuse",
                "ANNEE": "2004",
                "EMPLACEMENT": "Site historique maritime",
                "PROMOTEUR": " ",
                "PROPRIETE": "Site historique maritime",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Résine de polyester, fibre de verre et aluminium. Fini acier",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 1.95 m, largeur 1.20 m, longueur 6 m",
                "Y_LATITUDE": "48,5173373461805",
                "X_LONGITUDE": "-68,4685721923557",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.7064672204, 48.3743031444]
            },
            "properties": {
                "OBJECTID": 18,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-42",
                "PARCOURS": "Parcours Bicois",
                "NOM_DE_L_OEUVRE": "La Girouette",
                "ANNEE": "1988",
                "EMPLACEMENT": "Théâtre du Bic",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Styroousse, fibre de verre, feuille de métal cuivre soudées et usinées",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 3 m, Largeur 0.4 m",
                "Y_LATITUDE": "48,3743031444317",
                "X_LONGITUDE": "-68,7064672204304",
                "NOM_ARTISTE": "Gilles Girard",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.7077493687, 48.3724652849]
            },
            "properties": {
                "OBJECTID": 19,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-43",
                "PARCOURS": "Parcours Bicois",
                "NOM_DE_L_OEUVRE": "Le Bic d'hier à Aujourd'hui",
                "ANNEE": "2015",
                "EMPLACEMENT": "Épicerie Brillant Marché Richelieu Bic",
                "PROMOTEUR": "Maison de la culture du Pic champlain",
                "PROPRIETE": "Maison de la culture du Pic champlain",
                "CATEGORIE": "Murale peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,3724652849225",
                "X_LONGITUDE": "-68,7077493686581",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.6948355221, 48.3772855322]
            },
            "properties": {
                "OBJECTID": 20,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-41",
                "PARCOURS": "Parcours Bicois",
                "NOM_DE_L_OEUVRE": "Murales Tunnel cyclable de Bic",
                "ANNEE": "2018",
                "EMPLACEMENT": "Tunnel piste cyclable Bic",
                "PROMOTEUR": "Rimouski Ville cyclable",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Murale peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,3772855322404",
                "X_LONGITUDE": "-68,6948355221074",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5374970178, 48.4377210186]
            },
            "properties": {
                "OBJECTID": 21,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-26",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "Les bâtisseurs",
                "ANNEE": "1996",
                "EMPLACEMENT": "Devant le grand stationnement du Parc Beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Béton armé coloré dans la masse du moyen d’oxyde de fer",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 7 m, largeur 10,30 m, longueur 10,60 m",
                "Y_LATITUDE": "48,4377210186255",
                "X_LONGITUDE": "-68,5374970178453",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5360118385, 48.4410633548]
            },
            "properties": {
                "OBJECTID": 22,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-32",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - Première envolée",
                "ANNEE": "2012",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 4 m",
                "Y_LATITUDE": "48,4410633548442",
                "X_LONGITUDE": "-68,5360118385178",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5359372014, 48.4412370977]
            },
            "properties": {
                "OBJECTID": 23,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-33",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - Les trois patineuses",
                "ANNEE": "1995",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 3 m",
                "Y_LATITUDE": "48,4412370977451",
                "X_LONGITUDE": "-68,5359372014246",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5361009245, 48.4407761937]
            },
            "properties": {
                "OBJECTID": 24,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-31",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - Couple enjoué",
                "ANNEE": "2012",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 4 m",
                "Y_LATITUDE": "48,4407761937531",
                "X_LONGITUDE": "-68,5361009245298",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5362866253, 48.4404612849]
            },
            "properties": {
                "OBJECTID": 25,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-30",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - La rencontre sous-marine",
                "ANNEE": "2012",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 1.80 m, Largeur 1,65 m, Longueur 9,20 m",
                "Y_LATITUDE": "48,4404612849461",
                "X_LONGITUDE": "-68,5362866253372",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.536182895, 48.4406295681]
            },
            "properties": {
                "OBJECTID": 26,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-29",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - Jeu aquatique",
                "ANNEE": "2012",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2,55 m, Largeur 1,50 m, Longueur 3,50 m",
                "Y_LATITUDE": "48,4406295680677",
                "X_LONGITUDE": "-68,5361828950075",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5363267433, 48.4403286529]
            },
            "properties": {
                "OBJECTID": 27,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-28",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - Le tourbillon",
                "ANNEE": "2013",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2,80 m, Largeur 1,60 m, Longueur 2,30 m",
                "Y_LATITUDE": "48,4403286529262",
                "X_LONGITUDE": "-68,5363267433477",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5364369086, 48.4402496209]
            },
            "properties": {
                "OBJECTID": 28,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-27",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "L'allé des sculptures - Passage à gué",
                "ANNEE": "2013",
                "EMPLACEMENT": "Parc beauséjour",
                "PROMOTEUR": " ",
                "PROPRIETE": "Prêt - Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2,20 m, Largeur: 2,20 m, Longueur 3,50 m",
                "Y_LATITUDE": "48,4402496209298",
                "X_LONGITUDE": "-68,5364369086257",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5348004079, 48.4409553084]
            },
            "properties": {
                "OBJECTID": 29,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-34",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "Le Trimurale",
                "ANNEE": "2000",
                "EMPLACEMENT": "Sur le terrain entre le boulevard de la Rivière et la rue Tessier",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Béton armé coloré dans la masse du moyen d’oxyde de cadmium",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 4 m, Largeur 6 x 6 m",
                "Y_LATITUDE": "48,4409553083962",
                "X_LONGITUDE": "-68,5348004078904",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5349353756, 48.4416430091]
            },
            "properties": {
                "OBJECTID": 30,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-35",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "La famille",
                "ANNEE": "2010",
                "EMPLACEMENT": "Devant la Maison des Famille",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.3m, largeur 1.5 m, profondeur 1.40 m",
                "Y_LATITUDE": "48,4416430091472",
                "X_LONGITUDE": "-68,5349353755879",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4561007781, 48.5052599169]
            },
            "properties": {
                "OBJECTID": 31,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-40",
                "PARCOURS": "Parcours de l'Est",
                "NOM_DE_L_OEUVRE": "Le petit prince et la terre",
                "ANNEE": "1997",
                "EMPLACEMENT": "Centre multifonctionnel de Point-au-Père",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Coulé en béton mais réalisé en glaise sur une sculpture rigide",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 0.9 m,  diamètre de 1.5 m",
                "Y_LATITUDE": "48,5052599169409",
                "X_LONGITUDE": "-68,4561007781038",
                "NOM_ARTISTE": "André Gamache",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4617565796, 48.5115647909]
            },
            "properties": {
                "OBJECTID": 32,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-36",
                "PARCOURS": "Parcours de l'Est",
                "NOM_DE_L_OEUVRE": "L'arbre du millénaire",
                "ANNEE": "1999",
                "EMPLACEMENT": "Halte avenue du père Nouvel",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Coulé en béton mais réalisé en glaise sur une sculpture rigide",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.1 m,  diamètre 1.5 m",
                "Y_LATITUDE": "48,5115647909493",
                "X_LONGITUDE": "-68,4617565795732",
                "NOM_ARTISTE": "André Gamache",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5308566978, 48.4468814566]
            },
            "properties": {
                "OBJECTID": 33,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-13",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Les yeux du coeur",
                "ANNEE": "2002",
                "EMPLACEMENT": "Hôpital de Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": " ",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Béton autonivelant",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.3 m, largeur 1,3 m, longueur 0.9 m",
                "Y_LATITUDE": "48,44688145658",
                "X_LONGITUDE": "-68,5308566978373",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5200559357, 48.4517945553]
            },
            "properties": {
                "OBJECTID": 34,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-15",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "La lectrice",
                "ANNEE": "2006",
                "EMPLACEMENT": "Bibliothèque Lisette-Morin",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Résine de polyester et fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur, largeur 2.1 m,  longueur 1.3 m",
                "Y_LATITUDE": "48,4517945553303",
                "X_LONGITUDE": "-68,5200559357326",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5160596567, 48.4506273294]
            },
            "properties": {
                "OBJECTID": 35,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-16",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Les générations",
                "ANNEE": "2010",
                "EMPLACEMENT": "Manoir des générations",
                "PROMOTEUR": " ",
                "PROPRIETE": "Manoir des générations",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Béton armé coloré dans la masse du moyen d’oxyde de fer",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.10m, Largeur 4 m",
                "Y_LATITUDE": "48,4506273293962",
                "X_LONGITUDE": "-68,5160596566524",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5159679391, 48.449482839]
            },
            "properties": {
                "OBJECTID": 36,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-17",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "l'instant de grâce",
                "ANNEE": "1995",
                "EMPLACEMENT": "À l'arrière des Sœur du St-Rosaire",
                "PROMOTEUR": " ",
                "PROPRIETE": "Congrégation des Sœurs de Notre Dame du Saint-Rosaire",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.3 m",
                "Y_LATITUDE": "48,4494828389952",
                "X_LONGITUDE": "-68,5159679391231",
                "NOM_ARTISTE": "Christian Girard",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5125081465, 48.4487143275]
            },
            "properties": {
                "OBJECTID": 37,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-18",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Ondulation",
                "ANNEE": "2019",
                "EMPLACEMENT": "Complexe sportif Desjardins",
                "PROMOTEUR": "MCC œuvre intégration…1%",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "installation, sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4487143275546",
                "X_LONGITUDE": "-68,5125081465079",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5124344361, 48.4527968516]
            },
            "properties": {
                "OBJECTID": 38,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-19",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Le couple",
                "ANNEE": "1995",
                "EMPLACEMENT": "Cour intérieure de l'UQAR",
                "PROMOTEUR": " ",
                "PROPRIETE": "UQAR",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur  2,00, m Largeur  0,90 m, Profondeur 1,30 m",
                "Y_LATITUDE": "48,4527968516125",
                "X_LONGITUDE": "-68,5124344361066",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5156311403, 48.4472848223]
            },
            "properties": {
                "OBJECTID": 39,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-21",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "La consolante",
                "ANNEE": "2010",
                "EMPLACEMENT": "À la maison Marie-Élisabeth",
                "PROMOTEUR": " ",
                "PROPRIETE": "Maison Marie-Élisabeth",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Résine de polyester et fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.4 m,  largeur 1.5  m",
                "Y_LATITUDE": "48,4472848222674",
                "X_LONGITUDE": "-68,5156311403348",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5095422589, 48.4528714682]
            },
            "properties": {
                "OBJECTID": 40,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-20",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "L'enfant disparu",
                "ANNEE": "2011",
                "EMPLACEMENT": "Mausolée de Rimouski",
                "PROMOTEUR": "UQAR",
                "PROPRIETE": "UQAR",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Résine de polyester et fibre de verre",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2.1 m",
                "Y_LATITUDE": "48,4528714682478",
                "X_LONGITUDE": "-68,5095422589304",
                "NOM_ARTISTE": "Roger Langevin",
                "COORDONNEE_ARTISTE": "info@rogerlangevin.com",
                "SITE_WEB_ARTISTE": "http://www.rogerlangevin.com",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5207916648, 48.4418717714]
            },
            "properties": {
                "OBJECTID": 41,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-22",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Le vaisseau admirable",
                "ANNEE": "2009",
                "EMPLACEMENT": "Colisé de Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Ardoise, acier inoxydable bois laminé et alluminuim anodisé",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 7.9 m, Largeur 2.44 m, Longueur 0.41 m",
                "Y_LATITUDE": "48,4418717713933",
                "X_LONGITUDE": "-68,5207916648304",
                "NOM_ARTISTE": "François Maltais",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5211023256, 48.4418603557]
            },
            "properties": {
                "OBJECTID": 42,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-23",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Murale du Colisée",
                "ANNEE": "1965",
                "EMPLACEMENT": "Colisé de Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": "Collection d’art public de la Ville de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Aluminuim anodisé et émaillé",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 4.6 m,  x Largeur 24.3 m",
                "Y_LATITUDE": "48,4418603557014",
                "X_LONGITUDE": "-68,5211023255586",
                "NOM_ARTISTE": "Michel Morin",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5129495958, 48.4384848275]
            },
            "properties": {
                "OBJECTID": 43,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-24",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "L'arbre de la nation",
                "ANNEE": "1972",
                "EMPLACEMENT": "SNEQ",
                "PROMOTEUR": " ",
                "PROPRIETE": "SNEQ",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Métal, acier, bronze et laiton",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4384848274894",
                "X_LONGITUDE": "-68,5129495958138",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5125161697, 48.4386836007]
            },
            "properties": {
                "OBJECTID": 44,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-25",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Le caveau",
                "ANNEE": "1996",
                "EMPLACEMENT": "SNEQ",
                "PROMOTEUR": " ",
                "PROPRIETE": "SNEQ",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Pierre, béton et lichen",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4386836007039",
                "X_LONGITUDE": "-68,5125161697232",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4997755588, 48.4640367143]
            },
            "properties": {
                "OBJECTID": 45,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-44",
                "PARCOURS": "Parcours hors-ville",
                "NOM_DE_L_OEUVRE": "Espace intermédiaire",
                "ANNEE": "1994",
                "EMPLACEMENT": "Centre pénitencier de Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": " ",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "béton, acier, tôle ondulé",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4640367143227",
                "X_LONGITUDE": "-68,499775558831",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5443746791, 48.4405443606]
            },
            "properties": {
                "OBJECTID": 46,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-45",
                "PARCOURS": "Parcours hors-ville",
                "NOM_DE_L_OEUVRE": "L'Aigle de béton",
                "ANNEE": "1980",
                "EMPLACEMENT": "Sûreté du Québec à Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": " ",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "Béton",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 2,66 m, Largeur 2,6 m",
                "Y_LATITUDE": "48,4405443605626",
                "X_LONGITUDE": "-68,5443746791484",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5297132744, 48.4421952102]
            },
            "properties": {
                "OBJECTID": 47,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-12",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Intersections",
                "ANNEE": "2019",
                "EMPLACEMENT": "Coopérative de solidarité Paradis",
                "PROMOTEUR": "Centre d'artistes Caravansérail",
                "PROPRIETE": "Coopérative de solidarité Paradis",
                "CATEGORIE": "Murale peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Hauteur 6 m, Largeur 36, 4 m",
                "Y_LATITUDE": "48,4421952101986",
                "X_LONGITUDE": "-68,5297132743835",
                "NOM_ARTISTE": "Cyndie Belhumeur et Ilana Pichon",
                "COORDONNEE_ARTISTE": "https://cyndiebelhumeur.com  https://issuu.com/ilanapichon",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.522601569, 48.4327932027]
            },
            "properties": {
                "OBJECTID": 48,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-46",
                "PARCOURS": "Parcours hors-ville",
                "NOM_DE_L_OEUVRE": "Former trois fois un tiers",
                "ANNEE": "1996",
                "EMPLACEMENT": "Centre de formation Rimouski-Neigette",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Centre de formation Rimouski-Neigette",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "hauteur 2 m",
                "Y_LATITUDE": "48,432793202716",
                "X_LONGITUDE": "-68,5226015689576",
                "NOM_ARTISTE": "Danielle April",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5303891874, 48.4397401286]
            },
            "properties": {
                "OBJECTID": 49,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-49",
                "PARCOURS": "Parcours de la rivière",
                "NOM_DE_L_OEUVRE": "Échanges et transformation",
                "ANNEE": "1993",
                "EMPLACEMENT": "École l’Aquarelle (St-Robert)\n247 rue Saint-Laurent Ouest\nRimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Comission scolaire des Phares",
                "CATEGORIE": "Installation",
                "MATERIAUX": "Fibre de verre sur panneaux de contreplaqué saturés de résine epoxy, aluminium anodisé, acier inoxydable brossé,",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Dimension inconnue",
                "Y_LATITUDE": "48,4397401285903",
                "X_LONGITUDE": "-68,5303891873554",
                "NOM_ARTISTE": "Bruno Santerre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": "Extérieur",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.459124058, 48.5110676206]
            },
            "properties": {
                "OBJECTID": 50,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-03",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Quand les bateaux s’en vont",
                "ANNEE": "1994",
                "EMPLACEMENT": "Bibliothèque de Point-au-Père",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Ville de Rimouski",
                "CATEGORIE": "Sculpture murale",
                "MATERIAUX": "Bois, métal, laiton, acier, bronze",
                "TECHNIQUE": " ",
                "DIMENSIONS": "1,21 m x 2,63 m",
                "Y_LATITUDE": "48,5110676205675",
                "X_LONGITUDE": "-68,4591240580065",
                "NOM_ARTISTE": "Lise Lbarie",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5286615884, 48.450711944]
            },
            "properties": {
                "OBJECTID": 51,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-02",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Odyssée",
                "ANNEE": "2005",
                "EMPLACEMENT": "Spect'art",
                "PROMOTEUR": " ",
                "PROPRIETE": "Ville de Rimouski",
                "CATEGORIE": "Installation",
                "MATERIAUX": "bois et cuivre",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4507119439656",
                "X_LONGITUDE": "-68,5286615884024",
                "NOM_ARTISTE": "André R. Du Bois",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5217671572, 48.4550221912]
            },
            "properties": {
                "OBJECTID": 52,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-01",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Les repères (Voir loin, voir proche)",
                "ANNEE": "1988",
                "EMPLACEMENT": "CLSC de Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "CLSC",
                "CATEGORIE": "Images photographiques montées dans des boîtiers lumineux",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "Diamètre : 60 cm,   52 cm, 42 cm \nH; 47 cm x L 75 cm \n",
                "Y_LATITUDE": "48,4550221912261",
                "X_LONGITUDE": "-68,5217671572404",
                "NOM_ARTISTE": "Bruno Santerre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": "Moyen, les murs ont été repeints d’une autre couleur qu’initialement prévu. Plusieurs boîtiers lumineux ne fonctionnent plus et de nombreuses affiches publicitaires sont installés entre les différentes sections de l’œuvre.",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5125823531, 48.4523707617]
            },
            "properties": {
                "OBJECTID": 53,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-04",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Fable d’étoiles",
                "ANNEE": "1995",
                "EMPLACEMENT": "Université du Québec à Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "UQAR",
                "CATEGORIE": " ",
                "MATERIAUX": "Métal, aluminium, plâtre",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4523707616966",
                "X_LONGITUDE": "-68,5125823531399",
                "NOM_ARTISTE": "Danielle Sauvé",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.572162042, 48.435202774]
            },
            "properties": {
                "OBJECTID": 54,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-05",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Un jardin en mémoire",
                "ANNEE": "2000",
                "EMPLACEMENT": " 645, boulevard Saint-Germain Ouest, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Centre d’hébergement et de soins de longue durée de Rimouski",
                "CATEGORIE": "Installation, peinture et bas-relief, œuvre en 9 parties",
                "MATERIAUX": "Peinture, métal\n",
                "TECHNIQUE": " ",
                "DIMENSIONS": "H 55 x L 185 cm",
                "Y_LATITUDE": "48,4352027740418",
                "X_LONGITUDE": "-68,572162041989",
                "NOM_ARTISTE": " ",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5236495265, 48.4318355245]
            },
            "properties": {
                "OBJECTID": 55,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-06",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Les Gouffres de l’esprit no 10\n",
                "ANNEE": "2001",
                "EMPLACEMENT": "424 av. Ross, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Centre de formation professionnel Rimouski-Neigette",
                "CATEGORIE": " ",
                "MATERIAUX": "Peinture",
                "TECHNIQUE": " ",
                "DIMENSIONS": "H 122 x L 162 cm",
                "Y_LATITUDE": "48,4318355244935",
                "X_LONGITUDE": "-68,5236495264656",
                "NOM_ARTISTE": "Sylvie Pomerleau",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5721516783, 48.4352070294]
            },
            "properties": {
                "OBJECTID": 56,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-07",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Une berceuse pour Jonas\n\n\n",
                "ANNEE": "2002",
                "EMPLACEMENT": "645, boul. Saint-Germain Ouest, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Centre d’hébergement et de soins de longue durée de Rimouski",
                "CATEGORIE": " ",
                "MATERIAUX": "Bas-relief et peinture",
                "TECHNIQUE": " ",
                "DIMENSIONS": " 620 cm x 300 cm x 10 cm",
                "Y_LATITUDE": "48,4352070294296",
                "X_LONGITUDE": "-68,5721516782918",
                "NOM_ARTISTE": "Lise Labrie",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.7546870378, 48.354929827]
            },
            "properties": {
                "OBJECTID": 57,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-08",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Les paysages, stratification et dissolution\n",
                "ANNEE": "1991",
                "EMPLACEMENT": "Parc du Bic (Pavillon d’accueil) Route 132 Est, (secteur Le Bic),\nRimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Parc du Bic",
                "CATEGORIE": "Installation murale",
                "MATERIAUX": "masonite, acrylique, bois, métal en feuille gypse",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,354929826995",
                "X_LONGITUDE": "-68,7546870378442",
                "NOM_ARTISTE": "Bruno Santerre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5293592996, 48.450357085]
            },
            "properties": {
                "OBJECTID": 58,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-09",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Qui fait l’ange fait la bête\n\n",
                "ANNEE": "1993",
                "EMPLACEMENT": "Musée régional de Rimouski\n35 Saint-Germain Ouest, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Musée Régional de Rimouski",
                "CATEGORIE": "Installation",
                "MATERIAUX": "techniques mixtes",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4503570849551",
                "X_LONGITUDE": "-68,5293592995806",
                "NOM_ARTISTE": "Lise Labrie",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5277875844, 48.4499685615]
            },
            "properties": {
                "OBJECTID": 59,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-10",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Chute lente d’instrument, Musique-fleuve, Livres-temples, \n\n\n",
                "ANNEE": "1996",
                "EMPLACEMENT": "École de Musique du Bas-Saint-Laurent\n22 rue Sainte-Marie, Rimouski\n",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "École de musique du BSL",
                "CATEGORIE": " ",
                "MATERIAUX": "Techniques mixtes",
                "TECHNIQUE": " ",
                "DIMENSIONS": "H 208 x L 85 cm",
                "Y_LATITUDE": "48,4499685615054",
                "X_LONGITUDE": "-68,5277875844256",
                "NOM_ARTISTE": "Paul-Émile Saulnier",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5236341906, 48.4318315399]
            },
            "properties": {
                "OBJECTID": 60,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-11",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Non titrée\n \n",
                "ANNEE": "0",
                "EMPLACEMENT": "Centre de formation Rimouski-Neigette, 424 rue Ross, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Centre de formation professionnel Rimouski-Neigette",
                "CATEGORIE": "Murale",
                "MATERIAUX": "sérigraphie sur verre, aluminium ajouré",
                "TECHNIQUE": " ",
                "DIMENSIONS": "1,05 m x 1,05 m chaque élément",
                "Y_LATITUDE": "48,4318315398831",
                "X_LONGITUDE": "-68,5236341906467",
                "NOM_ARTISTE": "Bruno Santerre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4609222716, 48.5074118893]
            },
            "properties": {
                "OBJECTID": 61,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-12",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Refuge de l’esprit",
                "ANNEE": "1998",
                "EMPLACEMENT": "École La Rose des vents, 355, Avenue de la Jeunesse (pointe-au-Père)",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "École la Rose des vents",
                "CATEGORIE": "Peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,5074118893186",
                "X_LONGITUDE": "-68,4609222715501",
                "NOM_ARTISTE": "Sylvie Pomerleau",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5260388548, 48.4389037797]
            },
            "properties": {
                "OBJECTID": 62,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-14",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Envols Satori",
                "ANNEE": "1991",
                "EMPLACEMENT": "École Saint-Jean245, 2e rue Ouest, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "École Saint-Jean",
                "CATEGORIE": "Peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4389037796853",
                "X_LONGITUDE": "-68,5260388548175",
                "NOM_ARTISTE": "Gilles Gladu",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5446218545, 48.4308246576]
            },
            "properties": {
                "OBJECTID": 63,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-13",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Non titrée",
                "ANNEE": "1990",
                "EMPLACEMENT": "École Beaux-Séjours, Sainte-Odile, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "École Beaux-Séjours, Sainte-Odile, Rimouski",
                "CATEGORIE": "Peinture",
                "MATERIAUX": "Peinture, crayon, contreplaqué, plexiglass",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4308246576385",
                "X_LONGITUDE": "-68,544621854548",
                "NOM_ARTISTE": "Bruno Santerre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5108106598, 48.4525468211]
            },
            "properties": {
                "OBJECTID": 64,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-15",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Ton bateau blanc",
                "ANNEE": "1993",
                "EMPLACEMENT": "ISMER, UQAR\n300 allée des Ursulines\nRimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "UQAR",
                "CATEGORIE": "Installation",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "2,6 x 1.2 x 0,71 m\n  2,6 x 7,71 x 4,16 m",
                "Y_LATITUDE": "48,4525468211171",
                "X_LONGITUDE": "-68,5108106598241",
                "NOM_ARTISTE": "Marie-Christine Landry",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5482290921, 48.443417306]
            },
            "properties": {
                "OBJECTID": 65,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-16",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Cette histoire est vraie parce que je l’ai imaginée d’un bout à l’autre\n",
                "ANNEE": "2003",
                "EMPLACEMENT": "École de l’Estran\n399 rue Lasalle, Nazareth, Rimouski",
                "PROMOTEUR": "intégration de l’art à l’architecture",
                "PROPRIETE": " ",
                "CATEGORIE": "Peinture",
                "MATERIAUX": "Peinture, acrylique sur masonite",
                "TECHNIQUE": " ",
                "DIMENSIONS": "H 91 x L 442 cm",
                "Y_LATITUDE": "48,4434173059661",
                "X_LONGITUDE": "-68,548229092107",
                "NOM_ARTISTE": "Gilles Pitre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": "État : bon, quelques égratignures  dans le coin inférieur droit",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5277756457, 48.4499762959]
            },
            "properties": {
                "OBJECTID": 66,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-17",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "La musique du regard",
                "ANNEE": "2008",
                "EMPLACEMENT": "École de musique du Bas-Saint-Laurent\n22 rue Sainte-Marie, Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": "École de musique du BSL",
                "CATEGORIE": "Peinture",
                "MATERIAUX": "Peinture \nAcrylique sur bois et fibre de pin / bois",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4499762959075",
                "X_LONGITUDE": "-68,5277756456597",
                "NOM_ARTISTE": "Michel Lagacé",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": "État : bon, quelques éraflures dans le bas de l’œuvre",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4601465422, 48.3613328426]
            },
            "properties": {
                "OBJECTID": 67,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-18",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Le puits et la balançoire",
                "ANNEE": "1989",
                "EMPLACEMENT": "École des Merisiers\n658, route des pionniers, (Sainte-Blandine), Rimouski",
                "PROMOTEUR": "intégration de l’art à l’architecture",
                "PROPRIETE": "École des Merisiers",
                "CATEGORIE": "Installation",
                "MATERIAUX": "bois, plexiglass, corde, tronc et branche d’arbre",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,3613328426019",
                "X_LONGITUDE": "-68,4601465422072",
                "NOM_ARTISTE": "Marie-Chrystine Landry",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": "État : Excellent",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5310005613, 48.4469397878]
            },
            "properties": {
                "OBJECTID": 68,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-20",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Huit temps",
                "ANNEE": "2010",
                "EMPLACEMENT": "Centre hospitalier régional de Rimouski \n150 rue Rouleau, Rimouski",
                "PROMOTEUR": "Intégration des arts à l’architecture",
                "PROPRIETE": "Centre hospitalier régional de Rimouski",
                "CATEGORIE": "Photographies modifiées et boîtes lumineuses",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4469397877629",
                "X_LONGITUDE": "-68,5310005612556",
                "NOM_ARTISTE": "Yvan Binet",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5310085986, 48.4469330575]
            },
            "properties": {
                "OBJECTID": 69,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-19",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "L’envolée des oies, Bic",
                "ANNEE": "0",
                "EMPLACEMENT": "Salle d’attente du service de radiologie",
                "PROMOTEUR": " ",
                "PROPRIETE": "Centre hospitalier régional de Rimouski",
                "CATEGORIE": "Photographies couleurs",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "H 64,5 x L 70,5 x P 4 cm",
                "Y_LATITUDE": "48,4469330575238",
                "X_LONGITUDE": "-68,5310085986317",
                "NOM_ARTISTE": "Jean Albert",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.530991742, 48.4469460294]
            },
            "properties": {
                "OBJECTID": 70,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-21",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Un après-midi sous un arbre",
                "ANNEE": "1995",
                "EMPLACEMENT": "Plafond du hall de la radiothérapie",
                "PROMOTEUR": "Intégration des arts à l’architecture",
                "PROPRIETE": "Centre hospitalier régional de Rimouski",
                "CATEGORIE": "Photographies, boîtes lumineuses",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4469460294392",
                "X_LONGITUDE": "-68,5309917420493",
                "NOM_ARTISTE": "Roberto Pellegrinuzzi",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5311191757, 48.4469277523]
            },
            "properties": {
                "OBJECTID": 71,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "EXT-51",
                "PARCOURS": "Parcours du centre-ville",
                "NOM_DE_L_OEUVRE": "Eau vive\n",
                "ANNEE": "1994",
                "EMPLACEMENT": "Centre hospitalier régional de Rimouski\n150 rue Rouleau",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Centre hospitalier régional de Rimouski",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": "métal aluminium soudé et brossé",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,446927752336",
                "X_LONGITUDE": "-68,5311191757432",
                "NOM_ARTISTE": "Hélène Rochette",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5204185396, 48.4518262326]
            },
            "properties": {
                "OBJECTID": 72,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-22",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Transit-Fusion",
                "ANNEE": "2008",
                "EMPLACEMENT": "Bibliothèque Lisette-Morin",
                "PROMOTEUR": " ",
                "PROPRIETE": "Ville de Rimouski",
                "CATEGORIE": "Polyptyque, acrylique sur plexiglas",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": "76 x 61 cm",
                "Y_LATITUDE": "48,4518262325591",
                "X_LONGITUDE": "-68,5204185396278",
                "NOM_ARTISTE": "Marie-Claude Hamel",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5443194776, 48.4404708043]
            },
            "properties": {
                "OBJECTID": 73,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-23",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Non titrée",
                "ANNEE": "1980",
                "EMPLACEMENT": "Sureté du Québec, poste de Rimouski\n393 Vanier, Rimouski",
                "PROMOTEUR": " ",
                "PROPRIETE": "Sureté du Québec",
                "CATEGORIE": "Peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4404708042947",
                "X_LONGITUDE": "-68,5443194775762",
                "NOM_ARTISTE": "Bruno Santerre",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": "État : excellent",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5442928992, 48.4404705131]
            },
            "properties": {
                "OBJECTID": 74,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-24",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Non titrée",
                "ANNEE": "1980",
                "EMPLACEMENT": "Sureté du Québec, poste de Rimouski\n393 Vanier, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Sureté du Québec",
                "CATEGORIE": "Peinture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4404705130633",
                "X_LONGITUDE": "-68,5442928992165",
                "NOM_ARTISTE": "Marius Jomphe",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.5165571427, 48.4364003105]
            },
            "properties": {
                "OBJECTID": 75,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-25",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Triangles de lumière",
                "ANNEE": "1987",
                "EMPLACEMENT": "Centre administratif de la commission scolaire des Phares\n435, avenue Rouleau, Rimouski",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "Commission scolaire des Phares",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,4364003104718",
                "X_LONGITUDE": "-68,5165571427291",
                "NOM_ARTISTE": "Michel Lagacé",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        },
        {
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [-68.4686176494, 48.5145363445]
            },
            "properties": {
                "OBJECTID": 76,
                "MUNICIPALITE": "10043",
                "NUMERO_DE_FICHE": "INT-26",
                "PARCOURS": " ",
                "NOM_DE_L_OEUVRE": "Non titrée",
                "ANNEE": "1990",
                "EMPLACEMENT": "ISMER, Station aquicole, 981 rue Marconi, Rimouski (Secteur Pointe-au-Père)",
                "PROMOTEUR": "Intégration…1%",
                "PROPRIETE": "UQAR",
                "CATEGORIE": "Sculpture",
                "MATERIAUX": " ",
                "TECHNIQUE": " ",
                "DIMENSIONS": " ",
                "Y_LATITUDE": "48,5145363444557",
                "X_LONGITUDE": "-68,4686176494157",
                "NOM_ARTISTE": "André R. Du Bois",
                "COORDONNEE_ARTISTE": " ",
                "SITE_WEB_ARTISTE": " ",
                "INDICATION": " ",
                "ETAT": " ",
                "GEOM": "Point"
            }
        }
    ]
}


export default LeafletComponent