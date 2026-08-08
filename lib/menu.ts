export type Product = {
  name: string
  /** Format / nombre de pièces, optionnel */
  format?: string
  price: string
  /**
   * Photo dédiée au produit (fiche cliquable).
   * Déposez votre fichier dans `public/images/produits/` et indiquez le chemin ici.
   * Si absent, la photo de la catégorie est utilisée à la place.
   */
  image?: string
  /**
   * Composition / liste des ingrédients affichée dans la fiche produit.
   */
  composition?: string
}

export type Category = {
  /** Ancre utilisée par la navigation sticky */
  id: string
  label: string
  title: string
  /**
   * Photo de la catégorie.
   * Pour remplacer une photo : déposez votre fichier dans `public/images/`
   * et mettez à jour ce chemin (ratio portrait / carré recommandé).
   */
  image: string
  imageAlt: string
  products: Product[]
}

export const categories: Category[] = [
  {
    id: 'box-plateaux',
    label: 'À partager',
    title: 'Box & Plateaux',
    image: '/images/cat-box-plateaux.png',
    imageAlt: 'Grand plateau de sushis assortis à partager',
    products: [
      { name: 'Box Méga', format: '39 pièces', price: '19,99 €' },
      { name: 'Plateau Passion', format: '18 pièces', price: '16,99 €' },
      { name: 'Plateau Découverte', format: '19 pièces', price: '15,99 €' },
      { name: 'Gourmet Saumon', format: '13 pièces', price: '14,99 €' },
      { name: 'Saumon Box', format: '14 pièces', price: '13,99 €' },
      { name: 'Box Mix Édition', format: '22 pièces', price: '17,99 €' },
      { name: 'La Box du Mois', price: '9,99 €' },
      { name: 'Box Gourmet', price: '12,99 €' },
      { name: 'Box Thon Mayo', format: '12 pièces', price: '7,99 €' },
      {
        name: 'Box Brochettes Poulet Yakitori & Gyoza',
        price: '8,99 €',
      },
      { name: 'Mini Box Rice Sandwich', format: '4 pièces', price: '6,50 €' },
    ],
  },
  {
    id: 'sushis',
    label: 'Les classiques',
    title: 'Sushis',
    image: '/images/cat-sushis.png',
    imageAlt: 'Sushis nigiri au saumon frais',
    products: [
      { name: 'Sushi Saumon', format: '10 pièces', price: '13,50 €' },
      { name: 'Sushi Saumon', format: '6 pièces', price: '8,99 €' },
      { name: 'Sushi Go', price: '11,99 €' },
    ],
  },
  {
    id: 'california-maki',
    label: 'Les incontournables',
    title: 'California & Maki',
    image: '/images/cat-california-maki.png',
    imageAlt: 'California rolls et maki au saumon',
    products: [
      { name: 'California Saumon', format: '8 pièces', price: '6,50 €' },
      {
        name: 'California Saumon & Maki Mix',
        format: '20 pièces',
        price: '14,50 €',
      },
      { name: 'Maki Saumon', format: '8 pièces', price: '4,99 €' },
    ],
  },
  {
    id: 'crunch-cristal',
    label: 'Textures',
    title: 'Crunch & Cristal',
    image: '/images/cat-crunch-cristal.png',
    imageAlt: 'Rolls crunch panés et rolls cristal translucides',
    products: [
      { name: 'Crunch Thon Mayo', format: '8 pièces', price: '6,99 €' },
      { name: 'Crunch Poulet', format: '8 pièces', price: '7,80 €' },
      { name: 'Crunch Saumon', format: '8 pièces', price: '7,99 €' },
      { name: 'Cristal Saumon', format: '8 pièces', price: '6,50 €' },
      { name: 'Cristal California', format: '8 pièces', price: '5,99 €' },
    ],
  },
  {
    id: 'snacking',
    label: 'Petites faims',
    title: 'Snacking',
    image: '/images/cat-snacking.png',
    imageAlt: 'Sélection de snacking japonais : gyoza et brochettes yakitori',
    products: [
      { name: 'Snack Thon Mayo', format: '10 pièces', price: '9,50 €' },
      { name: 'Snack Saumon', format: '9 pièces', price: '9,99 €' },
    ],
  },
  {
    id: 'donburi',
    label: 'Chaud & réconfortant',
    title: 'Donburi & Plats chauds',
    image: '/images/cat-donburi.png',
    imageAlt: 'Donburi de riz au poulet katsu et sauce spicy mayo',
    products: [
      { name: 'Donburi Saumon', price: '9,50 €' },
      { name: 'Donburi Poulet Katsu', price: '9,99 €' },
      { name: 'Crousty Donburi Poulet Spicy Mayo', price: '9,99 €' },
      { name: 'Nouilles Sautées au Poulet', price: '8,99 €' },
    ],
  },
  {
    id: 'poke-bowls',
    label: 'Frais & coloré',
    title: 'Poké Bowls',
    image: '/images/cat-poke.png',
    imageAlt: 'Poké bowl au saumon, mangue et avocat',
    products: [
      { name: 'Poké Honolulu', price: '9,99 €' },
      { name: 'Poké Gourmet', price: '10,99 €' },
      { name: 'Mini Poké Saumon Mangue', price: '5,50 €' },
    ],
  },
]
