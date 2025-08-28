#include <stdio.h>
#include <limits.h>

#define V 6

int minKey(int key[], int mstSet[]) {
    int min = INT_MAX, min_index;

    for (int v = 0; v < V; v++) {
        if (mstSet[v] == 0 && key[v] < min) {
            min = key[v];
            min_index = v;
        }
    }

    return min_index;
}

void primMST(int graph[V][V]) {
    int parent[V];
    int key[V];
    int mstSet[V];

    for (int i = 0; i < V; i++) {
        key[i] = INT_MAX;
        mstSet[i] = 0;
    }

    key[0] = 0;
    parent[0] = -1;

    int totalWeight = 0;

    printf("\nEdges in the MST:\n");

    for (int count = 0; count < V - 1; count++) {
        int u = minKey(key, mstSet);
        mstSet[u] = 1;

        for (int v = 0; v < V; v++) {
            if (graph[u][v] && mstSet[v] == 0 && graph[u][v] < key[v]) {
                parent[v] = u;
                key[v] = graph[u][v];
            }
        }

        if (parent[u] != -1) {
            printf("%d - %d   Weight: %d\n", parent[u], u, graph[parent[u]][u]);
            totalWeight += graph[parent[u]][u];
        }
    }

    printf("\nTotal weight of the MST: %d\n", totalWeight);
}

int main() {
    int graph[V][V] = {
        {0, 4, 0, 0, 0, 0},
        {4, 0, 4, 0, 0, 0},
        {0, 4, 0, 5, 0, 0},
        {0, 0, 5, 0, 4, 0},
        {0, 0, 0, 4, 0, 3},
        {0, 0, 0, 0, 3, 0}
    };

    primMST(graph);
    printf("\nProgram No: 10\nName: Saksham Agrahari\n");

    return 0;
}