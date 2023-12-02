#!/bin/bash
cd /home/mariam/crowdsource/Tests
echo "Testing against inputs..."
for file in ./*; do
    echo "Testing with input file: $file"
    
    TIME_TAKEN=$( { time node ./Test/"$file" ; } 2>&1 | grep real | awk '{print $2}')
    output=$(node "$file")
    echo "$output"
    echo "----------------------------------"
    
    spaces_count=$(echo "$output" | grep -o '\.' | wc -l)
    echo "Number of spaces in output: $spaces_count"
    echo "Time taken: $TIME_TAKEN"
    echo "----------------------------------"
done

echo "All tests completed."

# #!/bin/bash

# # Define the JavaScript file to test
# js_file="/Tests/test01.js"

# # Run the JavaScript file with Node.js and save the output
# output=$(node "$js_file")

# # Check the output
# if [[ "$output" == "Expected output" ]]; then
#     echo "Test passed"
# else
#     echo "Test failed"
# fi