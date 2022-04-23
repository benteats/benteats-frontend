package bents.bentscadastro.user.util;

import javax.swing.text.MaskFormatter;
import java.text.ParseException;

import static bents.bentscadastro.user.util.formatt.FormattUtil.formattPhone;

public class FormattUtilTest {
    public static void main(String[] args) throws ParseException {
        String phone = "11912345678";
        String formattedPhone = formattPhone(phone);
        System.out.println(formattedPhone);
        }
}
