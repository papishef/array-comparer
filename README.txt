
FUNCTION OF SCRIPT
The function of this script is to compare two arrays (ranging from two text 
files or email files from database arranged as an array) and return the difference 
in the form of a third array.

It saves time for when you have two files and have probably worked on one before and the second file contains items from the first file. This script would help you filter out the difference and ease your life.

HOW TO USE

If file containing emails (usually from a database or email marketting tool):
1. Convert your files to arrays (no matter how large) using email extractor lite on google, specifying the separating symbol for each email as comma.

2. Clone the git repository into desired folder with git clone https://github.com/papishef/array-comparer.git

3. Store the output from item 1. above within the square brackets [] in an array called arr1 in the variable specified within the code. Do the same for arr2

4. Save the file, run node .\filename.js and observe your console.