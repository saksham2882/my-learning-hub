#include <stdio.h>
#include <stdbool.h>

#define V 5

void printSolution(int path[]) {
    printf("\n\nHamiltonian Cycle: ");
    for (int i = 0; i < V; i++)
        printf("%d ", path[i]);
    printf("\n");
}

bool isSafe(int v, bool graph[V][V], int path[], int pos) {
    if (graph[path[pos - 1]][v] == 0)
        return false;

    for (int i = 0; i < pos; i++) {
        if (path[i] == v)
            return false;
    }

    return true;
}

bool hamiltonianCycleUtil(bool graph[V][V], int path[], int pos) {
    if (pos == V) {
        if (graph[path[pos - 1]][path[0]] == 1)
            return true;
        return false;
    }

    for (int v = 1; v < V; v++) {
        if (isSafe(v, graph, path, pos)) {
            path[pos] = v;
            if (hamiltonianCycleUtil(graph, path, pos + 1))
                return true;
            path[pos] = -1;
        }
    }
    return false;
}

void findHamiltonianCycle(bool graph[V][V]) {
    int path[V];
    for (int i = 0; i < V; i++)
        path[i] = -1;

    path[0] = 0;

    if (!hamiltonianCycleUtil(graph, path, 1)) {
        printf("No Hamiltonian Cycle exists.\n");
        return;
    }

    printSolution(path);
}

int main() {
    bool graph[V][V] = {
        {0, 1, 0, 1, 0},
        {1, 0, 1, 1, 0},
        {0, 1, 0, 0, 1},
        {1, 1, 0, 0, 1},
        {0, 0, 1, 1, 0}
    };

    findHamiltonianCycle(graph);

    printf("\nProgram No: 15\nName: Saksham Agrahari\n");

    return 0;
}
