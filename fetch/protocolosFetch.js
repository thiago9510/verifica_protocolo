import { URL, TOKEN } from "../settings.js"

export const consultaProtocoloFetch = async (ResConsultaAluno) => {

    try {

        const encodedParams = new URLSearchParams()    
       

        encodedParams.set('draw', '4');
        encodedParams.set('columns[0][data]', 'protocoloIdFormatado');
        encodedParams.set('columns[0][name]', 'protocolo_id');
        encodedParams.set('columns[0][searchable]', 'true');
        encodedParams.set('columns[0][orderable]', 'true');
        encodedParams.set('', 'columns[0][search][value]=');
        encodedParams.set('columns[0][search][regex]', 'false');
        encodedParams.set('columns[1][data]', 'setor_descricao');
        encodedParams.set('columns[1][name]', 'setor_descricao');
        encodedParams.set('columns[1][searchable]', 'true');
        encodedParams.set('columns[1][orderable]', 'true');
        encodedParams.set('', 'columns[1][search][value]=');
        encodedParams.set('columns[1][search][regex]', 'false');
        encodedParams.set('columns[2][data]', 'solicitacao_descricao');
        encodedParams.set('columns[2][name]', 'solicitacao_descricao');
        encodedParams.set('columns[2][searchable]', 'true');
        encodedParams.set('columns[2][orderable]', 'true');
        encodedParams.set('', 'columns[2][search][value]=');
        encodedParams.set('columns[2][search][regex]', 'false');
        encodedParams.set('columns[3][data]', 'protocolo_assunto');
        encodedParams.set('columns[3][name]', 'protocolo_assunto');
        encodedParams.set('columns[3][searchable]', 'true');
        encodedParams.set('columns[3][orderable]', 'true');
        encodedParams.set('', 'columns[3][search][value]=');
        encodedParams.set('columns[3][search][regex]', 'false');
        encodedParams.set('columns[4][data]', 'nome_responsavel');
        encodedParams.set('columns[4][name]', 'nome_responsavel');
        encodedParams.set('columns[4][searchable]', 'true');
        encodedParams.set('columns[4][orderable]', 'true');
        encodedParams.set('', 'columns[4][search][value]=');
        encodedParams.set('columns[4][search][regex]', 'false');
        encodedParams.set('columns[5][data]', 'protocolo_solicitante');
        encodedParams.set('columns[5][name]', 'protocolo_solicitante');
        encodedParams.set('columns[5][searchable]', 'true');
        encodedParams.set('columns[5][orderable]', 'true');
        encodedParams.set('', 'columns[5][search][value]=');
        encodedParams.set('columns[5][search][regex]', 'false');
        encodedParams.set('columns[6][data]', 'protocolo_data_cadastro_formatada');
        encodedParams.set('columns[6][name]', 'protocolo_data_cadastro');
        encodedParams.set('columns[6][searchable]', 'true');
        encodedParams.set('columns[6][orderable]', 'true');
        encodedParams.set('', 'columns[6][search][value]=');
        encodedParams.set('columns[6][search][regex]', 'false');
        encodedParams.set('columns[7][data]', 'protocolo_data_alteracao_formatada');
        encodedParams.set('columns[7][name]', 'protocolo_data_alteracao');
        encodedParams.set('columns[7][searchable]', 'true');
        encodedParams.set('columns[7][orderable]', 'true');
        encodedParams.set('', 'columns[7][search][value]=');
        encodedParams.set('columns[7][search][regex]', 'false');
        encodedParams.set('columns[8][data]', 'protocolo_data_vencimento_formatada');
        encodedParams.set('columns[8][name]', 'protocolo_data_vencimento');
        encodedParams.set('columns[8][searchable]', 'true');
        encodedParams.set('columns[8][orderable]', 'true');
        encodedParams.set('', 'columns[8][search][value]=');
        encodedParams.set('columns[8][search][regex]', 'false');
        encodedParams.set('columns[9][data]', 'protocolo_situacao');
        encodedParams.set('columns[9][name]', 'protocolo_situacao');
        encodedParams.set('columns[9][searchable]', 'true');
        encodedParams.set('columns[9][orderable]', 'true');
        encodedParams.set('', 'columns[9][search][value]=');
        encodedParams.set('columns[9][search][regex]', 'false');
        encodedParams.set('columns[10][data]', 'acao');
        encodedParams.set('columns[10][name]', 'protocolo_id');
        encodedParams.set('columns[10][searchable]', 'true');
        encodedParams.set('columns[10][orderable]', 'true');
        encodedParams.set('', 'columns[10][search][value]=');
        encodedParams.set('columns[10][search][regex]', 'false');
        encodedParams.set('order[0][column]', '0');
        encodedParams.set('order[0][dir]', 'desc');
        encodedParams.set('start', '0');
        encodedParams.set('length', '10');
        encodedParams.set('', 'search[value]=');
        encodedParams.set('search[regex]', 'false');
        encodedParams.set('filter[situacao]', 'Aberto, Em Andamento')
        encodedParams.set('filter[setor]', '17') //Central de Registros Acadêmicos - Graduação
        encodedParams.set('filter[protocoloSolicitanteAluno]', ResConsultaAluno.alunoId)
        encodedParams.set('index', 'true');
        encodedParams.set('filtroObrigatorio', '0');

        let url = `${URL}/protocolo/protocolo/search`;

        let options = {
            method: 'POST',
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
                Connection: 'keep-alive',
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
                Cookie: TOKEN,
                Origin: URL,
                Referer: `${URL}/protocolo/protocolo`,
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
                'X-Requested-With': 'XMLHttpRequest',
                'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Opera GX";v="106"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"'
            },
            body: encodedParams
        };

        const responseConsultaProtocolo = await fetch(url, options)
        const json = await responseConsultaProtocolo.json()
        return json
    } catch (error) {
        console.error(error)
        return error

    }

}