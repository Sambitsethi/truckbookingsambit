public with sharing class Forfetchtruck {
    @AuraEnabled(cacheable=true)
    public static List<Truck__c>  truckdata(){
        
         List<Truck__c>  truckrec=[select Name,Image__c,Cost__c,truck_take_Approximate_load__c,Number_of_Time_Booked__c,Drivers__c from Truck__c];
        return truckrec;

    }
 
}