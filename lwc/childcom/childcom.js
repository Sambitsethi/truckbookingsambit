import { LightningElement} from 'lwc';

export default class Childcom extends LightningElement {
    calltoparent(event)
    {
        const myev=new CustomEvent('userevent',{
            Name:'sambit'
           
        });
        this.dispatchEvent(myev);
    }
    
}