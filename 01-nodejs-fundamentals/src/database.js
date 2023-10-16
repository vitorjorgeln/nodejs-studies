import fs from 'node:fs/promises'

//Garantindo que o arquivo db.json sempre será criado na raiz do projeto, não na referencia de onde ele será executado
const databasePath = new URL('../db.json', import.meta.url)

export class Database {
    database = {}

    //recuperando os dados quando a aplicação inicializa
    constructor() {
        fs.readFile(databasePath, 'utf8').then(data => {
            this.database = JSON.parse(data)
        }).catch(() => {
            this.persist()
        })
    }

    persist() {
        fs.writeFile(databasePath, JSON.stringify(this.database))
    }

    insert(table, data) {
        if (Array.isArray(this.database[table])) {// já existe um array inserido dentro de database?
            this.database[table].push(data)
        } else {
            this.database[table] = [data]
        }

        this.persist()

        return data
    }

    select(table) {
        let data = this.database[table] ?? []
        return data
    }

    delete(table,id) {
        let rowIndex = this.database[table].findIndex(row => row.id === id)
        if(rowIndex > -1){
            this.database[table].splice(rowIndex, 1)
            this.persist()
        }
    }
}