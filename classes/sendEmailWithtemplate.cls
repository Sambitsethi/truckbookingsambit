public class sendEmailWithtemplate {
    public static void sendkaro(){
        try{
        List<messaging.SingleEmailMessage> listmail=new List<messaging.SingleEmailMessage>();
        emailTemplate tem=new emailTemplate();
        tem=[select id,subject,body from emailTemplate where developername='SalesNewCustomerEmail'];
         contact con=[select id,name,email from contact where email='md.athar@capgemini.com'];
        messaging.SingleEmailMessage mail=new messaging.SingleEmailMessage();
        mail.setTemplateId(tem.id);
        mail.setTargetObjectId(con.id);
        listmail.add(mail);
            if(!listmail.isEmpty())
            {
                messaging.sendEmail(listmail);
            }
        
        }catch(Exception e)
        {
            System.debug(e);
        }

}
}