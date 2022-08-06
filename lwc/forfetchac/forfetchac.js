import { LightningElement, wire,track } from 'lwc';
import sk from '@salesforce/apex/Fetchac.getData';

export default class Forfetchac extends LightningElement {
    @track showhide=false;
    @track listofdata;
    @wire(sk)
    getac({data,error})
    {
        if(error)
        {
            console.error(error);
        }
        if(data)
        {
           this.listofdata=data;
        }
    }
    show()
    {
        this.showhide=(this.showhide==false)?true:false;
    }
deletemar(event)
{
    this.index=event.target.value;
    this.listofdata.splice(this.index,1);

}

}