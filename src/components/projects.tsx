import React from "react";
import FlippingCard from "./flippingCard";
import "../styles/projects.css";
import icon from "../assets/Instagram.png";
import flags from "../assets/flags.jpg";
import GeneticAlgorithm from "../assets/GeneticAlgorithm.jpeg";
import Notes from "../assets/Notes.jpg";
import Blog from "../assets/Blog.jpg";
import ReactNative from "../assets/techIcons/ReactNative.png";

const Projects = () => {

    const backProperties = {
        technologies: ["React Native"],
        tehcnologiesIcon: [ReactNative],
        skills: ["Adapter des applications sur un ensemble des supports"],
    }

    const TitleInstagram = "PetitGram";
    const descriptionInstagram = 
    "Application mobile qu'imite certaines fonctionnalités d'Instagram, avec une interface simple et intuitive, qui permet la creation des posts, ainsi que des likes, commentaires et d'autres fonctionnalités.";
   
    const TitleFlags = "Country cards";
    const descriptionFlags = 
    "Application mobile qui permet de visualiser les drapeaux de tous les pays du monde, avec des informations sur chaque pays, avec une barre de recherche pour faciliter la recherche et la possibilité de filtrer les pays par continent.";

    const TitleGeneticAlgorithm = "Algorithme génétique";
    const descriptionGeneticAlgorithm = "Algorithme génétique qui essaie de trouver une solution optimale pour résoudre le problème du voyageur du commerce (TSP), avec une sortie graphique pour visualiser le résultat.";
   
    const TitleNotes = "CRUD site web de notes";
    const descriptionNotes = "Mise en place d'un CRUD pour un site web des notes des élèves, avec une base de données pour stocker les notes."
   
    const TitleBlog = "CRUD pour un blog";
    const descriptionBlog = "Mise en place d'un CRUD pour un blog, avec une base de données pour stocker les articles et les éditeurs.";
  
    return (
        <div className="projects">
            <h1 className="title">Projets</h1>
            <div className="cards-container">
                <div className="inner-cards-container">
                    <FlippingCard image={icon} frontTitle={TitleInstagram} description={descriptionInstagram} properties={backProperties}/>
                    <FlippingCard image={flags} frontTitle={TitleFlags} description={descriptionFlags} properties={backProperties}/>
                    <FlippingCard image={GeneticAlgorithm} frontTitle={TitleGeneticAlgorithm} description={descriptionGeneticAlgorithm} properties={backProperties}/>
                </div>

                <div className="inner-cards-container">
                    <FlippingCard image={Notes} frontTitle={TitleNotes} description={descriptionNotes} properties={backProperties}/>
                    <FlippingCard image={Blog} frontTitle={TitleBlog} description={descriptionBlog} properties={backProperties}/>
                </div>     
            </div>
        </div>
    );

}

export default Projects;