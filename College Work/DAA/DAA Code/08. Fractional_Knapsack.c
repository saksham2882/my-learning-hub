#include <stdio.h>
#include <stdlib.h>

void swap(double* a, double* b) {
    double temp = *a;
    *a = *b;
    *b = temp;
}

void sort(double arr[][2], int n) {
    for (int i = 0; i < n - 1; i++) {
        for (int j = 0; j < n - i - 1; j++) {
            if (arr[j][1] > arr[j + 1][1]) {
                swap(&arr[j][0], &arr[j + 1][0]);
                swap(&arr[j][1], &arr[j + 1][1]);
            }
        }
    }
}

int main() {
    int val[] = {60, 100, 120};
    int wt[] = {10, 20, 30};
    int cap = 50;
    int n = sizeof(val) / sizeof(val[0]);

    double ratio[n][2];

    for (int i = 0; i < n; i++) {
        ratio[i][0] = i;
        ratio[i][1] = (double)val[i] / wt[i];
    }

    sort(ratio, n);

    int remaining_cap = cap;
    int total_val = 0;

    printf("\n\n\nItems added to the bag:\n");

    for (int i = n - 1; i >= 0; i--) {
        int idx = (int)ratio[i][0];

        if (remaining_cap >= wt[idx]) {
            total_val += val[idx];
            remaining_cap -= wt[idx];
            printf("Item %d added completely (value: %d, weight: %d)\n", idx + 1, val[idx], wt[idx]);
        } else {
            total_val += (ratio[i][1] * remaining_cap);
            printf("Item %d added fractionally (value added: %.2f, weight used: %d)\n", idx + 1, ratio[i][1] * remaining_cap, remaining_cap);
            remaining_cap = 0;
            break;
        }
    }

    printf("\nTotal value in the bag: %d\n", total_val);

    printf("\nProgram No. : 08\n");
    printf("Name: Saksham Agrahari\n");

    return 0;
}
