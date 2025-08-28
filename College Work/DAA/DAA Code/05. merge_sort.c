#include <stdio.h>
#include <stdlib.h>
#include <time.h>

void merge(int arr[], int left, int mid, int right, int *count) {
    int n1 = mid - left + 1;
    int n2 = right - mid;
    
    int leftArr[n1], rightArr[n2];
    
    for (int i = 0; i < n1; i++)
        leftArr[i] = arr[left + i];
    for (int i = 0; i < n2; i++)
        rightArr[i] = arr[mid + 1 + i];
    
    int i = 0, j = 0, k = left;
    
    while (i < n1 && j < n2) {
        if (leftArr[i] <= rightArr[j]) {
            arr[k] = leftArr[i];
            i++;
        } else {
            arr[k] = rightArr[j];
            j++;
        }
        (*count)++;
        k++;
    }
    
    while (i < n1) {
        arr[k] = leftArr[i];
        i++;
        k++;
        (*count)++;
    }
    
    while (j < n2) {
        arr[k] = rightArr[j];
        j++;
        k++;
        (*count)++;
    }
}

void mergeSort(int arr[], int left, int right, int *count) {
    if (left < right) {
        int mid = left + (right - left) / 2;
        
        mergeSort(arr, left, mid, count);
        mergeSort(arr, mid + 1, right, count);
        
        merge(arr, left, mid, right, count);
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

    mergeSort(arr, 0, N - 1, &count);

    printf("Sorted array:\n");
    for (int i = 0; i < N; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("Total number of merges: %d\n", count);
    printf("\nProgram No. : 05");
    printf("\nName: Saksham Agrahari");

    return 0;
}
