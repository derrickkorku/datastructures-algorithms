class ReverseString {
    public static void main(String[] args) {
        System.out.println(reverseString("Hello"));
    }

    public static String reverseString(String str){
        String result = "";

        for (int i = 0; i < str.length(); i++){
             result = str.charAt(i) + result;
        }

        return result;
    }
}