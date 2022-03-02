package com.ruoxi.basic.common;


import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class MD5Utils {

    /**
     * 加密
     *
     * @param context
     */
    public static String encrypByMd5(String context) {
        try {
            MessageDigest md = MessageDigest.getInstance("MD5");
            md.update(context.getBytes());//update处理
            byte[] encryContext = md.digest();//调用该方法完成计算

            int i;
            StringBuffer buf = new StringBuffer("");
            for (int offset = 0; offset < encryContext.length; offset++) {//做相应的转化（十六进制）
                i = encryContext[offset];
                if (i < 0) i += 256;
                if (i < 16) buf.append("0");
                buf.append(Integer.toHexString(i));
            }
            return buf.toString();
        } catch (NoSuchAlgorithmException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
            return null;
        }
    }

    public static void main(String[] args) {

        //加密
        //1 生成随机盐值
        String pwd = "1";
        String salt = StrUtils.getComplexRandomString(32); //盐，，，随机串，安全
        //2 通过这个盐值加密
        String md5Pwd = MD5Utils.encrypByMd5(pwd + "chen" + salt + "hao");
        System.out.println(md5Pwd);//密文
        //密码比对
        //1 查询盐值-就是salt
        String saltTmp = salt;
        //3 加密比对
        String pwdTmp = "1";
        String inputMd5Pwd = MD5Utils.encrypByMd5(pwdTmp + "chen" + saltTmp + "hao");
        if (inputMd5Pwd.equals(md5Pwd)) {
            System.out.println("登录成功!");
        } else {
            System.out.println("密码错误");
        }
    }


}
