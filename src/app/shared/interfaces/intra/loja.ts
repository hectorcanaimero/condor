export interface Loja {
    id: number;
    date: string;
    date_gmt: string;
    guid: Guid;
    modified: string;
    modified_gmt: string;
    slug: string;
    status: string;
    type: string;
    link: string;
    title: Guid;
    content: Content;
    featured_media: number;
    template: string;
    region: string;
    condor: Condor;
    lat: string;
    lng: string;
    cidade: string;
    setores: string;
    servicos: string;
    yoast_meta: Yoastmeta;
    _links: Links;
}

interface Links {
    self: Self[];
    collection: Self[];
    about: Self[];
    curies: Cury[];
}

interface Cury {
    name: string;
    href: string;
    templated: boolean;
}

interface Wpterm {
    taxonomy: string;
    embeddable: boolean;
    href: string;
}

interface Wpfeaturedmedia {
    embeddable: boolean;
    href: string;
}

interface Self {
    href: string;
}

interface Yoastmeta {
    yoast_wpseo_title: string;
    yoast_wpseo_metadesc: string;
    yoast_wpseo_canonical: string;
}

interface Condor {
    _edit_last: string[];
    _edit_lock: string[];
    _thumbnail_id: string[];
    lat: string[];
    lng: string[];
    region: string[];
    cidade: string[];
    setores: string[];
    servicos: string[];
    cod_loja: string[];
}

interface Content {
    rendered: string;
    protected: boolean;
}

interface Guid {
    rendered: string;
}
