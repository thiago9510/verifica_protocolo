import ExcelJS from 'exceljs'

// Função para exportar dados para um arquivo Excel
export const exportToExcel = async (data, filename) => {

    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Sheet 1')

    // Adiciona os cabeçalhos
    const headers = Object.keys(data[0])
    worksheet.addRow(headers);

    // Adiciona os dados
    data.forEach((row) => {
        worksheet.addRow(Object.values(row))
    });

    // Salva o arquivo Excel    
    await workbook.xlsx.writeFile(`export/${filename}.xlsx`)
    console.log(`Dados Exportados ${headers}`)
}

//passa os dados e o nome do arquivo
//exportToExcel(data, 'dadosExportados')  //dados/nome do arquivo