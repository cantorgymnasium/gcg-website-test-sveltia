import { AbiturientenCollection, CantorforaCollection, CantorpreisCollection, ChronikjahreCollection, ChronikseitenCollection, SuperhaufenCollection } from "./collections/index.js";


const config = {
    backend: {
        name: "gitea",
        repo: "gcg/gcg-website",
        branch: "master",
        api_root: "https://git.cantorgymnasium.de/api/v1",
        base_url: "https://oauth.cantorgymnasium.de",
        commit_messages: {
            create: "{{collection}} {{slug}} erstellt",
            update: "{{collection}} {{slug}} aktualisiert",
            delete: "{{collection}} {{slug}} gelöscht",
            updateMedia: "{{path}} hochgeladen",
            deleteMedia: "{{path}} gelöscht"
        }
    },
    local_backend: true,
    media_folder: "/static/media",
    public_folder: "/media",
    media_library: {
        max_file_size: 10240000,
        folder_support: true
    },
    site_url: "https://cantorgymnasium.de/schulchronik/",
    locale: "de",
    slug: {
        encoding: "ascii",
        clean_accents: true,
        sanitize_replacement: "-"
    },
    collections: [
        ChronikjahreCollection,
        SuperhaufenCollection,
        CantorpreisCollection,
        AbiturientenCollection,
        CantorforaCollection,
        ChronikseitenCollection
    ]
};

export default config;