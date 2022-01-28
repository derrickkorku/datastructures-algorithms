class MergeTwoSortedArray {
    public static int[] mergeArray(int[] ar1, int[] ar2) {
        int ar1Len = ar1.length;
        int ar2Len = ar2.length;
        int[] newArr = new int[ar1Len + ar2Len];

        int i = j = k = 0;
        for ( i = 0; i < ar1Len && j < ar2Len;){
            if (ar1[i] < ar2[j]) {
                newArr[k] = ar1[i];
                i++;
                j++;
            } else {
                newArr[k] = ar2[j];
                k++;
                j++;
            }
        }

        while( i < ar1Len) {
            newArr[k] = ar1[i];
            i++;
            j++;
        }

        while( j < ar2Len){
            newArr[k] = ar2[j];
            j++;
            k++;
        }
        
        return newArr;
    }
    public static void main(String[] arrgs) {
        
    }
}