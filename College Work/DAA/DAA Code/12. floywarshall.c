#include <stdio.h>
#define INF 99999
#define V 4

void floydWarshall(int graph[][V]) {
    int dist[V][V], i, j, k;

    for (i = 0; i < V; i++) {
        for (j = 0; j < V; j++) {
            if (graph[i][j] == 0) {
                dist[i][j] = INF;
            } else {
                dist[i][j] = graph[i][j];
            }
        }
    }

    for (k = 0; k < V; k++) {
        for (i = 0; i < V; i++) {
            for (j = 0; j < V; j++) {
                if (dist[i][k] + dist[k][j] < dist[i][j]) {
                    dist[i][j] = dist[i][k] + dist[k][j];
                }
            }
        }
    }

    printf("\n\nShortest distance matrix: \n");
    for (i = 0; i < V; i++) {
        for (j = 0; j < V; j++) {
            if (dist[i][j] == INF) {
                printf("INF ");
            } else {
                printf("%d ", dist[i][j]);
            }
        }
        printf("\n");
    }
}

int main() {
    int graph[V][V] = {
        {0, 3, INF, 7},
        {3, 0, 1, INF},
        {INF, 1, 0, 2},
        {7, INF, 2, 0}
    };

    floydWarshall(graph);

    printf("\nProgram No. 12\nName: Saksham Agrahari\n");

    return 0;
}