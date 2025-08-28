#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void insertionSort(int arr[], int N, int *swapCount) {
    for (int i = 1; i < N; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
            (*swapCount)++;
        }
        arr[j + 1] = key;
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

    insertionSort(arr, N, &swapCount);

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
