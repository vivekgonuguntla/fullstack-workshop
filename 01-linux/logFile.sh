#!/bin/bash


LOG_FILE=${1:-"C:\Users\vivekgonuguntla\one\sample.txt"}

if [ ! -f "$LOG_FILE" ]; then
    echo "Error: Log file not found: $LOG_FILE"
    exit 1
fi

echo "=== Log Analysis Report ==="
echo "File: $LOG_FILE"
echo ""

echo "Error count: $(grep -c -i 'error' "$LOG_FILE")"
echo "Warning count: $(grep -c -i 'warning' "$LOG_FILE")"
echo ""

echo "=== Recent Errors ==="
grep -i 'error' "$LOG_FILE" | tail -5