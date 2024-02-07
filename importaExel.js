import ExcelJS from 'exceljs'
import { join } from 'path'
import * as fs from 'fs/promises'



export async function lerPlanilha(dir, sheetName) {
    try {
        
        const nomeArquivo = await LocalizarAquivo(dir)          
        const caminhoArquivo = join(process.cwd(), `${dir}/${nomeArquivo}`)
       
        // Lê o arquivo Excel
        const workbook = new ExcelJS.Workbook()
        await workbook.xlsx.readFile(caminhoArquivo)
        const sheet = workbook.getWorksheet() //passa o seetName se tiver

        
        //captura a primeira linha e percorre as "colunas"
        const colunas = []
        sheet.getRow(1).eachCell({ includeEmpty: false }, (cell) => {
            colunas.push(cell.value)

        })
        // Converter cada linha em um objeto
        const dados = []
        sheet.eachRow({ includeEmpty: false }, (row, rowNumber) => {
            const registro = {}

            if (rowNumber > 1) {
                row.eachCell({ includeEmpty: false }, (cell, colNumber) => {
                    registro[colunas[colNumber - 1]] = cell.value
                })
                dados.push(registro)
            }
        })
        console.log(`Dados Importados ${colunas}`)
        return dados
    } catch (error) {
        console.error('Erro:', error.message)
    }
}




//locarlizar arquivo no diretório especificado (aceita 1 arquivo)
const LocalizarAquivo = async () => {
    const dirArquivo = await fs.readdir('./import', (error, files) => {
        if (!error) {
            return files
        } else return error
    })
    
    if (dirArquivo.length == 1) {
        return dirArquivo[0]
    } else if (dirArquivo.length == 0) {
        throw new Error('Não existe arquivo no diretório import')
    } else if (dirArquivo.length > 1) {
        throw new Error('Existe mais de 1 arquivo no diretório import')
    }
}

//passar como arg o diretorio e sheet name (nome da aba)
//lerPlanilha('./import')