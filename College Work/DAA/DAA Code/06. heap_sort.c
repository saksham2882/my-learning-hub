#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void maxHeapify(int arr[], int n, int i, int *count) {
    int largest = i;
    int left = 2 * i + 1;
    int right = 2 * i + 2;

    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }
    if (largest != i) {
        int temp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = temp;
        (*count)++;
        maxHeapify(arr, n, largest, count);
    }
}

void buildMaxHeap(int arr[], int n, int *count) {
    for (int i = n / 2 - 1; i >= 0; i--) {
        maxHeapify(arr, n, i, count);
    }
}

void heapSort(int arr[], int n, int *count) {
    buildMaxHeap(arr, n, count);
    for (int i = n - 1; i > 0; i--) {
        int temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        (*count)++;
        maxHeapify(arr, i, 0, count);
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

    heapSort(arr, N, &count);

    printf("Sorted array:\n");
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("Total number of swaps: %d\n", count);
    printf("\nProgram No. : 06");
    printf("\nName: Saksham Agrahari");

    return 0;
}
