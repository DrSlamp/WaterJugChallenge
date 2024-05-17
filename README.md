

<h1 align="center"> <img src="https://github.com/DrSlamp/WaterJugChallenge/assets/24397487/dbcb0d0b-a14a-4387-b919-e7d3ce2b7c23" alt="ChicksGold Water" tittle="Water"/> Water Jug Challenge (wjc) v0 <img src="https://github.com/DrSlamp/WaterJugChallenge/assets/24397487/dbcb0d0b-a14a-4387-b919-e7d3ce2b7c23" alt="ChicksGold Water" tittle="Water"/> </h1>

<h2 align="center">Desktop View</h2>
<p align="center">
  <img src="https://github.com/DrSlamp/WaterJugChallenge/assets/24397487/12961676-7b25-4865-98d1-3923086c6d8a" alt="ChicksGold" tittle="WJC Desktop"/>
</p>
<h2 align="center">Mobile View</h2>
<p align="center">
  <img src="https://github.com/DrSlamp/WaterJugChallenge/assets/24397487/06e29eae-e379-4a26-a1c4-2d4d4253362b" alt="ChicksGold Mobile" tittle="WJC Mobile"/>
</p>

### For this project:
<b>Vuejs 3 Vue vite</b> was used for this project. 

## Explanation

About Breadth-First Search (BFS): 

BFS is a graph traversal algorithm that explores all the vertices of a graph in breadth-first order, i.e., it explores all the vertices at the present depth before moving on to vertices at the next depth level.

About Water Jug Problem: 

This is a classic problem where you have two jugs of water with different capacities and you need to measure out a specific amount of water using these jugs. In this case, the jugs are represented by bucketX and bucketY, and the target amount of water is represented by amountWanted. 

Fill, empty, transfer functions: These functions represent the possible actions you can take in the water jug problem. You can fill a jug to its capacity, empty a jug, or transfer water from one jug to another.

gcd function: This function calculates the greatest common divisor (GCD) of two numbers using the Euclidean algorithm. This is used to check if the target amount of water can be measured out using the two jugs (i.e., the target amount must be divisible by the GCD of the capacities of the two jugs).

BFS function: This function implements the BFS algorithm to find the shortest sequence of actions that results in the target amount of water. It uses a queue to keep track of the states to explore and a set to keep track of the states that have already been visited.

calculateSteps function: This function checks if the problem has a solution and if so, it calls the BFS function to find the solution.

With this explanation, you will be able to understand the functioning of WJC (Water Jug Challenge).

### How to Install

Install the npm dependencies with the following command:

```bash
npm install
```

### Starting the Development Server (water)

Access [http://localhost:3000](http://localhost:3000) from your preferred browser. In Vscode, go to port, then follow the link (3000) If, for example, when running npm run dev, another port is chosen, make sure to use that one.

```bash
npm run water
```

### Running unit tests

Start (UTS) unit tests section, use the command: 

```bash
npm run test
```

### For Production


To build your project for production, use the command:

```bash
npm run build
```

 Your application will be ready for deployment in a production env. # WaterJC
