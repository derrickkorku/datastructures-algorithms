class JoinstringBest {
    public static void main(String[] args){

    }

    public static String joinStrings(String[] words){
        StringBuilder sentence = new StringBuilder();
        for(String word : words){
            sentence.append(word);
        }

        return sentence.toString();
    }
}