export interface Banner {
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
    featured_media: number;
    template: string;
    url: string;
    position: string;
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

interface Guid {
    rendered: string;
}
