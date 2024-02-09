import { lerPlanilha } from "./importaExel.js"
import { exportToExcel } from "./exportaExel.js"
import { consultaAlunoFetch } from "./fetch/consultaAlunoFetch.js"
import { consultaProtocoloFetch } from "./fetch/protocolosFetch.js"

const start = async () => {

    const protocolosLocalizados = []
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
                            console.log(`apenas um curso e sem protocolos`) //Não fazer nada                                                                          
                        } else if (retornoProtocolos.data.length == 1) {
                            console.log(`apenas um curso e com um protocolo`)
                            // organizando dados:
                            let dadosRetorno = {
                                pes_cpf: ResConsultaAluno[0].pes_cpf,
                                curso_nome: ResConsultaAluno[0].curso_nome,
                                alunocurso_situacao: ResConsultaAluno[0].alunocurso_situacao,
                                protocolo_id: retornoProtocolos.data[0].protocolo_id,
                                protocolo_situacao: retornoProtocolos.data[0].protocolo_situacao,
                                protocolo_solicitante_nome: retornoProtocolos.data[0].protocolo_solicitante_nome,
                                protocolo_assunto: retornoProtocolos.data[0].protocolo_assunto,
                                protocolo_data_cadastro: retornoProtocolos.data[0].protocolo_data_cadastro,
                                protocolo_data_vencimento: retornoProtocolos.data[0].protocolo_data_vencimento,
                                setor_descricao: retornoProtocolos.data[0].setor_descricao,
                                solicitacao_descricao: retornoProtocolos.data[0].solicitacao_descricao,
                            }
                            protocolosLocalizados.push(dadosRetorno) //1 protocolos 1 curso                                   
                        } else if (retornoProtocolos.data.length > 1) {
                            console.log(`apenas um curso e mais de um protocolo`)
                            for (let protocolos of retornoProtocolos.data) {
                                let dadosRetorno = {
                                    pes_cpf: ResConsultaAluno[0].pes_cpf,
                                    curso_nome: ResConsultaAluno[0].curso_nome,
                                    alunocurso_situacao: ResConsultaAluno[0].alunocurso_situacao,
                                    protocolo_id: protocolos.protocolo_id,
                                    protocolo_situacao: protocolos.protocolo_situacao,
                                    protocolo_solicitante_nome: protocolos.protocolo_solicitante_nome,
                                    protocolo_assunto: protocolos.protocolo_assunto,
                                    protocolo_data_cadastro: protocolos.protocolo_data_cadastro,
                                    protocolo_data_vencimento: protocolos.protocolo_data_vencimento,
                                    setor_descricao: protocolos.setor_descricao,
                                    solicitacao_descricao: protocolos.solicitacao_descricao,
                                }
                                protocolosLocalizados.push(dadosRetorno) //mais de 1 protocolo 1 curso  
                            }
                        }

                    } catch (error) {
                        console.log(error)
                    }
                } else {
                    //mais de 1 curso
                    for (let arrayAluno of ResConsultaAluno) {
                        if (arrayAluno.cursoNome === aluno.cursoExcel) {
                            try {
                                const retornoProtocolos = await consultaProtocoloFetch(ResConsultaAluno[0])
                                if (retornoProtocolos.data.length == 0) {
                                    console.log(`Mais de um curso sem protocolos`) //Não fazer nada                                                             
                                } else if (retornoProtocolos.data.length == 1) {
                                    console.log(`Mais de um curso e um protocolo`)
                                    let dadosRetorno = {
                                        pes_cpf: arrayAluno.pes_cpf,
                                        curso_nome: arrayAluno.curso_nome,
                                        alunocurso_situacao: arrayAluno.alunocurso_situacao,
                                        protocolo_id: retornoProtocolos.data[0].protocolo_id,
                                        protocolo_situacao: retornoProtocolos.data[0].protocolo_situacao,
                                        protocolo_solicitante_nome: retornoProtocolos.data[0].protocolo_solicitante_nome,
                                        protocolo_assunto: retornoProtocolos.data[0].protocolo_assunto,
                                        protocolo_data_cadastro: retornoProtocolos.data[0].protocolo_data_cadastro,
                                        protocolo_data_vencimento: retornoProtocolos.data[0].protocolo_data_vencimento,
                                        setor_descricao: retornoProtocolos.data[0].setor_descricao,
                                        solicitacao_descricao: retornoProtocolos.data[0].solicitacao_descricao,
                                    }
                                    protocolosLocalizados.push(dadosRetorno) //1 protocolos 1 curso  
                                } else if (retornoProtocolos.data.length > 1) {
                                    console.log(`Mais de um curso e mais de um protocolo`)
                                    for (let protocolos of retornoProtocolos.data) {
                                        let dadosRetorno = {
                                            pes_cpf: ResConsultaAluno[0].pes_cpf,
                                            curso_nome: ResConsultaAluno[0].curso_nome,
                                            alunocurso_situacao: ResConsultaAluno[0].alunocurso_situacao,
                                            protocolo_id: protocolos.protocolo_id,
                                            protocolo_situacao: protocolos.protocolo_situacao,
                                            protocolo_solicitante_nome: protocolos.protocolo_solicitante_nome,
                                            protocolo_assunto: protocolos.protocolo_assunto,
                                            protocolo_data_cadastro: protocolos.protocolo_data_cadastro,
                                            protocolo_data_vencimento: protocolos.protocolo_data_vencimento,
                                            setor_descricao: protocolos.setor_descricao,
                                            solicitacao_descricao: protocolos.solicitacao_descricao,
                                        }
                                        protocolosLocalizados.push(dadosRetorno) //mais de 1 protocolo 1 curso  
                                    }
                                }
                            } catch (error) {
                                console.log(error)
                            }
                        } else {
                            AlunosNaoLocalizados.push(arrayAluno)
                            console.log(`Curso não localizado ${arrayAluno}`)
                        }
                    }
                }
            } catch (error) {
                console.error(error)
            }
            //ultimo item da itegração
            console.log(protocolosLocalizados) // teste

        }
        //retornar dados // após a iteração
        exportToExcel(protocolosLocalizados, 'protocolosLocalizados')
        exportToExcel(AlunosNaoLocalizados, 'AlunosNaoLocalizados')
    } catch (error) {
        console.log(error)
    }
}
start()




