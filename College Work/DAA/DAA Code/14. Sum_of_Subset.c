#include <stdio.h>
#include <stdbool.h>

#define MAX 100

bool dp[MAX][MAX];

void printSubset(int set[], int n, int sum) {
    if (sum == 0) {
        return;
    }
    if (n == 0) {
        return;
    }
    if (dp[n - 1][sum]) {
        printSubset(set, n - 1, sum);
        return;
    }
    if (dp[n - 1][sum - set[n - 1]]) {
        printSubset(set, n - 1, sum - set[n - 1]);
        printf("%d ", set[n - 1]);
    }
}

bool isSubsetSum(int set[], int n, int sum) {
    for (int i = 0; i <= n; i++) {
        for (int j = 0; j <= sum; j++) {
            if (j == 0)
                dp[i][j] = true;
            else if (i == 0)
                dp[i][j] = false;
            else if (set[i - 1] <= j)
                dp[i][j] = dp[i - 1][j] || dp[i - 1][j - set[i - 1]];
            else
                dp[i][j] = dp[i - 1][j];
        }
    }
    return dp[n][sum];
}

int main() {
    int set[] = {3, 34, 4, 12, 5, 2};
    int sum = 9;
    int n = sizeof(set) / sizeof(set[0]);

    if (isSubsetSum(set, n, sum)) {
        printf("\n\nSubset with sum %d is found: ", sum);
        printSubset(set, n, sum);
        printf("\n");
    } else {
        printf("No subset found\n");
    }
    printf("\n\nProgram No: 14\nName: Saksham Agrahari\n");
    return 0;
}