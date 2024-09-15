let valid = true
let test = document.getElementById('test')
let text = document.getElementById('text')
let loanCredit = 0
let empty1 = document.getElementById('empty1')
let empty2 = document.getElementById('empty2')
let empty3 = document.getElementById('empty3')
let empty4 = document.getElementById('empty4')
let gold = document.getElementById('gold')
let greet = document.getElementById('greet')
let = firstName = prompt('Enter your First name?')
firstName == '' ? firstName = prompt('Please Enter your Name?'):
                greet.innerHTML = `welcome, ${firstName} please fill out the form below`
// function load(){
//     gold.innerHTML = `    <form>
//         <div class="flex_d">
//             <div>
//                 <input type="number" id="balance" placeholder="Enter Account Balance">
//                 <input type="number" id="loanAmt" placeholder="Enter Loan Amount">    
//             </div>
//             <span id="empty1"></span>
//         </div>
//         <div class="flex_d">
//             <select name="history" id="history">
//                 <option value="0">Select last Loan Plan</option>
//                 <option value="1">3 months</option>
//                 <option value="2">6 months</option>
//                 <option value="3">9 months</option>
//                 <option value="4">12 months or more</option>
//             </select>
//             <span id="empty2"></span>       

//         </div>
//         <div>
//                 <input type="date" id="depositDate">
//                 <input type="date" id="loanDate">
//             </div>
//             <div class="flex_d">
//                 <select name="loanPlan" id="plan">
//                     <option value="0">Select Loan Plan</option>
//                     <option value="1">3 months</option>
//                     <option value="2">6 months</option>
//                     <option value="3">9 months</option>
//                     <option value="4">12 months or more</option>
//                 </select>
//                 <span id="empty3"></span>
//         </div>
//         <div class="flex_d">
//             <select name="accType" id="accType">
//                 <option value="0">Select Account type</option>
//                 <option value="1">Current account</option>
//                 <option value="2">Savings account</option>
//             </select>
//             <span id="empty4"></span>
//         </div>
//         <button type="button" onclick="submitClick()">Submit</button>
//         <div id="text"></div>
//     </form> `
// }

function submitClick(){
    let balance = document.getElementById('balance').value
    let loanAmt = document.getElementById('loanAmt').value
    let history = document.getElementById('history').value
    let depositDateInput = document.getElementById('depositDate').value
    let loanDateInput = document.getElementById('loanDate').value
    let plan = document.getElementById('plan').value
    let accType = document.getElementById('accType').value
    let depositDate = new Date(depositDateInput)
    let currentDate = new Date()
    let lastDeposit = currentDate - depositDate
    let months = lastDeposit / 2592000000
    console.log(months)
    let loanDate = new Date(loanDateInput)
    let lastloan = currentDate - loanDate
    let loanMonths = lastloan/ 2592000000
    console.log(loanMonths)
    let valid = true
    // loanAmt == '' ? empty2.innerHTML =  '*field left empty':
    if(balance > loanAmt ) {
        loanCredit += 10
                empty1.innerHTML = ''
    }
    else if(balance == '' || loanAmt == '' ){
        empty1.innerHTML = '*field left empty'
        valid = false
    }
    else{
        loanCredit -= 10
        empty1.innerHTML = ''
    }
    if(history > 2 ){
        loanCredit -= 0
        empty2.innerHTML = ''
    }
    else if(history == 0 ){
        empty2.innerHTML = '*field left empty'
        valid = false
    }
    else{
        loanCredit += 10
        empty2.innerHTML = ''
    }
    if(months > 1 ){
     loanCredit -= 0
    }
    else{loanCredit += 5;}
    if(loanMonths > 6 ){
        loanCredit += 10
    }       
    else{
        loanCredit -= 0
    }
    if(plan > 2 ){
        loanCredit -= 0
        empty3.innerHTML = ''
    }
    else if(plan == 0 ){
    empty3.innerHTML = '*field left empty'
    valid = false
    }
    
    else{loanCredit += 10
        empty3.innerHTML = ''
    }
    if( accType == 1 ){
        loanCredit += 10
        empty4.innerHTML = ''
    }
    else if(accType == 0 ){
        empty4.innerHTML = '*field left empty'
        valid = false
    }
    else{loanCredit += 5
        empty4.innerHTML = ''
    }
    if(loanCredit >= 30 && valid == true){
        text.innerHTML =`<p>CONGRATULATIONS </br> Your Loan Was Accepted </p>
        `}
    else if(valid == false){
        text.innerHTML = ''
    }
    else{
        text.innerHTML =`<p>Your Loan Was Not Accepted </br> Please Try Again Later</p>
                `
    }  
                console.log(loanCredit)
    loanCredit = 0 
    return valid

}
// function validate(){
//     let a = document.getElementById('a').value
//     let b = document.getElementById('b').value
//     let c = document.getElementById('c').value
//     let d = document.getElementById('d').value
//     let e = document.getElementById('e').value

//     let aErr = document.getElementById('aErr')
//     let bErr = document.getElementById('bErr')
//     let cErr = document.getElementById('cErr')
//     let dErr = document.getElementById('dErr')
//     let eErr = document.getElementById('eErr')

//     if(a === ""){
//         aErr.innerHTML = '*cannot be blank'
//         valid = false
//     }
//     else{
//         aErr.innerHTML = ''
//         valid = true
//     }
//     if(b === ""){
//         bErr.innerHTML = '*cannot be blank'
//         valid = false
//     }
//     else{
//         bErr.innerHTML = ''
//         valid = true
//     }
//     if(c === ""){
//         cErr.innerHTML = '*cannot be blank'
//         valid = false
//     }
//     else{
//         cErr.innerHTML = ''
//         valid = true
//     }
//     if(d === ""){
//         dErr.innerHTML = '*cannot be blank'
//         valid = false
//     }
//     else{
//         dErr.innerHTML = ''
//         valid = true
//     }
//     if(e === ""){
//         eErr.innerHTML = '*cannot be blank'
//         valid = false
//     }
//     else{
//         eErr.innerHTML = ''
//         valid = true
//     }
// return valid
// }
let form = document.getElementById('form').addEventListener('submit', function(e){
    if(!validate()){
        e.preventDefault()
        // console.log('succes')

    }
    else{
        e.preventDefault()
        console.log('succes')
    }
})
