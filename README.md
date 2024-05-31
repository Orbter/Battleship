# Battleship Game

## Overview

Battleship Game is a web-based implementation of the classic board game, developed using JavaScript, Webpack, and modern coding practices. This project features a sophisticated enemy attack algorithm utilizing recursion and factory functions, ensuring a dynamic and challenging gameplay experience. Additionally, the project includes seamless connections between different pages of the game interface.

## Project Demo
[![photoForBattleShip](https://github.com/Orbter/Battleship/assets/94376239/29d0f33e-4c3d-4b2d-98e8-e7bcd536bfef)](https://orbter.github.io/Battleship/)

Click the image above to try out the live demo!

## Features

- **Interactive Game Board**: A visually appealing, clickable grid for placing ships and targeting enemy vessels.
- **Smart Enemy AI**: The enemy's attack algorithm uses recursion to strategically target player ships.
- **Factory Functions**: Utilized for creating game objects, ensuring clean and maintainable code.
- **Modular Code Structure**: Adheres to the best practices of file division and code organization, making it easy to navigate and extend.
- **Responsive Design**: The game interface adapts to different screen sizes for a seamless experience on any device.
- **Page Connections**: Smooth transitions and connections between different pages of the game interface.

## How It Works

### Initialization

- **Player Setup**: Users can place their ships on the grid by clicking to select a starting point and dragging to set the ship's orientation and length.
- **Unique Ships**: Players choose from a variety of ships, each with unique lengths, to strategically place on the grid.
- **Enemy Setup**: The enemy's ships are randomly placed on the grid, hidden from the player.

### Gameplay

- **Player's Turn**: Players take turns to click on the enemy grid, attempting to hit and sink all enemy ships.
- **Enemy's Turn**: The enemy's AI calculates its moves using a recursive algorithm, strategically targeting player ships.
- **Victory Conditions**: The game ends when all ships of one side are sunk, declaring the opposite side as the winner.

## Technologies Used

- **HTML/CSS**: For the layout and styling of the web interface.
- **JavaScript**: For the interactive elements and implementing the game logic.
- **Webpack**: For module bundling and project organization.

## Setup and Installation

To run this project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/Battleship-Game.git
    ```

2. **Navigate to the project directory:**

    ```bash
    cd Battleship-Game
    ```

3. **Install the dependencies:**

    ```bash
    npm install
    ```

4. **Run the development server:**

    ```bash
    npm start
    ```

5. Open your browser and go to `http://localhost:8080` to start playing!

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- Thanks to the creators of the original Battleship game for the inspiration.
- Special thanks to my instructors and classmates for their support and feedback throughout the development process.
