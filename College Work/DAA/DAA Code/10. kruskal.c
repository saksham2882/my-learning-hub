#include <stdio.h>
#include <stdlib.h>

#define MAX 100
int parent[MAX], rank[MAX];


int find(int i) {
    if (parent[i] == i) {
        return i;
    }
    return parent[i] = find(parent[i]);
}

void unionSets(int x, int y) {
    int rootX = find(x);
    int rootY = find(y);

    if (rootX != rootY) {
        if (rank[rootX] > rank[rootY]) {
            parent[rootY] = rootX;
        } else if (rank[rootX] < rank[rootY]) {
            parent[rootX] = rootY;
        } else {
            parent[rootY] = rootX;
            rank[rootX]++;
        }
    }
}


struct Edge {
    int src, dest, weight;
};


int compare(const void* a, const void* b) {
    struct Edge* edge1 = (struct Edge*)a;
    struct Edge* edge2 = (struct Edge*)b;
    return edge1->weight - edge2->weight;
}


void kruskal(int n, struct Edge edges[], int e) {
    int mstWeight = 0;
    qsort(edges, e, sizeof(struct Edge), compare);

    for (int i = 0; i < n; i++) {
        parent[i] = i;
        rank[i] = 0;
    }

    printf("\nEdges in the MST:\n");

    for (int i = 0; i < e; i++) {
        int u = edges[i].src;
        int v = edges[i].dest;

        if (find(u) != find(v)) {
            printf("%d - %d (Weight: %d)\n", u, v, edges[i].weight);
            mstWeight += edges[i].weight;
            unionSets(u, v);
        }
    }

    printf("\nTotal weight of the MST: %d\n", mstWeight);
}


int main() {
    int n = 4; 
    int e = 5; 
    struct Edge edges[] = {
        {0, 1, 10},
        {0, 2, 6},
        {0, 3, 5},
        {1, 3, 15},
        {2, 3, 4}
    };

    kruskal(n, edges, e);

    printf("\nProgram No: 10\nName: Saksham Agrahari\n");

    return 0;
}
