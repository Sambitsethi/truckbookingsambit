import { LightningElement } from 'lwc';
import {createRecord} from 'lightning/uiRecordApi';
import Truckload_object from  '@salesforce/schema/Truck_load__c';
import load_name from '@salesforce/schema/Truck_load__c.Name';
import Truck_Booking from '@salesforce/schema/Truck_load__c.Truck_booking__c';
import Material_name from '@salesforce/schema/Truck_load__c.Material__c';
import Material_Weight from '@salesforce/schema/Truck_load__c.Material_Weight__c';
import Schedule_Time from '@salesforce/schema/Truck_load__c.Schedule_Time__c';




export default class Truckload extends LightningElement {
    loaditeam={
    loadbywhichperson:'',
    TruckBooking:'',
    material:'',
    materialweight:0,
    Scheduletime:0.0
    }


    handelChange(event)
    {
        if(event.target.label=='Truck load by which Person')
        {
            this.loadbywhichperson=event.target.value;
        }
        if(event.target.label=='Truck Booking')
        {
            this.TruckBooking=event.target.value;        
        }
       if(event.target.label=='Material')
       {
           this.material= event.target.value;
       }
       if(event.target.label=='Material Weight')
       {
           this.materialweight= event.target.value;
       }
       if(event.target.label=='Schedule Time')
       {
           this.Scheduletime= event.target.value;
       }
    }
    loadTruck(event)
    {
        const field={}
        fields[load_name.fieldApiName]=this.loaditeam.loadbywhichperson;
        fields[Truck_Booking.fieldApiName]=this.loaditeam.TruckBooking;
        fields[Material_name.fieldApiName]=this.loaditeam.material;
        fields[Material_Weight.fieldApiName]=this.loaditeam.materialweight;
        fields[Schedule_Time.fieldApiName]=this.loaditeam.Scheduletime;
        let recordInput={apiName:Truckload_object.objectApiName}
        createRecord(recordInput).then(result=>{
            this.formField={}
            console.log('truck load id',JSON.stringify(result.id))
        }).catch(error=>{
            console.error(error);
        })
      
    }
}