import { LightningElement, track, wire } from 'lwc';
import truckdata from '@salesforce/apex/Forfetchtruck.truckdata';
export default class Truckcomp extends LightningElement {
   
    
  
    @track getdata;
    @wire(truckdata)    
    getdetails({data,error})
    {
        if(data)
        {
           this.getdata=data;
        }
        else if(error)
        {
            console.error(error);
            
        }
    }
    callkaro(event)
    {
        
        window.location.replace('https://d5g000004gahleaa-dev-ed.lightning.force.com/lightning/o/Truck_booking__c/new?count=1&nooverride=1&useRecordTypeCheck=1&navigationLocation=LIST_VIEW&backgroundContext=%2Flightning%2Fo%2FTruck_booking__c%2Flist%3FfilterName%3DRecent&recordTypeId=0125g000000tPzzAAE');

    }
}