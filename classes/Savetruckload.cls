public with sharing class Savetruckload {
  @auraEnabled
  public static Truck_load__c loaditem(string name,string material,Decimal materialweight,Time scheduletime)
  {

    Truck_load__c trload=new Truck_load__c();
    trload.Name=name;
    trload.Material__c=material;
    trload.Material_Weight__c=materialweight;
    trload.Schedule_Time__c=scheduletime;
    insert trload;
    return trload;

  }
}