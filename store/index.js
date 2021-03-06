export const state = () => ({
  loading: true,
  lang: 'eng',
  layout: {
    invert: false,
  },
  cursor: {
    text: '',
    invert: false,
  },
  projects: [
    {
      index: 0,
      name: 'Amie',
      year: '2018',
      type: 'Interactive',
      tool: 'Unreal Engine',
      description: {
        eng: `Amie is a real time interactive artwork entirely done inside Unreal Engine that generates abstract 3D environments based on the user’s visual appearance. Each person is offered a unique render by using a custom C++ video software that detects their outfit’s colors and differentiate the most prominent ones from the less prominent ones. My work was granted the “Most Outstanding” title for my Cegep’s final exhibition.`,
        fr: `Amie est une œuvre d'art interactive en temps réel entièrement réalisée dans Unreal Engine qui génère des environnements 3D abstraits en fonction de l'apparence visuelle de l'utilisateur. Chaque personne se voit offrir un rendu unique en utilisant un logiciel vidéo C ++ personnalisé qui détecte les couleurs de sa tenue et différencie les plus proéminentes des moins proéminentes. Mon travail a reçu le titre «Le plus remarquable» pour l’exposition finale de mon Cégep.`,
      },
      showcase: '/images/amie/showcase.mp4',
      videos: null,
      images: [
        '/images/amie/0.jpg',
        '/images/amie/1.jpg',
        '/images/amie/2.jpg',
        '/images/amie/3.jpg',
        '/images/amie/4.jpg',
        '/images/amie/5.jpg',
        '/images/amie/6.jpg',
        '/images/amie/7.jpg',
        '/images/amie/8.jpg',
        '/images/amie/9.jpg',
        '/images/amie/10.jpg',
      ],
      externalLink: null,
      link: '/project/amie/',
    },
    {
      index: 1,
      name: 'Cloner',
      year: '2020',
      type: '3D',
      tool: 'Blender',
      description: {
        eng: `Cloner is a personal spaceship design that I worked on during the pandemic era. I created this model entirely inside Blender as a way to explore new styles and refine my 3D abilities. The final result showcases some complex modelling techniques such as hard surface and subdivision modelling as well as some of my composition and rendering knowledge.`,
        fr: `Cloner est design personnel de vaisseau spatial sur laquelle j'ai travaillé pendant de la pandémie. J'ai créé ce modèle entièrement dans Blender afin d'explorer de nouveaux styles et d'enrichir mes capacités 3D. Le résultat final met en valeur certaines techniques de modélisation complexes telles que hardsurface et subdivision modelling ainsi que certaines de mes connaissances en composition et en rendu.`,
      },
      showcase: '/images/cloner/showcase.mp4',
      videos: null,
      images: [
        '/images/cloner/0.jpg',
        '/images/cloner/1.jpg',
        '/images/cloner/2.jpg',
        '/images/cloner/3.jpg',
        '/images/cloner/4.jpg',
      ],
      externalLink: null,
      link: '/project/cloner/',
    },
    {
      index: 2,
      name: 'Cyberblade',
      year: '2020',
      type: '3D',
      tool: 'Blender',
      description: {
        eng: `Cyberblade is part of a series of game assets I’m working on for my own indie game. Conceptually, the sword is divided into three tiers to create a hierarchy of power that can easily be characterised by their visual complexity. Based on my design, I modelled, retopologized and rendered the swords in Blender and used Substance Painter for the textures. The final result is an Unreal Engine asset ready for deployment.`,
        fr: `Cyberblade fait partie d'une série d'objets de jeu sur laquelle je travaille pour mon propre jeu indépendant. Conceptuellement, l'épée est divisée en trois niveaux pour créer une hiérarchie de pouvoir qui peut facilement être caractérisée par leur complexité visuelle. Basé sur la base mon design initial, j'ai modélisé, retopologisé et rendu les épées dans Blender et utilisé Substance Painter pour les textures. Le résultat final est un objet Unreal Engine prêt à être déployé.`,
      },
      showcase: '/images/cyberblade/showcase.mp4',
      videos: null,
      images: [
        '/images/cyberblade/0.jpg',
        '/images/cyberblade/1.jpg',
        '/images/cyberblade/2.jpg',
        '/images/cyberblade/3.jpg',
        '/images/cyberblade/4.jpg',
        '/images/cyberblade/5.jpg',
        '/images/cyberblade/6.jpg',
        '/images/cyberblade/7.jpg',
      ],
      externalLink: null,
      link: '/project/cyberblade/',
    },
    {
      index: 3,
      name: 'Identity',
      year: '2020',
      type: 'VFX',
      tool: 'Blender & Houdini',
      description: {
        eng: `Identity is a research paper that criticises and interrogates the modern identity of visual effects by answering the question : “What defines a compelling digital visual effect for storytelling cinema ?” As someone who likes criticising movies and games for the quality of their visual effects, I had an enriching time constraining my result to only three major points : Subtlety, Immersion and Cognitive Dissonance. To better illustrate the outcome of the research, I elaborated three short animations using Blender and Houdini to encapsulate each aspect more precisely.`,
        fr: `Identity est un document de recherche qui critique et interroge l'identité moderne des effets visuels en répondant à la question: «Qu'est-ce qui définit un effet visuel numérique convaincant pour le cinéma narratif?» En tant que personne qui aime critiquer les films et les jeux pour la qualité de leurs effets visuels, j'ai eu un temps enrichissant en limitant mon résultat à seulement trois points majeurs: la subtilité, l'immersion et la dissonance cognitive. Pour mieux illustrer le résultat de la recherche, j'ai élaboré trois courtes animations en utilisant Blender et Houdini pour encapsuler chaque aspect plus précisément.`,
      },
      showcase: '/images/identity/showcase.mp4',
      videos: [
        '/images/identity/video_0.mp4',
        '/images/identity/video_1.mp4',
        '/images/identity/video_2.mp4',
      ],
      images: [
        '/images/identity/0.jpg',
        '/images/identity/1.jpg',
        '/images/identity/2.jpg',
        '/images/identity/3.jpg',
        '/images/identity/4.jpg',
      ],
      externalLink: null,
      link: '/project/identity/',
    },
    {
      index: 4,
      name: 'Monologue',
      year: '2020',
      type: '3D',
      tool: 'Blender',
      description: {
        eng: `Monologue is an animated version of Rutger Hauer’s Tears in the rain monologue he performed for the movie Blade Runner (1984). The original design of the head comes from Roman Semenenko’s collection (ArtStation - Roman Semenenko). Everything was executed inside Blender, from the initial sculpt and retopology to the final animated and textured render.`,
        fr: `Monologue est une version animée du monologue Tears in the rain de Rutger Hauer qu'il a interprété pour le film Blade Runner (1984). Le dessin original de la tête provient de la collection de Roman Semenenko (ArtStation - Roman Semenenko). Tout a été exécuté dans Blender, de la sculpture initiale et de la retopologie au rendu final animé et texturé.`,
      },
      showcase: '/images/monologue/showcase.mp4',
      videos: [
        '/images/monologue/video.mp4',
      ],
      images: [
        '/images/monologue/0.jpg',
        '/images/monologue/1.jpg',
        '/images/monologue/2.jpg',
      ],
      externalLink: null,
      link: '/project/monologue/',
    },
    {
      index: 5,
      name: 'Tile Map Generator',
      year: '2020',
      type: 'Coding',
      tool: 'Javascript',
      description: {
        eng: `Tile Map Generator is a personal project that is designed to generate procedural tile-based video game map. The original code is written using Javascript however, it is purposely made to be easily re-coded in C++ or C#. Either it is for a dungeon crawling game or simply for designing environment layout, Tile Map Generator is compact, quick and endless. The algorithm works by creating a path between a start and an end position while keeping the maximum amount of tiles under a specific range.`,
        fr: `Tile Map Generator est un projet personnel conçu pour générer une carte de jeu vidéo procédurale basée sur des tuiles. Le code original est écrit en Javascript, cependant, il est délibérément conçu pour être facilement recodé en C++ ou C#. Que ce soit pour un jeu roguelike ou simplement pour facilité la conception d'environnement, Tile Map Generator est compact, rapide et sans fin. L'algorithme fonctionne en créant un chemin entre une position de début et une position de fin tout en gardant le nombre maximum de tuiles sous un nombre spécifique.`,
      },
      showcase: '/images/tile-map-generator/showcase.mp4',
      videos: [
        '/images/tile-map-generator/video.mp4',
      ],
      images: [
        '/images/tile-map-generator/0.jpg',
        '/images/tile-map-generator/1.jpg',
        '/images/tile-map-generator/2.jpg',
        '/images/tile-map-generator/3.jpg',
      ],
      externalLink: 'https://levieuxsinge.github.io/CodingExperiments/TileMapGenerator/',
      link: '/project/tile-map-generator/',
    },
  ],
});

export const getters = {
  getLoading: (state) => {
    return state.loading;
  },
  getLanguage: (state) => {
    return state.lang;
  },
  getProject: (state, payload) => {
    return state.projects.find(e => e.name === payload);
  },
  getProjects: (state) => {
    return state.projects;
  },
}

export const mutations = {
  setLoading: (state, payload) => {
    state.loading = payload;
  },
  setLanguage: (state, payload) => {
    state.lang = payload;
  },
  setInvert: (state, payload) => {
    state.layout.invert = payload;
  },
  setCursorText: (state, payload) => {
    state.cursor.text = payload;
  },
  setCursorInvert: (state, payload) => {
    state.cursor.invert = payload;
  },
}