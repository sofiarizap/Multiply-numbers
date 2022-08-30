//assume you have two distributed data sources. 
// your task is to collect all data from this sources and return an aggregated result 
 var slips = {
    "slips_23" => {
        transactions : [123,456]
    },
    "slips_42" => {
        transactions : [789]
    }
}
var transactions = [
    {
        id:123,
        amount:10.01,
        payout: false 
    },
    {
        id:456,
        amount:5.01,
        payout: true
    }
    {
        id:789,
        amount:2.01,
        payout: false 
    }
]
//task :use the two data sources above and create the following result:
result = {
    23=> {
        number_transactions: 2, 
        total_amount: 5.0, 
    }
    42=> {
        number_transactions: 1, 
        total_amount: 20.1, 
    }
}
 function (slips, transactions){
    return {
       
    }
 }
 // crear una funcion que reciba dos argumentos y retorne un objeto que esta asignado a  var result 
 // construir un objeto tomando los slips 