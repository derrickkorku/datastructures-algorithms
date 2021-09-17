import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

class SumTwoNumbers {

    public static void main(String[] args) {
         int[] arr = {2, 7, 8, 9};
        int[] result = numbersSum(arr, 9);
        int[] result2 = numbersSum2(arr, 9);
        System.out.println("item 1 index: " + result[0]);
        System.out.println("item 2 index: " + result[1]);

        System.out.println("item 1 index: " + result2[0]);
        System.out.println("item 2 index: " + result2[1]);
    }

    public static int[] numbersSum(int[] arr, int target){
        int lindex = 0;
        int rindex = arr.length - 1;

        while(true){
            if (arr[lindex] + arr[rindex] == target){
                return new int[]{lindex, rindex};
            } else if(arr[lindex] + arr[rindex] > target){
                --rindex;
            } else if(arr[lindex] + arr[rindex] < target){
                ++lindex;
            }

            if ((lindex > arr.length - 1) || (rindex == 0) ){
                return new int[2];
            }
        }
    }

    public static int[] numbersSum2(int[] arr, int target){

        Map<Integer, Integer> mapArr = new HashMap<>();
        int[] result = new int[2];

        for (int i = 0; i < arr.length; i++){
            int x = target - arr[i];
            if (mapArr.containsKey(x)){
                result[0] = i;
                result[1] = mapArr.get(x);
                break;
            } else {
                mapArr.put(arr[i], i);
            }
        }

        return result;
    }
}