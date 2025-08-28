#include <stdio.h>

int checkPrime(int num) {
    if (num <= 1) return 0;
    if (num <= 3) return 1;
    if (num % 2 == 0 || num % 3 == 0) return 0;
    for (int i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) return 0;
    }
    return 1;
}

void displayElements(int arr[], int size, int type) {
    for (int i = 0; i < size; i++) {
        if (type == 1 && arr[i] % 2 != 0) {
            printf("%d ", arr[i]);
        } else if (type == 2 && arr[i] % 2 == 0) {
            printf("%d ", arr[i]);
        } else if (type == 3 && checkPrime(arr[i])) {
            printf("%d ", arr[i]);
        }
    }
    printf("\n");
}

int main() {
    const int arr[] = {12, 15, 7, 20, 9, 30, 18, 25, 14, 22};
    int size = sizeof(arr) / sizeof(arr[0]);
    
    printf("\n\n\n\nOdd numbers in the sequence: ");
    displayElements(arr, size, 1);
    
    printf("Even numbers in the sequence: ");
    displayElements(arr, size, 2);
    
    printf("Prime numbers in the sequence: ");
    displayElements(arr, size, 3);
    
    printf("Numbers at odd indices: ");
    for (int i = 1; i < size; i += 2) {
        printf("%d ", arr[i]); 
    }
    printf("\n");
    
    printf("Numbers at even indices: ");
    for (int i = 0; i < size; i += 2) {
        printf("%d ", arr[i]);
    }
    printf("\n");

    printf("\nProgram No. : 03");
    printf("\nName: Saksham Agrahari");
    
    return 0;
}
