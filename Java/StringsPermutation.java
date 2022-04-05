/**
 * Java Algorithm to find if a string is a permutation of another
 */

public class StringsPermutation {
    public static boolean isPermutation(String str1, String str2){
        if (str1.length() != str2.length()){
            return false;
        }

        return sortString(str1).equals(sortString(str2));
    }

    public static String sortString(String str){
        char[] content = str.toCharArray();
        java.util.Arrays.sort(content);
        return new String(content);
    }
}
