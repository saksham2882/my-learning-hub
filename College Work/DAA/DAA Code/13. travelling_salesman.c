#include <stdio.h>
#include <limits.h>

#define MAX 16
#define INF INT_MAX

int dp[1 << MAX][MAX];
int dist[MAX][MAX];

int tsp(int mask, int pos, int n) {
    if (mask == (1 << n) - 1)
        return dist[pos][0];

    if (dp[mask][pos] != -1)
        return dp[mask][pos];

    int ans = INF;

    for (int city = 0; city < n; city++) {
        if ((mask & (1 << city)) == 0) {
            int newAns = dist[pos][city] + tsp(mask | (1 << city), city, n);
            ans = (ans < newAns) ? ans : newAns;
        }
    }

    dp[mask][pos] = ans;
    return ans;
}

int main() {
    int n = 4;

    int distances[4][4] = {
        {0, 10, 15, 20},
        {10, 0, 35, 25},
        {15, 35, 0, 30},
        {20, 25, 30, 0}
    };

    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            dist[i][j] = distances[i][j];
        }
    }

    for (int i = 0; i < (1 << n); i++) {
        for (int j = 0; j < n; j++) {
            dp[i][j] = -1;
        }
    }

    int result = tsp(1, 0, n);

    printf("\nThe minimum cost of the TSP is: %d\n", result);
    printf("\nProgram No: 13\nName: Saksham Agrahari\n");
    return 0;
}
