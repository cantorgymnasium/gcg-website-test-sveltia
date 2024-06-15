import {
  AbiturientenCollection,
  AuthorCollection,
  BegabteCollection,
  BlogCollection,
  CantorforaCollection,
  CantorpreisCollection,
  ChronikjahreCollection,
  ChronikseitenCollection,
  FormsCollection,
  GanztagCollection,
  IndexPagesCollection,
  PagesCollection,
  ProjektwocheCollection,
  SettingsCollection,
  StatsCollection,
  SuperhaufenCollection,
  WettbewerbeCollection,
} from "./collections/index.js";
import { GCGThemeDark, GCGThemeLight } from "./themes.js";

const config = {
  backend: {
    name: "gitea",
    repo: "gcg/gcg-website",
    branch: "master",
    api_root: "https://git.cantorgymnasium.de/api/v1",
    base_url: "https://git.cantorgymnasium.de",
    app_id: "1b612fb1-fbc1-44b2-9b9d-6eeb1dc55bff",
    commit_messages: {
      create: "{{collection}} {{slug}} erstellt",
      update: "{{collection}} {{slug}} aktualisiert",
      delete: "{{collection}} {{slug}} gelöscht",
      updateMedia: "{{path}} hochgeladen",
      deleteMedia: "{{path}} gelöscht",
    },
  },
  local_backend: true,
  media_folder: "static/media",
  public_folder: "/media",
  media_library: {
    max_file_size: 10240000,
    folder_support: true,
  },
  site_url: "https://cantorgymnasium.de",
  locale: "de",
  slug: {
    encoding: "ascii",
    clean_accents: true,
    sanitize_replacement: "-",
  },
  theme: {
    default_theme: "GCG.Dark",
    include_built_in_themes: false,
    themes: [
      GCGThemeDark,
      GCGThemeLight
    ],  
  },
  collections: [
    SettingsCollection,
    IndexPagesCollection,
    PagesCollection,
    AuthorCollection,
    BlogCollection,
    FormsCollection,
    GanztagCollection,
    WettbewerbeCollection,
    BegabteCollection,
    ProjektwocheCollection,
    ChronikjahreCollection,
    SuperhaufenCollection,
    CantorpreisCollection,
    AbiturientenCollection,
    CantorforaCollection,
    ChronikseitenCollection,
    StatsCollection,
  ],
};

export default config;
