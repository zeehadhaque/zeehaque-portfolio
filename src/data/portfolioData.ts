import { FilmProject, UniverseNode, CraftItem, ProcessStage } from '../types';

/**
 * ZEEHAD HAQUE — PORTFOLIO DATA ARCHITECTURE
 * 
 * Replace image and video paths with your own assets:
 * Example:
 *   posterImage: '/assets/projects/shadow-3/poster.jpg'
 *   stills: [{ url: '/assets/projects/shadow-3/still-01.jpg', caption: 'Scene 04' }]
 *   trailerUrl: 'https://www.youtube.com/embed/YOUR_VIDEO_ID'
 */

export const DIRECTOR_BIO = {
  name: "Zeehad Haque",
  roles: "Filmmaker • Writer • Director • Cinematographer • Editor",
  rolesList: ["FILMMAKER", "WRITER", "DIRECTOR", "CINEMATOGRAPHER", "EDITOR"],
  location: "Bangladesh",
  locationCoords: "23°48'N 90°24'E — DHAKA",
  statement: "I tell stories through images, atmosphere and motion.",
  bioHeadline: "Zeehad Haque is a filmmaker, writer, director, cinematographer and editor from Bangladesh, focused on creating cinematic stories driven by atmosphere, psychology and visual storytelling.",
  philosophy: "Cinema is not merely dialogue captured on camera; it is the deliberate manipulation of shadows, silence, time, and human rhythm. My work explores internal psychological labyrinths, subtle supernatural frictions, and the quiet tensions between individuals and their environments. Every frame is built to linger in the subconscious.",
  verticalTag: "STORY → IMAGE → MOTION → EMOTION",
  metadata: {
    basedIn: "BANGLADESH",
    focus: "CINEMA / STORY / VISUALS",
    craft: "DIRECTING / CINEMATOGRAPHY / EDITING",
    languages: "BENGALI / ENGLISH",
    activeSince: "2022 — PRESENT"
  },
  portraitPlaceholder: "/zeehad.jpg", // Official portrait of Zeehad Haque
  showreelUrl: "https://www.youtube.com/embed/O88euzMxskQ",
  showreelThumbnail: "https://img.youtube.com/vi/O88euzMxskQ/maxresdefault.jpg"
};

