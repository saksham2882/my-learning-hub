#include <stdio.h>
#define N 8

char board[N][N];

int isSafe(int row, int col) {
    for (int i = 0; i < col; i++) 
        if (board[row][i] == 'Q') 
            return 0;

    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--) 
        if (board[i][j] == 'Q') 
            return 0;

    for (int i = row, j = col; i < N && j >= 0; i++, j--) 
        if (board[i][j] == 'Q') 
            return 0;

    return 1;
}

int solveNQueens(int col) {
    if (col >= N) 
        return 1;

    for (int i = 0; i < N; i++) {
        if (isSafe(i, col)) {
            board[i][col] = 'Q';
            if (solveNQueens(col + 1)) 
                return 1;
            board[i][col] = '_';
        }
    }

    return 0;
}

void initializeBoard() {
    for (int i = 0; i < N; i++) 
        for (int j = 0; j < N; j++) 
            board[i][j] = '_';
}

void printSolution() {
    for (int i = 0; i < N; i++) {
        for (int j = 0; j < N; j++) 
            printf("%c ", board[i][j]);
        printf("\n");
    }
}

int main() {
    initializeBoard();
    if (solveNQueens(0)) {
        printf("\n\nSolution for N-Queens Problem:\n");
        printSolution();
    } else 
        printf("No solution exists for the given N.\n");

    printf("\nProgram No.: 16\nName: Saksham Agrahari\n");
    return 0;
}
