//Program to find the equilibrium index of an array is discussed here. Equilibrium index of an array is an index such that

class IndexOfEquilibrium {
    public static void main(String[] args) {
        int[] arr = {-7, 1, 5, 2, -4, 3, 0};
        System.out.println(findIndexOfEquilibrium(arr));
    }


    public static int findIndexOfEquilibrium(int[] arr){
        int len = arr.length - 1;
        int lsum = 0;
        int rsum = 0;
        int answer = 0;

        for (int i = 0; i < len; i++){
            lsum += arr[i];
            rsum += arr[len - i];
            
            if (lsum == rsum){
                answer = i  + 1;
                break;
            }
        }

        return answer;
    }
}