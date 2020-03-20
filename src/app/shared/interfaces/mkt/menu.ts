export interface MenuDepartamento {
    codigo: number;
    nome: string;
}

export interface MenuSetor {
    codigo: number;
    nome: string;
    dep_id: number;
}
