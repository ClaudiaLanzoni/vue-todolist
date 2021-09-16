/**
 *  Stampare in pagina un item per ogni elemento contenuto in un array
    Ogni item ha una icona "x" associata: cliccando su di essa,
    l'item viene rimosso dalla lista
    Predisporre un input per aggiungere un nuovo item alla lista:
    digitando il tasto invio oppure cliccando su un pulsante,
    il testo digitato sarà aggiunto alla lista
 */

let app = new Vue ({
    el: "#app",

    data: {
        toDoList: ["Stampare in pagina un item per ogni elemento contenuto in un array",
        "Associare ad ogni item un'icona",
        "Rimuovere item dalla lista cliccando sull'icona", 
        "Predisporre input bottone per aggiungere un nuovo item alla lista",
        "Cliccando sul bottone, il testo digitato sarà aggiunto alla lista"],
        
        toDoField: "",
    },

    methods: {
        removeToDoElement: function(elementIndex) {
            this.toDoList.splice(elementIndex, 1);
            },
        

        addToDoElement: function() {
            if (this.toDoField.trim('').length > 0) {
                this.toDoList.push(this.toDoField.trim(''));
            }
        }

    }
})