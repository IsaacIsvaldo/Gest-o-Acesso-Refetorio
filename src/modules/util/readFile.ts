import * as XLSX from 'xlsx';

const nomeArquivo = 'exemplo.xlsx';
export const lerArquivoExcel = async (nomeArquivo: string): Promise<any> => {
    return new Promise((resolve, reject) => {
      try {
        const arquivo = XLSX.readFile(nomeArquivo);
        const primeiraPlanilha = arquivo.SheetNames[0];
        const dados = XLSX.utils.sheet_to_json(arquivo.Sheets[primeiraPlanilha]);
        console.log('Dados do arquivo Excel:');
        console.log(dados);
  
        resolve(dados);
      } catch (erro) {
        reject({ error: "Erro ao ler o arquivo Excel" });
      }
    });
  };

 //lerArquivoExcel(nomeArquivo);