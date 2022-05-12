export interface Partenaire {
  name: string;
  logo: string;
  description: string;
}

export const partenaires = [
  {
    name: 'Akademibokhandeln',
    logo: 'assets/img/partenaires/aka.png',
    description:
      'La librairie Akademibokhandeln vous propose des réductions si vous utilisez le Slice pour payer dans son magasin. Elle fût notre premier partenariat.',
  },
  {
    name: 'Max Hamburgers',
    logo: 'assets/img/partenaires/maxhamburgers.png',
    description:
      'La chaîne de restauration rapide Max Hamburgers vous permet de payer, à l\'aide de Legumz, plus vite et de manière sécurisée dans tous ses restaurants suédois.',
  },
  {
    name: 'PowerEdu',
    logo: 'assets/img/partenaires/PowerEdu.png',
    description:
      'PowerEdu utilise également le Slice pour fournir des réductions et des accès plus simples aux paiements sur son réseau.',
  },
  {
    name: 'Rush',
    logo: 'assets/img/partenaires/rush.png',
    description:
      'Rush est un hébergeur qui mise son modèle sur la sécurité de ses utilisateurs. L\'utilisation de Slices lors des transactions est donc naturel.',
  },
];
