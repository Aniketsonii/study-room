# Study Room

Study room project which helps you create a room for studying with friends

## Getting Started

These instructions will help you get a copy of the project up and running on your local machine.

### Prerequisites

Ensure that you have the following software installed on your machine:

- Docker: [Installation Guide](https://docs.docker.com/get-docker/)

## Usage

1. Clone the repository to your local machine by running the following command in your terminal:

   ```bash
   git clone https://github.com/your-username/study-room
    ```


2. Navigate to the project directory:
     ```bash
    cd study-room
    ```


3. Build the Docker image:
   Build the Docker image using the provided Dockerfile. Open a terminal in the project directory and run:
   ```bash
   docker build -t your-docker-username/study-room:tag .
    ```
   Replace your-docker-username/study-room:tag with the desired name and tag for your Docker image.


4. Run the Docker container:

   Once the Docker image is built, run the Docker container with the following command:
    ```bash
   docker run -p 3000:3000 your-docker-username/study-room:tag
    ```
   Adjust the port mapping (-p) if your application uses a different port.


5. Access your application in a web browser at http://localhost:3000.
