import { LightningElement } from 'lwc';

export default class Lwclifecycle extends LightningElement {

    constructor()
    {
        super();
        alert("i am the construtor");
    }
    connectedCallback()
    {
        alert("i am connected call back");
    }
    renderedCallback()
    {
        alert("i'm the rendercallback");
    }
    errorCallback()
    {
        alert("i'm the error call back");
    }
    disconnectedCallback()
    {
        alert("i am the disconnected call back");
    }
    

}