export interface Tabloide {
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
    template: string;
    condor: Condor;
    issuu: string;
    lat: string;
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
    issuu: string[];
}

interface Guid {
    rendered: string;
}
