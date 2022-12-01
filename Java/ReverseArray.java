/**
 * Reverse Array in Java
 */

 class ReverseArray {
    public static void reverse(int[] arr) {
        for (int i = 0; i < arr.length / 2; i++) {
            int temp = arr[i];
            int other = arr[arr.length - 1 - i];
            arr[i] = other;
            arr[arr.length - 1 - i] = other;
        }
    }
 }