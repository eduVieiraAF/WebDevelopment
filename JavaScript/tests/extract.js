const fs = require('fs');
const papaParse = require('papaparse');

const removeEmptyElements = arr => arr.filter(item => item.trim() !== "");

const saveToJSON = data => {
    const jsonData = JSON.stringify(data);
    fs.writeFile('data.json', jsonData, { encoding: 'utf-8' }, (err) => {
        if (err) console.error('Erro ao salvar o arquivo JSON:', err);
        else {
            console.log('Arquivo JSON salvo com sucesso!');
            createCSVFile(data);
        }
    });
};

const createCSVFile = data => {
    let csvData = 'Depto; Código; Descrição; Classe; Tipo;\n';
    const uniqueElements = new Set();

    Object.keys(data).forEach(arrayName => {
        const cleanedData = removeEmptyElements(data[arrayName]);

        cleanedData.sort();

        cleanedData.forEach(element => {
            const [name, ...additionalData] = element.split(" - ");
            const fullData = `${name} - ${additionalData.join(" - ").trim()}`;
            if (!uniqueElements.has(fullData)) {
                uniqueElements.add(fullData);
                const rowData = `"${arrayName}";"${name.trim()}";"${fullData}";A;D;\n`;
                csvData += rowData;
            }
        });
    });

    fs.writeFile('cContabilTratada.csv', csvData, { encoding: 'utf-8' }, (err) => {
        if (err) console.error('Erro ao salvar o arquivo CSV:', err);
        else console.log('Arquivo CSV salvo com sucesso!');
    });
};

fs.readFile('./ccontabil.csv', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    const parseData = papaParse.parse(data, {
        header: true,
        skipEmptyLines: true,
    });

    const deptArrays = {};

    parseData.data.forEach(row => {
        Object.keys(row).forEach(key => {
            if (key !== '') {
                if (!deptArrays[key]) {
                    deptArrays[key] = [];
                }

                const element = row[key].toString();
                if (!deptArrays[key].includes(element)) {
                    deptArrays[key].push(element);
                }
            }
        });
    });

    saveToJSON(deptArrays);
});
