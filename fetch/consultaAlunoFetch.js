import { URL, TOKEN } from "../settings.js"

export const consultaAlunoFetch = async (aluno) => {
    try {

        let url = `${URL}/matricula/acadgeral-aluno-curso/search-for-json?aluno=true&query=${aluno.cpf}`

        let options = {
            method: 'GET',
            headers: {
                Accept: 'application/json, text/javascript, */*; q=0.01',
                'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
                Connection: 'keep-alive',
                Cookie: TOKEN,
                Referer: `${URL}/protocolo/protocolo`,
                'Sec-Fetch-Dest': 'empty',
                'Sec-Fetch-Mode': 'cors',
                'Sec-Fetch-Site': 'same-origin',
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36 OPR/106.0.0.0',
                'X-Requested-With': 'XMLHttpRequest',
                'sec-ch-ua': '"Not_A Brand";v="8", "Chromium";v="120", "Opera GX";v="106"',
                'sec-ch-ua-mobile': '?0',
                'sec-ch-ua-platform': '"Windows"'
            }
        }
        const responseConsultaALunoFetch = await fetch(url, options)
        const json = await responseConsultaALunoFetch.json()
        return json
    } catch (error) {
        console.log(error)
        return error
    }
}