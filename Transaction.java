import java.util.*;

class Transaction {

    public static void solution(int[] A, String[] D) {
        int sumT = 0;
        String m = "";

        Map<Integer, Integer> ct = new HashMap<>();
        Map<String, Integer> mc = new HashMap<>();
        
        for (int i = 0; i < A.length; i++){
             sumT += A[i];
             if (A[i] < 0){
                 ct.put(A[i], i);
             }
        }

        if (ct.size() > 3) {
            for (int i = 0; i < ct.size(); i++){
                m = D[i].split("\\-")[1];
                if (! mc.containsKey(m)){
                  mc.put(m, 1);
                } else {
                    mc.put(m, (mc.get(m) + 1));
                }
            }
        } else {
            return sumT - (5 * 12);
        }




        System.out.println(sumT);
    }

    public static void main(String[] args) {
        String[] b = {"2020-1231", "2020-12-22", "2020-12-03", "2020-12-29"};
        int[] a = {100, 100, 100, -10};
        solution(a, b);
    }
}