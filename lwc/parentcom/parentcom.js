import { LightningElement,track} from 'lwc';

export default class Parentcom extends LightningElement {
    @track namek='';
    
    datak(event)
    {
     this.namek=event.name;
     console.log(this.namek);
    }
}