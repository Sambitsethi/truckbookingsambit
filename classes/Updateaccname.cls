public class Updateaccname {
    static public void fetchaccData()
    {
        Account a1=[select id,name from Account where name='sambit' limit 1];
        a1.Name='reetu';
        update a1;
        
                
       
    }

}