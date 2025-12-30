#!/bin/bash
set -e
set -u
logf=${1:-"C:/Users/vivekgonuguntla/ex1/sample.txt"}

if [[ ! -f "$logf" ]]; then
  echo "file not exist"
  exit 1
fi

echo "========== LOG ANALYSIS REPORT =========="
log="C:/Users/vivekgonuguntla/ex1/sample.txt"
echo "file name: $log"
count=$(wc -l < "C:/Users/vivekgonuguntla/ex1/sample.txt")
echo "Total Lines:$count"
echo "-----------------------------------------------------"
#-c only count unique
count1=$(grep -i -c "ERROR" "$log") 
echo "ERROR:$count1"
count2=$(grep -i -c "INFO" "$log")
echo "INFO:$count2"
count3=$(grep -i -c "warning" "$log")
echo "WARNING:$count3"
#-o will get the duplicates
count4=$(grep -i -o "INFO" "$log" | wc -l)
echo "Dupliacties:$count4"
echo "-----------------------------------------------------"
echo "Unique IP Addresses Found:$(grep -oE '([0-9]{1,3}\.){3}[0-9]{1,3}' "$log" | sort | uniq -c)"
echo "$(date)"
