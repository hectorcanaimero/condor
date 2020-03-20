export interface Json {
    footer: Footer;
    blog: Blog;
}

export interface Footer {
    logo: string;
    copyright: string;
    institucional: Institucional[];
    servicos: Institucional[];
    midia: Midia[];
}

export interface Midia {
    icon: string;
    url: string;
}

export interface Institucional {
    name: string;
    url: string;
}

export interface Blog {
    titulo: string;
    icon: string;
    qtd: number;
    col: number;
    btntitulo: string;
    btnurl: string;
}
