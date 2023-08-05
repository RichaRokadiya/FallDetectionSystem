import numpy as np
import matplotlib.pyplot as plt

def plot_heatmap(matrix, labels):
    fig, ax = plt.subplots()
    im = ax.imshow(matrix, cmap='coolwarm', interpolation='nearest')

    # Adding color bar
    cbar = ax.figure.colorbar(im, ax=ax)
    
    # Adding x and y axis labels
    ax.set_xticks(np.arange(len(labels)))
    ax.set_yticks(np.arange(len(labels)))
    ax.set_xticklabels(labels)
    ax.set_yticklabels(labels)

    # Adding value annotations in each cell
    for i in range(len(labels)):
        for j in range(len(labels)):
            text = ax.text(j, i, matrix[i, j], ha='center', va='center', color='w', fontsize=15)

    # Set title and labels
    ax.set_title("Confusion Matrix Heatmap")
    ax.set_xlabel("Predicted Labels")
    ax.set_ylabel("True Labels")

    # Show the plot
    plt.show()

# Example 2x2 matrix with custom labels
labels = ['Negative', 'Positive']
matrix = np.array([[0, 16], [28, 148]])

# Plot the heatmap
plot_heatmap(matrix, labels)
