export class Database {
    database = {}

    insert(table, data){
        if(Array.isArray(this.database[table])) {// já existe um array inserido dentro de database?
            this.database[table].push(data)
        } else {
            this.database[table] = data
        }

        return data
    }

    select(table){
        let data = this.database[table] ?? []
        return data
    }
}