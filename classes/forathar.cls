public class forathar {
    public static void fortestperpose(List<String> str3)
    {
        List<String> str1=new List<String>();
        str1=str3;
    List<user> u1=new List<user>();
        u1=[select id,name,phone,email from user where Username=:str1];
        for(user u2:u1)
        {
          system.debug(u2);   
        }
       
    }

}