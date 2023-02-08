const FakeDataJson = [
    {
      "id": 1,
      "name": "Charly",
      "country": "USA",
      "age": 20
    },
    {
      "id": 2,
      "name": "Alejandra",
      "country": "México",
      "age": 22
    },
    {
      "id": 3,
      "name": "Harry",
      "country": "London",
      "age": 26
    }
   ]


const startPDf = () => {
    

    for(let i = 0; i <  1; i++){
            (function(){
                    setTimeout(() => {
                            let doc = new docx.Document();   
                            const table = new docx.Table({
                                rows: [
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [new docx.Paragraph("Hello")]
                                                
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                    new docx.TableRow({
                                        children: [
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                            new docx.TableCell({
                                                children: [],
                                            }),
                                        ],
                                    }),
                                ],
                            });     
                            doc.addSection({
                                children: [
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: `id ${FakeDataJson[i].id}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: `name: ${FakeDataJson[i].name}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: `country: ${FakeDataJson[i].country}`
                                            })
                                        ]
                                    }),
                                    new docx.Paragraph({
                                        children: [
                                            new docx.TextRun({
                                                text: `age: ${FakeDataJson[i].age}`
                                            })
                                        ]
                                    })
                                ]
                            })                        
                            doc.addSection({ children: [table] });
                            createDocument(doc, docx, `${FakeDataJson[i].id}-${FakeDataJson[i].name}`);
                    }, i * 2000)
            }())
    }   
}

const createDocument = (doc, docx, nameOfdoc) => {

    docx.Packer.toBlob(doc).then( blob => {
        saveAs(blob, `${nameOfdoc}.docx`)
    })
}


document.querySelector('#btn').addEventListener('click', () => {
     startPDf()
})