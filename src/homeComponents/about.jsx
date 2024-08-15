import React from 'react';
import "./style.css";
import Navbar from "./navbar";

class About extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className="about-container">
                    <h1>About Algorithm Visualizer</h1>
                    <p>
                        Algorithm Visualizer is an educational tool designed to help users better understand and visualize various algorithms. Whether you're learning about sorting algorithms, pathfinding techniques, or other fundamental algorithms, this platform provides an interactive way to see how these algorithms work in real-time.
                    </p>
                    <h2>Features</h2>
                    <ul>
                        <li>Visualize Sorting Algorithms: Bubble Sort, Merge Sort, Quick Sort, and more.</li>
                        <li>Explore Pathfinding Algorithms: Dijkstra's, A*, Breadth-First Search, etc.</li>
                        <li>Understand Recursion and Backtracking with examples like N-Queens.</li>
                        <li>Interactive and User-Friendly Interface.</li>
                        <li>Customizable Settings: Adjust speed, size of data sets, and more.</li>
                    </ul>
                    <h2>Project Background</h2>
                    <p>
                        The Algorithm Visualizer project was created with the aim of making complex algorithms easier to understand. It provides a visual approach to learning, making it ideal for students, educators, and anyone interested in computer science.
                    </p>
                    <h2>Technologies Used</h2>
                    <ul>
                        <li>React.js for building the user interface.</li>
                        <li>Material-UI for stylish and responsive components.</li>
                        <li>JavaScript ES6+ for modern, clean code.</li>
                    </ul>
                    <h2>Get Involved</h2>
                    <p>
                        We welcome contributions from the community! If you have ideas for new features, improvements, or find any issues, feel free to contribute on our GitHub repository.
                    </p>
                </div>
            </React.Fragment>
        );
    }
}

export default About;
