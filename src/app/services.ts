export interface Service {
    name: string;
    image: string;
    description: string;
}

export const services = [
    {
        name: "Minage",
        image: "assets/img/icons/mining.png",
        description: "Notre service de minage vous permettra de louer une machine afin d'en extraire des Slices, celle-ci vous offre un autre chemin pour ammasser cette monnaie.",
    },
    {
        name: "Maintenance",
        image: "assets/img/icons/sav.png",
        description: "La maintenance et le service après vente sont des valeurs essentiel au bonn fonctionnement de ce système, nous ne laissons pas tomber un de nos utilisateurs lorsqu'il y a un pépin.",
    },
]