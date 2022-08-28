let selectedNo
let validate
let airtimeAmount
let phone 
let Pin

EazyBanking();
function EazyBanking() {
    selectedNo = prompt(`
    Eazybanking
    
    1>Transfers
    2>Airtime
    3>Data
    4>Bills Payment
    5>Check Payment
    6>Open Account
    7>Card Requests
    8>Register
    `)
selection()
}



function selection() {
    if (selectedNo==="1") {
        TransferPaymentMethod()
        console.log(TransferPaymentMethod())
    } else if (selectedNo==="2") {
        BuyAirtime()
    }
    else if (selectedNo=== "3" ||selectedNo=== "4"||selectedNo=== "5"|| selectedNo=== "6" ||selectedNo==="7"||selectedNo==="7" ){

       Unavailable()
        
        
        }
}
function Unavailable() {
    alert(`
    Service Temporarily unavailable
    `)
    EazyBanking()
}




function TransferPaymentMethod() {
    let paymentMethod
    paymentMethod=  prompt(
        `
        1>Send to Account Number
        2>Pay with Phone Number
        3>Send to Merchant ID
    
        `
        
    )
    if (paymentMethod==="1") {
        payWithAcc()
    } else if (paymentMethod==="2") {
        PayWithPhoneNo()
        
    }
    else if (paymentMethod==="3"){

        Unavailable()
    }
   
    

}

function PayWithPhoneNo() {
    let phoneNoPayAmount 
     
    validate
     phoneNoPayAmount = prompt(`
    Enter amount : 
    `   )
        console.log(phoneNoPayAmount)
        let phoneNo = prompt(`
        Enter phone number : 
        `
        
            )
            console.log(phoneNo)
             phonePaypin =prompt(`
            ENTER PIN 
            `)
            validate=prompt(`
            YOU ARE ABOUT TO SEND ${phoneNoPayAmount} TO
            ${phoneNo}!
    
            1>YES
            2>NO 
            
            
            `)
           console.log(validate)
           CheckValidate()
}

function payWithAcc() {
  
   let acctNo

    amount=prompt(
        `
        Enter Amount:  `
    )
    acctNo = prompt(
        `
    Enter Account number:   
    `
    )
     pin =prompt(`
    ENTER PIN 
    `)
     validate = prompt(`
    YOU ARE ABOUT TO SEND ${amount} to
    ${acctNo}

    1>YES
    2>NO 
    `

    
    )
    console.log(validate)
    
    CheckValidate()
    
    
}


function BuyAirtime() {
    let buyAirtimefor =prompt(
        `
        1>Self
        2>Others
        `
    )
    if (buyAirtimefor==="1") {
        Self()
    } else if (buyAirtimefor==="2") {
        Others()
    }
}

function Self() {
    let airtimeAmount
let phone
    let Pin
    airtimeAmount = prompt(`
    Enter Amount:
    `)
   
   
     Pin =prompt(
        `
        Enter Pin:
        `
    )
    validate= prompt(
`
YOU ARE ABOUT TO BUY ${airtimeAmount} TO ${phone} !
>1
>2
`
    )
    CheckValidate()
    
}

function Others() {
   
     
    airtimeAmount = prompt(`
    Enter Amount:
    `)
     phone = prompt(`
    Enter Phone number:
    `)
    console.log(phone)
     Pin =prompt(
        `
        Enter Pin:
        `
    )
    
    validate  = prompt(`
    YOU ARE ABOUT TO SEND ${airtimeAmount} to
    ${phone}

    1>YES
    2>NO 
    `
    )
    CheckValidate()
}
function CheckValidate() {
     
    if (validate ==="1") {
        alert(`PROCESSING REQUEST!`)
        alert(`TRANSFER WAS SUCCESSFUL!`)
        
        console.log('processing')
        exitApp()
    }
     else if (validate ==="2") {
        exitApp()
      
     }
     else{
        alert(`Invalid Request`)
          console.log(`Invalid Request`)
        exitApp()
     }
}


function exitApp() {
    if( confirm("Do you want to perform another transaction?")==true){
         EazyBanking()
    }
    else{
        alert('Thanks for banking with us!')
    }
}

