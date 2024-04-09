// Descrizione:
// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.
// Bonus:
// Far comparire gli indirizzi email solamente quando sono stati tutti generati.
//
//


const { createApp } = Vue;

createApp({
    data() {
        return {
            emails: [],
            emailsCount: 10,         
        };
    },
    methods: {

    },
    mounted() {
        // Ciclo for per richiedere un numero di indirizzi email casuali come indicato in emailsCount (in questo caso 10)
        for (let i = 0; i < this.emailsCount; i++) {
            // Effettua una richiesta GET per ottenere un indirizzo email casuale
            axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
            // gestisce la risposta del server
            .then((response) => {
                // prende la risposta del server  e poi la pusha nell'array emails
                const email = response.data.response;
                this.emails.push(email)

            });
       

    }

}
}).mount('#app');