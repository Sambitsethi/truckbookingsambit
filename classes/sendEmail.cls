public class sendEmail {
    public  list<messaging.SingleEmailMessage> listmail=new List<messaging.SingleEmailMessage>();
    public void mailkaro()
    {
         
        messaging.SingleEmailMessage mail=new messaging.SingleEmailMessage();
       String[] toaddress=new String[]{'sambit-kumar.sethi@capgemini.com'};
            mail.setSubject('this mail send for demo propose');
        mail.setPlainTextBody('hii i am sambit from capgemini can u know me');
        mail.setToAddresses(toaddress);
        listmail.add(mail);
        messaging.sendEmail(listmail);
    }

}