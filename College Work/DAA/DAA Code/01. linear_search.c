#include <stdio.h>

int linearSearch(int arr[], int size, int key, int index) {
    if (index >= size) {
        return -1;
    }
    if (arr[index] == key) {
        return index;
    }
    return linearSearch(arr, size, key, index + 1);
}


int main() {
    int size, key, result;

    printf("Enter the size of the array: ");
    scanf("%d", &size);
    int arr[size];
    printf("Enter the elements of the array:\n");

    for (int i = 0; i < size; i++) {
        scanf("%d", &arr[i]);
    }

    printf("Enter the element to search: ");
    scanf("%d", &key);

    result = linearSearch(arr, size, key, 0);

    if (result != -1) {
        printf("Element %d found at index %d\n", key, result);
    } else {
        printf("Element %d not found in the array\n", key);
    }

    printf("\nProgram No. : 01");
    printf("\nName: Saksham Agrahari");

    return 0;
}
