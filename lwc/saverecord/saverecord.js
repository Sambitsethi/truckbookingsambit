import { LightningElement,track } from 'lwc';
import saveRecord from '@salesforce/apex/SaveAcc.saveRecord';

export default class Saverecord extends LightningElement {

   Name;
  AccountNumber;
  Phone;
    change(event)
    {
        if(event.target.label=="Enter Account Name")
        {
         this.Name=event.target.value;
        }
        if(event.target.label=="Enter Account Number")
        {
            this.AccountNumber=event.target.value;

        }
        if(event.target.label=="Enter Phone Number")
        {
          this.Phone=event.target.value;
        }
    }
    @track accname;
    @track accnum;
    @track phno;
    @track hide=false;
    createAccount()
    {
        saveRecord({
            Name:this.Name,
            AccountNumber:this.AccountNumber,
            Phone:this.Phone  
        }).then(
            data => {
                this.accname=data.Name;
                this.accnum=data.AccountNumber;
                this.phno=data.Phone;
                this.hide=true;
            }
        ).catch(
            error => {
                console.error(error);
            }
        );
    }
}