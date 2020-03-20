export interface Product {
    slug?: string;
    slug_departamento: string;
    slug_setor: string;
    embalagem: string;
    dsc_produto: string;
    dsc_descricao: string;
    dsc_kit: string;
    cod_loja: number;
    loja: string;
    cod_produto: number;
    cod_campanha: string;
    cod_regiao: number;
    departamento: string;
    dsc_departamento: string;
    setor: string;
    imagem: string;
    dsc_setor: string;
    campanhaId: number;
    vlr_preco_regular: number;
    vlr_parcela_regular: number;
    vlr_preco_clube: number;
    vlr_parcela_clube: number;
    qtd_parcela_regular: number;
    qtd_parcela_clube: number;
}
