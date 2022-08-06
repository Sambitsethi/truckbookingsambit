@isTest
public class sendmailTest {
    @isTest
    public static void methodtest()
    {
        sendEmail se=new sendEmail();
        se.mailkaro();
        System.assert(!se.listmail.isEmpty(),'it is empty');
      
    }

}