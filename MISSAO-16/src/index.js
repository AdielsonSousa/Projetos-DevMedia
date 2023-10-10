import entradaDeDados from 'readline-sync';

const salarioMinimo = [
    {ano: 2010, salario: 510.00},
    {ano: 2011, salario: 545.00},
    {ano: 2012, salario: 622.00},
    {ano: 2013, salario: 678.00},
    {ano: 2014, salario: 724.00},
    {ano: 2015, salario: 788.00},
    {ano: 2016, salario: 880.00},
    {ano: 2017, salario: 937.00},
    {ano: 2018, salario: 954.00},
    {ano: 2019, salario: 998.00},
    {ano: 2020, salario: 1045.00}
];

const inflacao = [
    {ano: 2010, ipca: 5.91},
    {ano: 2011, ipca: 6.50},
    {ano: 2012, ipca: 5.84},
    {ano: 2013, ipca: 5.91},
    {ano: 2014, ipca: 6.41},
    {ano: 2015, ipca: 10.67},
    {ano: 2016, ipca: 6.29},
    {ano: 2017, ipca: 2.95},
    {ano: 2018, ipca: 3.75},
    {ano: 2019, ipca: 4.31},
    {ano: 2020, ipca: 4.52}
];

console.log("<<< ESCOLHA UMA DAS OPÇÕES ABAIXO >>>\n");

console.log("1. Listar o histórico do salário mínimo.");
console.log("2. Listar o histórico da taxa IPCA (inflação).");
console.log("3. Comparar e listar a porcentagem de crescimento salarial com a inflação (IPCA).\n");

const escolha = entradaDeDados.question("Informe sua opção: ");

let anoConfigurado = "Ano: ".padEnd(40, ".");
let salarioConfigurado = "Salário Mínimo: ".padEnd(40, ".");
let crescimentoSalarialConfigurado = "Crescimento Salarial: ".padEnd(40, ".");
let ipcaConfigurado = "Inflação IPCA: ".padEnd(40, ".");


switch (Number(escolha)) {
    case 1:
        for (let soldo = 0; soldo < salarioMinimo.length; soldo++){
            let anoSalario = salarioMinimo[soldo].ano;
            let valorSalario = salarioMinimo[soldo].salario.toFixed(2).replace(".", ",");

            console.log("\n");
            console.log(`${anoConfigurado}${anoSalario}`);
            console.log(`${salarioConfigurado}R$ ${valorSalario}`);

        }
        break;
    
    case 2:
        for (let taxaIPCA = 0; taxaIPCA < inflacao.length; taxaIPCA++) {
            let ano = inflacao[taxaIPCA].ano;
            let valorIPCA = inflacao[taxaIPCA].ipca.toFixed(2).replace(".", ",");

            console.log("\n");
            console.log(`${anoConfigurado}${ano}`);
            console.log(`${ipcaConfigurado}${valorIPCA}%`);
        }
        break;

    case 3:
        for (let taxaDeCrescimento = 0; taxaDeCrescimento < inflacao.length; taxaDeCrescimento++) {
            let anoSalario = salarioMinimo[taxaDeCrescimento].ano;
            let valorSalario = salarioMinimo[taxaDeCrescimento].salario;

            let percentualDeCrescimento;
            let percentualDeCrescimentoConfigurado;

            if (taxaDeCrescimento > 0) {
                let salarioDoMesAnterior = salarioMinimo[taxaDeCrescimento - 1].salario;
                let diferenca = valorSalario - salarioDoMesAnterior;

                percentualDeCrescimento = (diferenca / salarioDoMesAnterior) * 100;
                percentualDeCrescimentoConfigurado = percentualDeCrescimento.toFixed(2).replace(".", ",") + "%";
            } else {
                percentualDeCrescimentoConfigurado = "-";
            }

            let ipca = inflacao[taxaDeCrescimento].ipca.toFixed(2).replace(".",",");

            console.log("\n");
            console.log(anoConfigurado + anoSalario);
            console.log(salarioConfigurado + "R$ " + valorSalario);
            console.log(crescimentoSalarialConfigurado + percentualDeCrescimentoConfigurado);
            console.log(ipcaConfigurado + ipca + "%");
        }

        break;

    default:
        console.log("Opção inválida.");
        break;
}