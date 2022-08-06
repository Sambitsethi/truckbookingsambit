public with sharing class Fetchac {
   @AuraEnabled(cacheable=true)
    public static List<Account> getData()
    {
        List<Account> acc=[select name,AccountNumber,Phone FROM Account];
        return acc;
    }
}