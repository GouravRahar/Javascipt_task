const fs = require('fs');

const file = 'data.txt';
const words = [];

fs.readFile(file, (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  const data_to_string  = data.toString();
  const lines = data_to_string.split('\n');
  let final_length=0;
  for(const line of lines){
    const wordsInLine = line.split(' ').filter(word => word !== '');
    final_length += wordsInLine.length;
  }
  console.log(`Total words length is: ${final_length}`);
});