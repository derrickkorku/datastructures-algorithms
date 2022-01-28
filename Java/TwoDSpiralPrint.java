/**
 * Print a 2 dimentional array in a spiral form
 */
class TwoDSpiralPrint {

    /** m = ending row index, n = ending column index */
    public static void spiralPrint(int m, int n, int[][] a){
        /** k = starting row index, l = starting column index, i = interator */
        int k = l = i = 0;

        /** Print 1st row from the remaining rows */
        for ( i = l; i < n; i++){
            System.out.print(a[k][i]);
        }

        k++;

        /** Print last column from the remaining columns */
        for (i = k; i < m; i++){
            System.out.print(a[i][n - 1]);
        }
        n--;
    }
}