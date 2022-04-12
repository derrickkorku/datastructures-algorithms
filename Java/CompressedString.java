
/**
 * Compressed Strings
 * e.g. aaabccc -> a3bc3
 */
class CompressedString {
    public static String compressedString(String s){
        int count = 0;
        StringBuilder str = new StringBuilder();

        for (int i = 0; i < s.length(); i++){
            count++;

            if (s.charAt(i) != s.charAt(i + 1) || (i + 1) >= s.length()){
                str.append(s.charAt(i));
                str.append(count);
                count = 0;
            }
        }

        return str.length() < s.length() ? str.toString() : s;
    }

}