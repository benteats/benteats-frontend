package bents.bentscadastro.user.util;

import javax.swing.text.MaskFormatter;
import java.text.ParseException;

public class FormattUtilTest {
    public static void main(String[] args) throws ParseException {
        String phone = "11971145076";
        String formattedPhone = formattPhone(phone);
        System.out.println(formattedPhone);
        }

    public static String formattPhone(String phone) throws java.text.ParseException {
        phone = phone.replaceAll("[-+.^:() ,]","");
        String maskPhone = "(AA) AAAAA-AAAA";
        if(phone.startsWith("0")) phone = phone.substring(1);
        MaskFormatter mf = new MaskFormatter(maskPhone);
        mf.setValueContainsLiteralCharacters(false);
        return mf.valueToString(phone);
    }
}
