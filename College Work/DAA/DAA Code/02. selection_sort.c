#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void selectionSort(int arr[], int N, int *swapCount) {
    for (int i = 0; i < N - 1; i++) {
        int minIndex = i;

        for (int j = i + 1; j < N; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        
        if (minIndex != i) {
            int temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
            (*swapCount)++;
        }
    }
}

int main() {
    int N, swapCount = 0;
    srand(time(0));

    printf("\nEnter the size of the array: ");
    scanf("%d", &N);
    int arr[N];

    for (int i = 0; i < N; i++) {
        arr[i] = rand() % 100 + 1;
    }

    printf("Unsorted array:\n");
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    selectionSort(arr, N, &swapCount);

    printf("Sorted array:\n");
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("Total number of swaps: %d\n", swapCount);
    printf("\nProgram No. : 02");
    printf("\nName: Saksham Agrahari");

    return 0;
}