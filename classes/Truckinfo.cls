public class Truckinfo {
    public List<Truck__c> actObj{get;set;}
    public Truckinfo()
    {
        actObj=new List<Truck__c>();
        actObj=[select id,name,	Image__c,Cost__c,Drivers__c from Truck__c limit 10];
    }
   

}