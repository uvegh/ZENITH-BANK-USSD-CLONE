let selectedNo = prompt(`
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


if (selectedNo=== "1") {
  let paymentMethod=  prompt(
        `
        1>Send to Account Number
        2>Pay with Phone Number
        3>Send to Merchant ID
    
        `
        
    )
    if (paymentMethod === "1") {
        let amount =prompt(
            `
            Enter Amount:  `
        )
        let acctNo = prompt(
            `
        Enter Account number:   
        `
        )
        let pin =prompt(`
        ENTER PIN 
        `)
        let validate = prompt(`
        YOU ARE ABOUT TO SEND ${amount} to
        ${acctNo}

        1>YES
        2>NO 
        `

        
        )
        if (validate =="1") {
            alert(`PROCESSING REQUEST!`)
            alert(`TRANSFER WAS SUCCESSFUL!`)
            
            console.log('processing')
        }
         else if (validate =="2") {
           
          
         }
         else{
            alert(`Invalid Request
             Reload page`)
         }
        
       
            
    }
    if (paymentMethod ==="2" ) {
       
        let phoneNoPayAmount = prompt(`
Enter amount : 
`   )
    console.log(phoneNoPayAmount)
    let phoneNo = prompt(`
    Enter phone number : 
    `
    
        )
        console.log(phoneNo)
        let phonePaypin =prompt(`
        ENTER PIN 
        `)
        let validatePhonePayment=prompt(`
        YOU ARE ABOUT TO SEND ${phoneNoPayAmount} TO
        ${phoneNo}
        
        `)
        console.log(validatePhonePayment)
        let validatePMPayment=prompt(`
        YOU ARE ABOUT TO BUY ${airtimeAmount} AIRTIME
        >1 YES
        >2 NO
        
        `)
        if (validatePMPayment==="1") {
            alert("Request processing")
            alert("Transaction successful")
            
        } else {
            
        }
    
    }
    
} else if (selectedNo=== "2") {
    let buyAirtime =prompt(
        `
        1>Self
        2>Others
        `
    )
    let airtimeAmount = prompt(`
    Enter Amount:
    `)
    let phone = prompt(`
    Enter Phone number:
    `)
    console.log(phone)
    let airtimePayPin =prompt(
        `
        Enter Pin:
        `
    )
    console.log(airtimePayPin)
    let validateAirtimePayment=prompt(`
        YOU ARE ABOUT TO BUY ${airtimeAmount} AIRTIME
        >1 YES
        >2 NO
        
        `)
        if (validateAirtimePayment==="1") {
            alert('REQUEST PROCESSING')
            alert('TRANSACTION COMPLETE!')
            
        } else if (validateAirtimePayment==="2") {

            let airtimeAmount = prompt(`
            Enter Amount:
            `)
            let phone = prompt(`
            Enter Phone number:
            `)
            console.log(phone)
            let airtimePayPin =prompt(
                `
                Enter Pin:
                `
            )
            console.log(airtimePayPin)
            let validateAirtimePayment=prompt(`
                YOU ARE ABOUT TO BUY ${airtimeAmount} AIRTIME
                >1 YES
                >2 NO
                
                `)
                if (validateAirtimePayment==="1") {
                    alert('REQUEST PROCESSING')
                    alert('TRANSACTION COMPLETE!')
                    
                } 
            
        }
        console.log(validateAirtimePayment)

}
else if (selectedNo=== "3" ||selectedNo=== "4"||selectedNo=== "5"|| selectedNo=== "6" ||selectedNo==="7"||selectedNo==="7" ){

alert(`
Service Temporarily unavailable
`)


}