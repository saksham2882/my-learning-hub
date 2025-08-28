#include <stdio.h>

int binarySearch(int arr[], int low, int high, int key) {
    if (low > high) {
        return -1;
    }
    int mid = (low + high) / 2;
    if (arr[mid] == key) {
        return mid;
    }
    else if (arr[mid] > key) {
        return binarySearch(arr, low, mid - 1, key);
    }
    else {
        return binarySearch(arr, mid + 1, high, key);
    }
}


int main() {
    int size, key;

    printf("Enter the size of the array: ");
    scanf("%d", &size);
    int arr[size];

    printf("Enter the sorted elements of the array:\n");
    
    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the element to search: ");
    scanf("%d", &key);

    int result = binarySearch(arr, 0, size - 1, key);

    if (result != -1) {
        printf("Element %d found at index %d\n", key, result);
    } else {
        printf("Element %d not found in the array\n", key);
    }

    printf("\nProgram No. : 01");
    printf("\nName: Saksham Agrahari");

    return 0;
}
