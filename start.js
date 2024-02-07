import { lerPlanilha } from "./importaExel.js"
import { exportToExcel } from "./exportaExel.js"
import { consultaAlunoFetch } from "./fetch/consultaAlunoFetch.js"
import { consultaProtocoloFetch } from "./fetch/protocolosFetch.js"

const start = async () => {

    const AlunosConsultados = []
    const AlunosNaoLocalizados = []
    try {
        const dadosPlanilha = await lerPlanilha('./import')
        for (let aluno of dadosPlanilha) {
            try {
                const ResConsultaAluno = await consultaAlunoFetch(aluno)
                if (ResConsultaAluno.length <= 1) {
                    //aluno so tem 1 curso                
                    try {
                        const retornoProtocolos = await consultaProtocoloFetch(ResConsultaAluno[0])
                        if (retornoProtocolos.data.length == 0) {
                            console.log(`Não existe protocolo em Aberto ou em Andamento`)
                            console.log(retornoProtocolos.data.length)                            
                        }else if (retornoProtocolos.data.length == 1){
                            console.log(`Existe 1 protocolo`)
                            console.log(retornoProtocolos.data.length)
                        } else if (retornoProtocolos.data.length > 1) {
                            console.log(`Existe mais de 1 protocolo`)
                            console.log(retornoProtocolos.data.length)
                        }
                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    //mais de 1 curso
                    for (let arrayAluno of ResConsultaAluno) {
                        if (arrayAluno.cursoNome === aluno.cursoExcel) {
                            console.log(`aluno tem mais de 1 curso e foi localizado: ${ResConsultaAluno.length}`)
                            try {
                                const retornoProtocolos = await consultaProtocoloFetch(ResConsultaAluno[0])
                                if (retornoProtocolos.data.length == 0) {
                                    console.log(`Não existe protocolo em Aberto ou em Andamento`)
                                    console.log(retornoProtocolos.data.length)                            
                                }else if (retornoProtocolos.data.length == 1){
                                    console.log(`Existe 1 protocolo`)
                                    console.log(retornoProtocolos.data.length)
                                } else if (retornoProtocolos.data.length > 1) {
                                    console.log(`Existe mais de 1 protocolo`)
                                    console.log(retornoProtocolos.data.length)
                                }
                            } catch (error) {
                                console.log(error)
                            }
                        } else {
                            //curso nao localizado pelo nome
                            console.log(`Curso não localizado ${arrayAluno}`)
                        }
                    }
                }
            } catch (error) {
                console.error(error)
            }

        }
        //retornar dados

        //exportToExcel(dadosPlanilha, 'dadosExportados')
    } catch (error) {
        console.log(error)
    }
}
start()

