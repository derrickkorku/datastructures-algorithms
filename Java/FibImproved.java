public class FibImproved {
    public static void main(String[] args) {
        int[] mem = new int[6];
        for (int i = 0; i < 5; i++) {
            System.out.println(i + " : " + findFib(i, mem));
        }
    }

    public static int findFib(int n, int[] mem){
        if (n <= 0){
            return 0;
        } else if (n == 1) {
            return 1;
        } else if (mem[n] > 0) {
            return mem[n];
        }

        return mem[n] = findFib(n - 1, mem) + findFib(n - 2, mem);
    }
}
