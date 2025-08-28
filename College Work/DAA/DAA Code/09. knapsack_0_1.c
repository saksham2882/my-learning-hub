#include <stdio.h>

#define MAX 100

int knapsack(int W, int wt[], int val[], int n, int dp[n+1][W+1]) {
    for (int i = 0; i <= n; i++) {
        for (int w = 0; w <= W; w++) {

            if (i == 0 || w == 0)
                dp[i][w] = 0;
            else if (wt[i-1] <= w)
                dp[i][w] = (val[i-1] + dp[i-1][w-wt[i-1]] > dp[i-1][w]) ? 
                            (val[i-1] + dp[i-1][w-wt[i-1]]) : dp[i-1][w];
            else
                dp[i][w] = dp[i-1][w];
        }
    }
    return dp[n][W];
}


void printKnapsack(int W, int wt[], int n, int dp[n+1][W+1]) {
    printf("Items included in the knapsack (0/1 format):\n");

    for (int i = 0; i < n; i++) {
        if (dp[n][W] != dp[n-1][W]) {
            printf("Item %d: 1 ", i + 1);
            W -= wt[i];
        } else {
            printf("Item %d: 0 ", i + 1);
        }
    }
    printf("\n");
}


int main() {
    int n, W;

    printf("Enter number of items: ");
    scanf("%d", &n);
    printf("Enter the capacity of the knapsack: ");
    scanf("%d", &W);

    int wt[n], val[n];

    printf("Enter the weights and values of items:\n");
    for (int i = 0; i < n; i++) {
        printf("Item %d weight: ", i + 1);
        scanf("%d", &wt[i]);
        printf("Item %d value: ", i + 1);
        scanf("%d", &val[i]);
    }

    int dp[n+1][W+1];

    int max_value = knapsack(W, wt, val, n, dp);

    printf("The maximum value in the knapsack is: %d\n", max_value);
    printKnapsack(W, wt, n, dp);

    printf("\nProgram no. 09, \nName: Saksham Agrahari, \n");

    return 0;
}
