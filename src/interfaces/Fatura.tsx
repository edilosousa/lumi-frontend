export interface Fatura {
    idfatura: number;
    uccliente: string;
    mesfatura: string;
    datavencimentofatura: string;
    qtdkwhenergiaeletricafatura: number
	qtdkwhenergiainjetadafatura: number
	qtdkwhenergiacompensadafatura: number
	valorenergiaeletricafaturaFormatado: string
	valorenergiainjetadafaturaFormatado: number
	valorenergiacompensadafaturaFormatado: number
	valoriluminacaopublicafaturaFormatado: number
	valortotalfaturaFormatado: number
	precoenergiaeletricafaturaFormatado: number
	precoenergiainjetadafaturaFormatado: number
	precoenergiacompensadafaturaFormatado: number
}