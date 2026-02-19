# Project Setup Guide (macOS)

This guide ensures a smooth setup for the project on macOS.

## Prerequisites

1.  **Node.js**: Ensure you have Node.js installed. We recommend using `nvm` (Node Version Manager) to manage versions.
    *   This project has an `.nvmrc` file pinning the version to `v22.13.1`.
    *   If you have `nvm` installed, run `nvm use` in the project directory.
    *   Otherwise, ensure you are running Node.js version 20 or higher.

## Setup Instructions

1.  **Unzip the Project**:
    *   Extract the provided zip file to your desired location.

2.  **Open Terminal**:
    *   Open the terminal and navigate to the project folder:
        ```bash
        cd /path/to/extracted-folder
        ```

3.  **Clean Install (Recommended)**:
    *   To ensure no conflicts, run a clean install of dependencies:
        ```bash
        npm ci
        ```
    *   *Note: If `npm ci` fails due to lockfile mismatches (unlikely), you can fall back to `npm install`.*

4.  **Start Development Server**:
    *   Run the development server:
        ```bash
        npm run dev
        ```
    *   Open your browser to the URL shown (usually `http://localhost:8080` or similar).

## Troubleshooting

*   **Port Config**: The project is configured to run on port `8080`. If this port is in use, you may need to kill the process utilizing it or edit `vite.config.ts`.
*   **Permissions**: If you encounter permission errors, avoid using `sudo`. Check your user permissions on the folder.
