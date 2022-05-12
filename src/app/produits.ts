export interface Produit {
    name: string;
    image: string;
    description: string;
}

export const produits = [
    {
        name: "Application mobile",
        image: "assets/img/icons/user-interface.png",
        description: "L'application Legumz concrétise le lien entre l'utilisateur et nous-même. Elle lui permet de gérer son porte monnaie Slice en toute simplicité & sécurité.",
    },
    {
        name: "Slices",
        image: "assets/img/logo/logo_final_sans_fond.png",
        description: "Les Slices sont la base d'une nouvelle économie visant à unifier et à facilité chaque transactions dans n'importe quel pays, le slice s'obtient par le minage ou par transaction comme n'importe quel crédit.",
    },
]