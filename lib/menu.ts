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
      {
        name: 'Box Mixte',
        format: '33 pièces',
        price: '19,99 €',
        image: '/images/produits/box-mixte.jpg',
        composition:
          '4 sushi saumon, 4 sushi crevette, 5 maki crispy, 10 california, 10 maki thon avocat. Riz, algues, saumon, crevette, thon, avocat, concombre, oignon frit, ciboulette, sésame, sauce mayo épicée.',
      },
      {
        name: 'Plateau Passion',
        format: '18 pièces',
        price: '16,99 €',
        image: '/images/produits/plateau-passion.jpg',
        composition:
          '6 sushi saumon, 4 maki saumon, 4 cristal saumon, 4 maki avocat.',
      },
      {
        name: 'Plateau Découverte',
        format: '19 pièces',
        price: '15,99 €',
        image: '/images/produits/plateau-decouverte.jpg',
        composition:
          '5 sushi saumon, 4 maki concombre, 4 california saumon, 4 california thon cuit mayonnaise oignons frits, 2 maki saumon.',
      },
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
      {
        name: 'Sushi Saumon',
        format: '10 pièces',
        price: '13,50 €',
        image: '/images/produits/sushi-saumon-10.jpg',
        composition: '10 sushi saumon.',
      },
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
        image: '/images/produits/california-saumon-maki-mixte.jpg',
        composition: '8 california saumon, 8 maki saumon, 4 cristal saumon.',
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
      {
        name: 'Crunch Thon Mayo',
        format: '8 pièces',
        price: '6,99 €',
        image: '/images/produits/crunch-thon-mayonnaise.jpg',
        composition: 'California thon cuit mayonnaise, oignons frits.',
      },
      { name: 'Crunch Poulet', format: '8 pièces', price: '7,80 €' },
      {
        name: 'Crunch Saumon',
        format: '8 pièces',
        price: '7,99 €',
        image: '/images/produits/crunch-saumon.jpg',
        composition: 'California saumon, oignons frits.',
      },
      {
        name: 'Cristal Thon Mayonnaise',
        format: '8 pièces',
        price: '5,99 €',
        image: '/images/produits/cristal-thon-mayonnaise.jpg',
        composition: '8 cristal thon cuit mayonnaise.',
      },
    ],
  },
  {
    id: 'snacking',
    label: 'Petites faims',
    title: 'Snacking',
    image: '/images/cat-snacking.png',
    imageAlt: 'Sélection de snacking japonais : gyoza et brochettes yakitori',
    products: [
      {
        name: 'Snack Thon Mayo',
        format: '10 pièces',
        price: '9,50 €',
        image: '/images/produits/snack-thon-mayonnaise.jpg',
        composition:
          '2 uramaki thon cuit mayonnaise, 4 maki thon cuit mayonnaise, 4 oignons frits, 4 maki thon cuit épicés srirachi mayonnaise.',
      },
      {
        name: 'Snack Saumon',
        format: '9 pièces',
        price: '9,99 €',
        image: '/images/produits/snack-saumon-9.jpg',
        composition: '3 sushi saumon, 4 california saumon, 2 maki saumon.',
      },
      {
        name: 'Snack Saumon',
        format: '13 pièces',
        price: '14,99 €',
        image: '/images/produits/snack-saumon-13.jpg',
        composition:
          '5 sushi saumon, 4 california saumon, 4 crispy saumon. Riz (riz, eau), saumon (18%), avocat, concombre, algue nori, sésame, pickles de radis, vinaigre de riz, sucre, sel.',
      },
    ],
  },
  {
    id: 'donburi',
    label: 'Chaud & réconfortant',
    title: 'Donburi & Plats chauds',
    image: '/images/cat-donburi.png',
    imageAlt: 'Donburi de riz au poulet katsu et sauce spicy mayo',
    products: [
      {
        name: 'Donburi Saumon',
        price: '9,50 €',
        image: '/images/produits/donburi-saumon.jpg',
        composition:
          'Riz vinaigré, saumon, mélange de légumes, edamame, sauce soja sucrée et graines de sésame.',
      },
      {
        name: 'Donburi Poulet Katsu',
        price: '9,99 €',
        image: '/images/produits/donburi-poulet-katsu.jpg',
        composition: 'Riz, préparation de poulet frit décongelé, salade de choux.',
      },
      {
        name: 'Crousty Donburi Poulet Spicy Mayo',
        price: '9,99 €',
        image: '/images/produits/crousty-donburi-poulet-spicy-mayo.jpg',
        composition:
          'Riz vinaigré, poulet pané, oignons frits, sauce soja sucrée & mayonnaise épicée.',
      },
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
      {
        name: 'Poké Gourmet',
        price: '10,99 €',
        image: '/images/produits/poke-gourmet.jpg',
        composition:
          'Saumon cru, avocat, concombre, radis, wakamé, edamame, carottes râpées, riz vinaigré, sauce maison, sésame.',
      },
      { name: 'Mini Poké Saumon Mangue', price: '5,50 €' },
    ],
  },
]
