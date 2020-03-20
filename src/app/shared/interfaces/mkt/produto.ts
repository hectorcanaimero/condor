export interface Produto {
    id: number;
    cod_campanha: number;
    cod_produto: number;
    dsc_produto: string;
    dsc_descricao: string;
    dsc_kit?: any;
    embalagem: string;
    departamento: number;
    dsc_departamento: string;
    setor: number;
    dsc_setor: string;
    slug: string;
    data: Data;
    image: string;
    status: number;
    c_at: string;
    campanhaId: number;
}

export interface Data {
    cod_produto: number;
    dsc_produto: string;
    nom_produto: string;
    dsc_detalhe_produto: string;
    dsc_combo?: any;
    dsc_folheto: string;
    dsc_comercial: string;
    cod_referencia_wikimee: string;
    mercadologico: Mercadologico;
    embalagem_venda: Embalagemvenda;
    dsc_informacao_legal: string;
    lst_ean: number[];
    lst_mix_lojas: number[];
    lst_mercadologico_web: Lstmercadologicoweb[];
    lst_preco_regiao: Lstprecoregiao[];
    lst_grupo_preco?: any;
}

export interface Lstprecoregiao {
    cod_regiao: number;
    ind_destaque: boolean;
    ind_tipo_item_kit_regular?: any;
    ind_tipo_item_kit_clube?: any;
    vlr_preco_regular: number;
    vlr_parcela_regular?: any;
    qtd_parcela_regular?: any;
    vlr_preco_clube: number;
    vlr_parcela_clube?: any;
    qtd_parcela_clube?: any;
    lst_mix_regiao: number[];
}

interface Lstmercadologicoweb {
    departamento: Departamento;
    setor: Departamento;
    grupoFamilia?: any;
}

interface Embalagemvenda {
    cod_embalagem_venda: string;
    vlr_quantidade_embalagem: number;
    dsc_unidade_venda: string;
}

interface Mercadologico {
    departamento: Departamento;
    setor: Departamento;
    grupo_familia: Departamento;
    familia: Departamento;
}

interface Departamento {
    ind_nivel: number;
    cod_mercadologico: number;
    dsc_mercadologico: string;
}