export const FILM_PROJECTS: FilmProject[] = [
  {
    id: "anusandhan",
    slug: "anusandhan",
    title: "অনুসন্ধান (Anusandhan)",
    bengaliTitle: "অনুসন্ধান",
    genre: "Psychological Thriller • Comedy",
    format: "Short Film",
    runtime: "12m 40s",
    year: "2025",
    role: "Writer, Director & Editor",
    synopsis: "An obsessive amateur investigator looking into a routine neighborhood disappearance stumbles into a web of bizarre coincidences, deadpan encounters, and escalating psychological absurdity.",
    myRoleDescription: "Orchestrated a delicate balance between deadpan humor and sharp psychological suspense, using lingering observational camera angles, abrupt cutting, and dry situational timing.",
    visualApproach: "Naturalistic, high-contrast urban lighting with muted primary colors. Unflinching medium shots that let comedic tension and uneasy suspicions marinate without musical hand-holding.",
    technicalSpecs: {
      camera: "Cinema 4K Sensor",
      aspectRatio: "2.00:1 Univisium",
      colorSpace: "ACEScc / Custom Low-Contrast Film Emulation",
      lenses: "35mm & 50mm Prime Lenses",
      audio: "Diegetic Foley, Erratic Percussion & Sync Dialogue"
    },
    posterImage: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=900&q=85",
    bannerImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=85",
    trailerUrl: "https://www.youtube.com/embed/O88euzMxskQ",
    thematicTags: ["PSYCHOLOGY", "MYSTERY", "COMEDY", "FEAR"],
    awardsOrNotes: ["Independent Directorial Showcase", "Official Selection"],
    credits: [
      { role: "Written & Directed by", name: "Zeehad Haque" },
      { role: "Director of Photography", name: "Zeehad Haque" },
      { role: "Editor & Colorist", name: "Zeehad Haque" },
      { role: "Cast", name: "Ensemble Cast" },
      { role: "Sound Design", name: "Zeehad Haque" }
    ],
    stills: [
      { url: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=1400&q=85", caption: "The observation sequence — Stakeout through the dusty apartment blinds" },
      { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=85", caption: "Uncanny confrontation across the dining table" },
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85", caption: "Midnight hallway clue examination" }
    ]
  },
  {
    id: "ghurpak",
    slug: "ghurpak",
    title: "ঘুরপাক (GHURPAK)",
    bengaliTitle: "ঘুরপাক",
    genre: "Psychological Dark Comedy",
    format: "Short Film",
    runtime: "21m 15s",
    year: "2024",
    role: "Director, Co-Writer & Editor",
    synopsis: "An unexpected mishap during an illicit high-stakes negotiation in Old Dhaka sets off a dizzying cycle of paranoia, frantic cover-ups, and absurd moral rationalizations among three desperate conspirators.",
    myRoleDescription: "Directorial precision balancing biting dark humor with relentless suspense. Conducted intense rehearsal workshops with the cast to perfect rapid comedic timing and frantic claustrophobia.",
    visualApproach: "Dynamic handheld camerawork in confined spaces, kinetic jump cuts, and punchy saturated color contrast evoking the humid neon-tinged nocturnal alleys of Old Dhaka.",
    technicalSpecs: {
      camera: "Compact Cinema Rig with Gimbal & Shoulder Mount",
      aspectRatio: "2.00:1 Univisium",
      colorSpace: "DCI-P3 / Neon & Shadow Saturation",
      lenses: "Fast Prime Lenses 24mm & 35mm T1.5",
      audio: "Diegetic Street Noise, Erratic Percussion & Sync Dialogue"
    },
    posterImage: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=900&q=85",
    bannerImage: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1920&q=85",
    thematicTags: ["PSYCHOLOGY", "COMEDY", "IDENTITY", "FEAR"],
    awardsOrNotes: ["Audience Choice Winner — National Youth Film Showcase"],
    credits: [
      { role: "Director", name: "Zeehad Haque" },
      { role: "Co-Writer", name: "Zeehad Haque & Collaborators" },
      { role: "Editor", name: "Zeehad Haque" },
      { role: "Ensemble Cast", name: "Ensemble Cast" },
      { role: "Production Coordinator", name: "Independent Arts Collective" }
    ],
    stills: [
      { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=85", caption: "The standoff across the dining table — Tension mounting" },
      { url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85", caption: "Midnight escape through the narrow rain-slicked lanes" },
      { url: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1400&q=85", caption: "The phone call that alters the negotiation terms" }
    ]
  },
  {
    id: "shesh-bikele",
    slug: "shesh-bikele",
    title: "শেষ বিকেলে (The Last Meetup)",
    bengaliTitle: "শেষ বিকেলে",
    genre: "Coming-of-Age • Friendship Drama",
    format: "Short Film",
    runtime: "16m 08s",
    year: "2024",
    role: "Writer, Director & Cinematographer",
    synopsis: "Before life scatters them across distant continents, childhood companions gather for one final afternoon together—where unspoken truths, old loyalties, and the bittersweet sting of growing up come to light.",
    myRoleDescription: "Directed with deep emotional restraint and poetic intimacy, capturing spontaneous naturalistic performances and the fleeting beauty of late-afternoon golden hour light.",
    visualApproach: "Warm amber late-afternoon sunlight, gentle 360-degree tracking shots around the circle of friends, and shallow depth of field honoring micro-expressions and shared laughter.",
    technicalSpecs: {
      camera: "Cinema 4K Sensor / Natural Ambient Light",
      aspectRatio: "2.39:1 Cinemascope",
      colorSpace: "Warm Golden Tone / Subtle Kodak Print Emulation",
      lenses: "50mm & 85mm High-Speed Cine Primes",
      audio: "Acoustic Guitars, Ambient Crickets & Clinking Cups"
    },
    posterImage: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=900&q=85",
    bannerImage: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1920&q=85",
    thematicTags: ["FRIENDSHIP", "MEMORY", "HUMAN EMOTION"],
    awardsOrNotes: ["Shortlist — Youth Indie Screen Showcase"],
    credits: [
      { role: "Director & Cinematographer", name: "Zeehad Haque" },
      { role: "Screenplay", name: "Zeehad Haque" },
      { role: "Colorist", name: "Zeehad Haque" },
      { role: "Cast", name: "Ensemble Cast" },
      { role: "Soundscape", name: "Acoustic Soundscapes" }
    ],
    stills: [
      { url: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1400&q=85", caption: "The riverside gathering — Golden hour light holding the conversation" },
      { url: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1400&q=85", caption: "Shared laughter breaking the silence of departure" },
      { url: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1400&q=85", caption: "Final walk down the open riverbank as twilight falls" }
    ]
  },
  {
    id: "shadow-iii",
    slug: "shadow-iii",
    title: "Shadow / III",
    bengaliTitle: "ছায়া / ৩",
    genre: "Psychological Thriller • Dream Loop",
    format: "Short Film",
    runtime: "7m 21s",
    year: "2025",
    role: "Writer, Director, Cinematographer & Editor",
    synopsis: "A psychological descent where reality, fear, dreams, and optical perception fracture into an endless recursive loop. A solitary individual trapped in an architectural purgatory discovers that the shadows in the corridor move with an independent, predatory rhythm.",
    myRoleDescription: "Wrote the original screenplay, framed every shot to accentuate claustrophobia using anamorphic optical distortion, and edited the film around an unnerving auditory rhythm of sub-bass hums and jarring match-cuts.",
    visualApproach: "Shot in low-key lighting with deep impenetrable blacks (#060708) and sodium-vapor yellow highlights. Controlled dolly creeps and prolonged static frames that challenge the audience to search the darkness.",
    technicalSpecs: {
      camera: "Cinema 4K Sensor / Vintage Anamorphic Glass",
      aspectRatio: "2.39:1 Cinemascope",
      colorSpace: "ACEScc / Custom Kodak 5219 Emulation",
      lenses: "35mm & 50mm Anamorphic T2.0",
      audio: "5.1 Surround Sound Design & Concrete Atmospheres"
    },
    posterImage: "https://img.youtube.com/vi/ZSttExMBavg/maxresdefault.jpg",
    bannerImage: "https://img.youtube.com/vi/ZSttExMBavg/maxresdefault.jpg",
    trailerUrl: "https://www.youtube.com/embed/ZSttExMBavg",
    thematicTags: ["PSYCHOLOGY", "DREAM LOOP", "SUPERNATURAL", "FEAR"],
    awardsOrNotes: ["Official Selection — Independent Genre Showcase", "Best Atmosphere & Sound Design Nominee"],
    credits: [
      { role: "Written & Directed by", name: "Zeehad Haque" },
      { role: "Director of Photography", name: "Zeehad Haque" },
      { role: "Editor & Colorist", name: "Zeehad Haque" },
      { role: "Cast", name: "Solo Performer" },
      { role: "Sound Design", name: "Zeehad Haque" }
    ],
    stills: [
      { url: "https://img.youtube.com/vi/ZSttExMBavg/maxresdefault.jpg", caption: "The Corridor Sequence — Low-key chiaroscuro lighting" },
      { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85", caption: "Threshold of perception — Optical refraction and shadow movement" },
      { url: "https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1400&q=85", caption: "The mirror reflection divergence — Scene 12" }
    ]
  },
  {
    id: "protiddhoni",
    slug: "protiddhoni",
    title: "প্রতিধ্বনি (Protiddhoni / Echo)",
    bengaliTitle: "প্রতিধ্বনি",
    genre: "Literary Drama • Psychological Mystery",
    format: "Short Film",
    runtime: "14m 30s",
    year: "2025",
    role: "Director & Cinematographer",
    synopsis: "An estranged writer returns to an ancestral riverside estate to settle an inheritance, only to find audio tape recordings where an unknown voice recounts intimate conversations that have not yet occurred.",
    myRoleDescription: "Directorial vision centered on literary restraint, psychological nuance, and tactile cinematography that treats physical cassette recorders, dust motes, and river fog as dramatic characters.",
    visualApproach: "Soft diffused daylight mixed with amber lamp reflections. Muted desaturated color grading inspired by 1970s Eastern European art cinema, with naturalistic camera movement.",
    technicalSpecs: {
      camera: "Large Format Cinema Sensor",
      aspectRatio: "1.85:1 Academy Standard",
      colorSpace: "Rec.709 / Film Grain Overlay",
      lenses: "Classic Prime Cine Lenses (40mm & 85mm)",
      audio: "Stereo Magnetic Tape Foley & Minimalist Piano"
    },
    posterImage: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=900&q=85",
    bannerImage: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1920&q=85",
    thematicTags: ["MEMORY", "MYSTERY", "PSYCHOLOGY", "HUMAN EMOTION"],
    awardsOrNotes: ["Literary Screenplay Adaptation Lab", "Short Film Focus — Festival Premiere"],
    credits: [
      { role: "Director", name: "Zeehad Haque" },
      { role: "Cinematography", name: "Zeehad Haque" },
      { role: "Screenplay", name: "Zeehad Haque" },
      { role: "Lead Cast", name: "Lead Cast" },
      { role: "Production Design", name: "Zeehad Haque" }
    ],
    stills: [
      { url: "https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=1400&q=85", caption: "Riverside mist dawn — Opening establishing frame" },
      { url: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=1400&q=85", caption: "The reel-to-reel tape machine playback room" },
      { url: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=1400&q=85", caption: "Intimate two-shot across the handwritten manuscripts" }
    ]
  },
  {
    id: "nokshatror-opare",
    slug: "nokshatror-opare",
    title: "নক্ষত্রের ওপারে (Nokshatro’r Opare)",
    bengaliTitle: "নক্ষত্রের ওপারে",
    genre: "Psychological Mystery • Supernatural Thriller",
    format: "Short Film",
    runtime: "11m 45s",
    year: "2024",
    role: "Writer, Director & Editor",
    synopsis: "During a rare celestial anomaly over the southern river delta, an archivist deciphers an inexplicable nocturnal broadcast that seems to originate from inside their own buried memories.",
    myRoleDescription: "Constructed an atmospheric collision of cosmic dread and poetic emotional resonance, using rhythmically layered audio and elliptical editing to challenge chronological sequence.",
    visualApproach: "Stark contrast between cool indigo starlight and warm tungsten desk lamps. Utilization of deep negative space and slow zoom-outs to evoke cosmic isolation.",
    technicalSpecs: {
      camera: "High-Sensitivity Dual-ISO Cine Camera",
      aspectRatio: "2.39:1 Anamorphic",
      colorSpace: "ACES Proxy / Deep Midnight Indigo Tone",
      lenses: "28mm Ultra-Wide & 75mm Telephoto",
      audio: "Synthesized Radio Waves & Binaural Soundscapes"
    },
    posterImage: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=900&q=85",
    bannerImage: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1920&q=85",
    thematicTags: ["MYSTERY", "SUPERNATURAL", "MEMORY", "PSYCHOLOGY"],
    awardsOrNotes: ["Juror Special Mention — Sci-Fi & Speculative Vision"],
    credits: [
      { role: "Director & Writer", name: "Zeehad Haque" },
      { role: "Editor", name: "Zeehad Haque" },
      { role: "VFX & Optical Effects", name: "Zeehad Haque" },
      { role: "Cast", name: "Ensemble Cast" },
      { role: "Soundscape Composer", name: "Zeehad Haque" }
    ],
    stills: [
      { url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1400&q=85", caption: "The delta observatory under the starless anomaly" },
      { url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=1400&q=85", caption: "Deciphering the spectrogram transmission" },
      { url: "https://images.unsplash.com/photo-1507499739999-097706ad8914?auto=format&fit=crop&w=1400&q=85", caption: "Final transmission sequence — Silhouette against nocturnal horizon" }
    ]
  },
  {
    id: "dont-go-there",
    slug: "dont-go-there",
    title: "DON'T GO THERE / ওই বাড়িটার সামনে যেও না",
    bengaliTitle: "ওই বাড়িটার সামনে যেও না",
    genre: "Mystery • Survival • Action • Psychological Suspense",
    format: "Short Film",
    runtime: "18m 50s",
    year: "2025",
    role: "Writer, Director & Action Choreographer",
    synopsis: "Ignoring local folklore and chilling childhood warnings, a courier enters a walled, decaying colonial estate to retrieve a lost package, only to trigger a lethal psychological trap where every corridor seals behind him and survival demands split-second instinct.",
    myRoleDescription: "Choreographed visceral, high-stakes physical action sequences within claustrophobic architectural geometry, synchronizing rhythmic tension, relentless camera movement, and sensory panic.",
    visualApproach: "Gritty, rain-drenched chiaroscuro with pulsing emergency flares, strobe flashes in pitch darkness, and relentless tracking shots through decaying verandas and locked metal gates.",
    technicalSpecs: {
      camera: "Cinema Rig / Ronin Gimbal & High-Speed Rigging",
      aspectRatio: "2.39:1 Ultra-Widescope",
      colorSpace: "High-Contrast Emerald Teal & Rust Red",
      lenses: "21mm & 35mm Ultra-Fast Anamorphic T1.8",
      audio: "Visceral Action Sound Design, Sub-bass Hits & Spatial Breath Audio"
    },
    posterImage: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=900&q=85",
    bannerImage: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1920&q=85",
    thematicTags: ["MYSTERY", "SURVIVAL", "ACTION", "SUSPENSE", "FEAR"],
    awardsOrNotes: ["Independent Action & Thriller Spotlight"],
    credits: [
      { role: "Written & Directed by", name: "Zeehad Haque" },
      { role: "Cinematographer", name: "Zeehad Haque" },
      { role: "Action & Stunt Director", name: "Zeehad Haque" },
      { role: "Editor", name: "Zeehad Haque" },
      { role: "Cast", name: "Lead Performer & Ensemble" }
    ],
    stills: [
      { url: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1400&q=85", caption: "The iron gate of the colonial estate — Point of no return" },
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85", caption: "Corridor sprint under flickering emergency tungsten flare" },
      { url: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1400&q=85", caption: "Climactic standoff at the courtyard threshold" }
    ]
  },
  {
    id: "reflect-1",
    slug: "reflect-1",
    title: "Reflect 1 (রেফ্লেক্ট ১)",
    bengaliTitle: "রেফ্লেক্ট ১",
    genre: "Psychological Thriller • Time Loop",
    format: "Short Film",
    runtime: "6m 45s",
    year: "2024",
    role: "Writer, Director, Cinematographer & Editor",
    synopsis: "A chilling psychological experiment where a lone protagonist awakens inside an inescapable temporal paradox—discovering that his reflection in every mirror is acting seconds ahead of reality, foreshadowing an inevitable fatal choice.",
    myRoleDescription: "Designed recursive camera movements and mirror split-screens to construct seamless, claustrophobic temporal loops without relying on CGI, grounding the mystery in pure optical rhythm.",
    visualApproach: "Cold metallic monochrome tones with icy cyan highlights, anamorphic lens flares, and symmetrical frame compositions that heighten psychological disorientation.",
    technicalSpecs: {
      camera: "Cinema 4K Rig / Optical Prism Glass",
      aspectRatio: "2.39:1 Cinemascope",
      colorSpace: "Bleach Bypass / Cold Tungsten Grading",
      lenses: "28mm & 50mm High-Speed Cine Primes",
      audio: "Reverse Reverb Foley, Clock Ticks & Atmospheric Sub-Bass"
    },
    posterImage: "https://img.youtube.com/vi/I11_0aB_IOM/maxresdefault.jpg",
    bannerImage: "https://img.youtube.com/vi/I11_0aB_IOM/maxresdefault.jpg",
    trailerUrl: "https://www.youtube.com/embed/I11_0aB_IOM",
    thematicTags: ["PSYCHOLOGY", "TIME LOOP", "MYSTERY", "FEAR"],
    awardsOrNotes: ["Independent Sci-Fi & Thriller Showcase"],
    credits: [
      { role: "Written & Directed by", name: "Zeehad Haque" },
      { role: "Cinematographer & Colorist", name: "Zeehad Haque" },
      { role: "Lead Editor", name: "Zeehad Haque" },
      { role: "Cast", name: "Ensemble" },
      { role: "Sound Design", name: "Zeehad Haque" }
    ],
    stills: [
      { url: "https://img.youtube.com/vi/I11_0aB_IOM/maxresdefault.jpg", caption: "The mirror threshold — Temporal divergence sequence" },
      { url: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&w=1400&q=85", caption: "The repetitive corridor loop encounter" },
      { url: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=1400&q=85", caption: "Desperate calculation of the cycle timestamps" }
    ]
  },
  {
    id: "reflect-2",
    slug: "reflect-2",
    title: "Reflect 2 (রেফ্লেক্ট ২)",
    bengaliTitle: "রেফ্লেক্ট ২",
    genre: "Psychological Thriller • Time Loop",
    format: "Short Film",
    runtime: "8m 12s",
    year: "2024",
    role: "Writer, Director, Cinematographer & Editor",
    synopsis: "The terrifying continuation of the time loop paradox. As multiple timelines bleed into one another, the protagonist must race against decaying temporal echoes to break the cycle before consciousness shatters permanently.",
    myRoleDescription: "Expanded the directorial canvas into faster-paced kinetic psychological suspense, layering rapid montage rhythms, conflicting soundscapes, and intense physical acting.",
    visualApproach: "Heavy low-key chiaroscuro contrasted with aggressive red warning strobe lighting, rapid whip pans, and macro close-ups amplifying the existential panic of trapped repetition.",
    technicalSpecs: {
      camera: "High-Speed Cinema 4K Rig / Handheld & Gimbal",
      aspectRatio: "2.39:1 Cinemascope",
      colorSpace: "Deep Shadow Crush / High-Contrast Neon Red & Black",
      lenses: "24mm & 35mm Ultra-Fast Cine Primes",
      audio: "Multi-layered Temporal Echoes, Heartbeats & Glitch Soundscapes"
    },
    posterImage: "https://img.youtube.com/vi/qeRZNvjSX8U/maxresdefault.jpg",
    bannerImage: "https://img.youtube.com/vi/qeRZNvjSX8U/maxresdefault.jpg",
    trailerUrl: "https://www.youtube.com/embed/qeRZNvjSX8U",
    thematicTags: ["PSYCHOLOGY", "TIME LOOP", "SUSPENSE", "FEAR"],
    awardsOrNotes: ["Genre Spotlight — Dark Fiction & Suspense"],
    credits: [
      { role: "Written & Directed by", name: "Zeehad Haque" },
      { role: "Cinematographer & Colorist", name: "Zeehad Haque" },
      { role: "Lead Editor", name: "Zeehad Haque" },
      { role: "Cast", name: "Ensemble" },
      { role: "Sound Design", name: "Zeehad Haque" }
    ],
    stills: [
      { url: "https://img.youtube.com/vi/qeRZNvjSX8U/maxresdefault.jpg", caption: "The decaying timeline encounter — Climactic standoff" },
      { url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1400&q=85", caption: "Fractured reflections merging across overlapping cycles" },
      { url: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=1400&q=85", caption: "Final attempt to shatter the temporal loop mechanism" }
    ]
  }
];

export const UNIVERSE_THEMES = [
  "ALL",
  "PSYCHOLOGY",
  "TIME LOOP",
  "DREAM LOOP",
  "MYSTERY",
  "COMEDY",
  "FRIENDSHIP",
  "SUPERNATURAL",
  "SURVIVAL",
  "ACTION",
  "SUSPENSE",
  "MEMORY",
  "HUMAN EMOTION"
] as const;

export const UNIVERSE_NODES: UniverseNode[] = [
  {
    id: "node-anusandhan",
    projectId: "anusandhan",
    title: "অনুসন্ধান (Anusandhan)",
    bengaliTitle: "অনুসন্ধান",
    genre: "Psychological Thriller • Comedy",
    runtime: "12m 40s",
    x: 18,
    y: 42,
    themes: ["PSYCHOLOGY", "MYSTERY", "COMEDY", "FEAR"],
    connectedTo: ["ghurpak", "shadow-iii", "dont-go-there"],
    shortHook: "An amateur investigation that unravels into deadpan psychological absurdity.",
    posterThumb: "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "node-ghurpak",
    projectId: "ghurpak",
    title: "ঘুরপাক (GHURPAK)",
    bengaliTitle: "ঘুরপাক",
    genre: "Psychological Dark Comedy",
    runtime: "21m 15s",
    x: 28,
    y: 75,
    themes: ["PSYCHOLOGY", "COMEDY", "FEAR"],
    connectedTo: ["anusandhan", "dont-go-there", "shesh-bikele"],
    shortHook: "A spiraling cycle of frantic cover-ups in the dark alleys of Old Dhaka.",
    posterThumb: "https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "node-shesh-bikele",
    projectId: "shesh-bikele",
    title: "শেষ বিকেলে (The Last Meetup)",
    bengaliTitle: "শেষ বিকেলে",
    genre: "Coming-of-Age • Friendship Drama",
    runtime: "16m 08s",
    x: 78,
    y: 78,
    themes: ["FRIENDSHIP", "MEMORY", "HUMAN EMOTION"],
    connectedTo: ["ghurpak", "protiddhoni"],
    shortHook: "One final golden-hour gathering before childhood companions scatter forever.",
    posterThumb: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "node-shadow",
    projectId: "shadow-iii",
    title: "Shadow / III",
    bengaliTitle: "ছায়া / ৩",
    genre: "Psychological Thriller • Dream Loop",
    runtime: "7m 21s",
    x: 25,
    y: 18,
    themes: ["PSYCHOLOGY", "DREAM LOOP", "FEAR", "SUPERNATURAL"],
    connectedTo: ["reflect-1", "reflect-2", "nokshatror-opare"],
    shortHook: "The boundary where optical perception fractures into a recursive dream loop.",
    posterThumb: "https://img.youtube.com/vi/ZSttExMBavg/maxresdefault.jpg"
  },
  {
    id: "node-reflect-1",
    projectId: "reflect-1",
    title: "Reflect 1 (রেফ্লেক্ট ১)",
    bengaliTitle: "রেফ্লেক্ট ১",
    genre: "Psychological Thriller • Time Loop",
    runtime: "6m 45s",
    x: 42,
    y: 14,
    themes: ["PSYCHOLOGY", "TIME LOOP", "MYSTERY", "FEAR"],
    connectedTo: ["reflect-2", "shadow-iii", "protiddhoni"],
    shortHook: "Reflections moving ahead of reality inside an inescapable temporal paradox.",
    posterThumb: "https://img.youtube.com/vi/I11_0aB_IOM/maxresdefault.jpg"
  },
  {
    id: "node-reflect-2",
    projectId: "reflect-2",
    title: "Reflect 2 (রেফ্লেক্ট ২)",
    bengaliTitle: "রেফ্লেক্ট ২",
    genre: "Psychological Thriller • Time Loop",
    runtime: "8m 12s",
    x: 58,
    y: 14,
    themes: ["PSYCHOLOGY", "TIME LOOP", "SUSPENSE", "FEAR"],
    connectedTo: ["reflect-1", "dont-go-there", "nokshatror-opare"],
    shortHook: "Decaying timelines bleeding into one another in an existential loop.",
    posterThumb: "https://img.youtube.com/vi/qeRZNvjSX8U/maxresdefault.jpg"
  },
  {
    id: "node-protiddhoni",
    projectId: "protiddhoni",
    title: "প্রতিধ্বনি (Protiddhoni / Echo)",
    bengaliTitle: "প্রতিধ্বনি",
    genre: "Literary Drama • Psychological Mystery",
    runtime: "14m 30s",
    x: 52,
    y: 36,
    themes: ["MEMORY", "MYSTERY", "PSYCHOLOGY", "HUMAN EMOTION"],
    connectedTo: ["nokshatror-opare", "shesh-bikele", "reflect-1"],
    shortHook: "Tape recordings of conversations that have not yet occurred.",
    posterThumb: "https://images.unsplash.com/photo-1517411032315-54ef2cb783bb?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "node-nokshatro",
    projectId: "nokshatror-opare",
    title: "নক্ষত্রের ওপারে (Nokshatro’r Opare)",
    bengaliTitle: "নক্ষত্রের ওপারে",
    genre: "Psychological Mystery • Supernatural Thriller",
    runtime: "11m 45s",
    x: 84,
    y: 28,
    themes: ["MYSTERY", "SUPERNATURAL", "MEMORY", "PSYCHOLOGY"],
    connectedTo: ["shadow-iii", "protiddhoni", "reflect-2"],
    shortHook: "A celestial transmission intercepting the internal landscape of memory.",
    posterThumb: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: "node-dont-go-there",
    projectId: "dont-go-there",
    title: "DON'T GO THERE / ওই বাড়িটার সামনে যেও না",
    bengaliTitle: "ওই বাড়িটার সামনে যেও না",
    genre: "Mystery • Survival • Action • Suspense",
    runtime: "18m 50s",
    x: 50,
    y: 62,
    themes: ["MYSTERY", "SURVIVAL", "ACTION", "SUSPENSE", "FEAR"],
    connectedTo: ["anusandhan", "shadow-iii", "reflect-2", "ghurpak"],
    shortHook: "A trespassing courier trapped in a lethal colonial mansion where every corridor closes.",
    posterThumb: "https://images.unsplash.com/photo-1509281373149-e957c6296406?auto=format&fit=crop&w=400&q=80"
  }
];

export const CRAFT_ITEMS: CraftItem[] = [
  {
    number: "01",
    title: "DIRECTING",
    summary: "Turning scripts and ideas into visual sequences with controlled performances, composition, pacing and atmosphere.",
    fullDescription: "Directing is orchestrating subconscious tension. I collaborate closely with performers to find unforced, psychological authenticity, shaping the tempo of every scene so silence speaks as forcefully as spoken text. Every camera setup is treated as an editorial decision made before the take.",
    keyAspects: [
      "Actor collaboration & psychological subtext",
      "Rhythm, spatial blocking & camera choreography",
      "Atmospheric control and genre elevation",
      "Tone calibration between suspense and vulnerability"
    ],
    toolsAndMethods: [
      "Shot listing with overhead blocking diagrams",
      "Character intention beats & psychological maps",
      "Auditory mood boards & onset tempo guides"
    ]
  },
  {
    number: "02",
    title: "CINEMATOGRAPHY",
    summary: "Creating visual language through framing, movement, lighting, lens choices and composition.",
    fullDescription: "Cinematography is lighting the psychology of the scene. Rather than illuminating merely for visibility, I sculpt darkness to conceal, reveal, and unnerve. By pairing deliberate camera motion with purposeful lens aberrations and low-key lighting, the frame becomes an emotional conduit.",
    keyAspects: [
      "Chiaroscuro and purposeful shadow sculpting",
      "Anamorphic vs spherical optical character selection",
      "Subtle motivated camera movement & slow dolly creeps",
      "Naturalistic low-light & environmental texture"
    ],
    toolsAndMethods: [
      "Large-format and cinema sensor workflows",
      "Anamorphic glass, vintage primes & diffusion filters",
      "Gimbal, dolly, slider and handheld rig balance"
    ]
  },
  {
    number: "03",
    title: "VIDEO EDITING",
    summary: "Building rhythm, emotion, tension and narrative structure through cuts, sound and pacing.",
    fullDescription: "The cut is the heartbeat of cinema. Editing is where a film finds its true breath. Whether orchestrating rapid, breath-stealing montage or holding a static take until the viewer squirmingly examines every corner of the screen, pacing is sculpted to govern emotional investment.",
    keyAspects: [
      "Psychological pacing and tension modulation",
      "Match-cuts, J-cuts & sound-bridge transitions",
      "Elliptical non-linear storytelling",
      "Micro-rhythm adjustments to frame-by-frame beats"
    ],
    toolsAndMethods: [
      "DaVinci Resolve Studio & Premiere Pro workflows",
      "Sound design temp track scoring & sub-bass structuring",
      "Multi-cam and complex sync narrative assembly"
    ]
  },
  {
    number: "04",
    title: "COLOR GRADING",
    summary: "Creating cinematic mood, contrast and visual consistency.",
    fullDescription: "Color sets the thermal temperature of the narrative. Rather than applying generic cinematic presets, each film receives a bespoke palette that respects skin tones while establishing a cohesive atmospheric identity—from oppressive midnight indigos to melancholic sodium yellows.",
    keyAspects: [
      "Film stock emulation (Kodak 5219, 2383 D65)",
      "ACES and scene-referred color management",
      "Dense shadow roll-offs with rich highlight retention",
      "Bespoke look-LUT creation tailored to production lighting"
    ],
    toolsAndMethods: [
      "DaVinci Resolve advanced node grading",
      "Colorist calibration and gamut mapping",
      "Film grain texture grafting & halation tuning"
    ]
  },
  {
    number: "05",
    title: "STORY DEVELOPMENT",
    summary: "Developing concepts, characters, suspense and narrative structure.",
    fullDescription: "Every visual flourish is hollow without an iron-clad narrative core. I develop stories rooted in psychological friction, moral ambiguity, and culturally specific Bengali contexts that translate globally through universal human stakes.",
    keyAspects: [
      "High-concept mystery & supernatural hook ideation",
      "Three-dimensional character vulnerability & flaws",
      "Subtextual dialogue and atmospheric set-pieces",
      "Scene-by-scene structural outline & treatments"
    ],
    toolsAndMethods: [
      "Screenplay drafting in standard industry formatting",
      "Beat sheets, narrative corkboards & sequence cards",
      "Visual lookbooks & directorial pitch bibles"
    ]
  },
  {
    number: "06",
    title: "VISUAL STORYTELLING",
    summary: "Using images, movement and atmosphere to communicate what dialogue cannot.",
    fullDescription: "Cinema at its purest operates without verbal crutches. Visual storytelling is the art of communicating history, motive, and dread purely through spatial orientation, optical focus shifts, reflections, and environmental detritus.",
    keyAspects: [
      "Pure visual metaphor and motif repetition",
      "Spatial relationships expressing power dynamics",
      "Environmental decay and production design synergy",
      "Visual exposition embedded in the mise-en-scène"
    ],
    toolsAndMethods: [
      "Directorial storyboard sketches & reference reels",
      "Symbolic color & framing language dictionaries",
      "Dynamic visual pacing charts"
    ]
  }
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    step: "01",
    title: "IDEA",
    phase: "Conceptual Genesis",
    description: "Finding the obsessive core question or image that refuses to leave. Exploring themes of memory, guilt, perception, and supernatural unease.",
    deliverables: ["Logline", "Thematic premise", "Visual tone moodboard"]
  },
  {
    step: "02",
    title: "STORY",
    phase: "Script & Treatment",
    description: "Translating the obsession into narrative structure. Writing dialogue that hides more than it exposes, and drafting psychological scene beats.",
    deliverables: ["Screenplay draft", "Scene breakdown", "Directorial statement"]
  },
  {
    step: "03",
    title: "PRE-PRODUCTION",
    phase: "Architecting the World",
    description: "Casting, location scouting across Bangladesh's rich visual tapestry, shot listing, and determining the camera and optical package.",
    deliverables: ["Shot list & overheads", "Lookbook & lighting bible", "Crew & schedule assembly"]
  },
  {
    step: "04",
    title: "SHOOT",
    phase: "Principal Photography",
    description: "Executing on set with discipline and spontaneity. Guiding actors to emotional truth while sculpting every shadow and camera movement.",
    deliverables: ["Raw cinema camera footage", "Sync location audio", "On-set color verified dailies"]
  },
  {
    step: "05",
    title: "EDIT",
    phase: "Narrative Assembly & Rhythm",
    description: "Reshaping the film in the edit suite. Finding the exact cut points where tension builds, eliminating excess, and building the sonic foundation.",
    deliverables: ["Assembly cut", "Director's rough cut", "Picture lock cut"]
  },
  {
    step: "06",
    title: "COLOR",
    phase: "Atmospheric Grading",
    description: "Finishing the visuals in DaVinci Resolve. Infusing the imagery with organic film grain, rich shadow density, and distinct color harmony.",
    deliverables: ["Color master", "Highlight roll-off balancing", "DCI-P3 & Rec.709 renders"]
  },
  {
    step: "07",
    title: "FINAL CUT",
    phase: "Mastering & Exhibition",
    description: "Final surround audio mix, theatrical credits, festival DCP delivery, and high-fidelity archival masters ready for screens worldwide.",
    deliverables: ["Theatrical DCP / ProRes 422 HQ master", "Festival press kit", "Exhibition teaser"]
  }
];

export const CONTACT_INFO = {
  email: "zeehadhaque@gmail.com",
  phone: "01629851155",
  formattedPhone: "+880 1629-851155",
  whatsappUrl: "https://wa.me/8801629851155",
  whatsappTextUrl: "https://wa.me/8801629851155?text=Hello%20Zeehad,%20I%20would%20like%20to%20collaborate%20on%20a%20film%20project.",
  telUrl: "tel:+8801629851155",
  location: "Dhaka, Bangladesh"
};

export const SOCIAL_LINKS = [
  { label: "WhatsApp", href: "https://wa.me/8801629851155", handle: "01629851155", note: "DIRECT CHAT & CALLS" },
  { label: "Gmail", href: "mailto:zeehadhaque@gmail.com", handle: "zeehadhaque@gmail.com", note: "OFFICIAL INBOX" },
  { label: "YouTube", href: "https://youtube.com/@zeehadhaque", handle: "@zeehadhaque", note: "OFFICIAL FILMS" },
  { label: "Instagram", href: "https://instagram.com/zeehadhaque", handle: "@zeehadhaque", note: "VISUAL STILLS" },
  { label: "Facebook", href: "https://facebook.com/zeehadhaque", handle: "zeehadhaque", note: "UPDATES" },
  { label: "LinkedIn", href: "https://linkedin.com/in/zeehadhaque", handle: "in/zeehadhaque", note: "NETWORK" }
];
