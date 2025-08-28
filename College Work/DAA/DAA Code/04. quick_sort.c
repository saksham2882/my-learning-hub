#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int partition(int arr[], int low, int high, int *count) {
    int pivot = arr[high];
    int i = low - 1;

    for (int j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            int temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            (*count)++;
        }
    }

    int temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    (*count)++;

    return i + 1;
}

void quickSort(int arr[], int low, int high, int *count) {
    if (low < high) {
        int pi = partition(arr, low, high, count);
        quickSort(arr, low, pi - 1, count);
        quickSort(arr, pi + 1, high, count);
    }
}

int main() {
    int N, count = 0;
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

    quickSort(arr, 0, N - 1, &count);

    printf("Sorted array:\n");
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("Total number of swaps: %d\n", count);
    printf("\nProgram No. : 04");
    printf("\nName: Saksham Agrahari");
    return 0;
}
