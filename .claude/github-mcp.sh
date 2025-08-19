#!/bin/bash
# Wrapper script to load .env and start GitHub MCP server

# Get the directory where this script is located
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Load environment variables from ../.env file
if [ -f "$SCRIPT_DIR/../.env" ]; then
  export $(cat "$SCRIPT_DIR/../.env" | grep -v '^#' | xargs)
fi

# Start the GitHub MCP server
exec npx -y @modelcontextprotocol/server-github