import numpy as np
import matplotlib.pyplot as plt

def plot_heatmap(matrix, labels):
    fig, ax = plt.subplots()
    im = ax.imshow(matrix, cmap='coolwarm', interpolation='nearest')
    cbar = ax.figure.colorbar(im, ax=ax)
    ax.set_xticks(np.arange(len(labels)))
    ax.set_yticks(np.arange(len(labels)))
    ax.set_xticklabels(labels)
    ax.set_yticklabels(labels)
    for i in range(len(labels)):
        for j in range(len(labels)):
            text = ax.text(j, i, matrix[i, j], ha='center', va='center', color='w', fontsize=15)
    ax.set_title("Confusion Matrix Heatmap")
    ax.set_xlabel("Predicted Labels")
    ax.set_ylabel("True Labels")
    plt.show()
labels = ['Negative', 'Positive']
matrix = np.array([[0, 16], [28, 148]])
plot_heatmap(matrix, labels)
