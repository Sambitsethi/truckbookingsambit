public with sharing class SaveAcc {
    @AuraEnabled
    public static Account saveRecord(String Name,String AccountNumber,String Phone)
    {
        Account a1=new Account();
        a1.Name=Name;
        a1.AccountNumber=AccountNumber;
        a1.Phone=Phone;
        insert a1;
       return a1;
    }
   
}