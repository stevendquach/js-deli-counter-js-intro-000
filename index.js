katzDeliLine = []

function takeANumber(katzDeliLine,name){
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}
function nowServing(katzDeliLine) {
  var length = katzDeliLine.length
  if(length == 0) {
    return "There is nobody waiting to be served!"
  } else {
    var person = katzDeliLine.shift()
    return `Currently serving ${person}.`
  }
}

function currentLine(katzDeliLine) {
  const y = ('The line is currently: ');

      if (katzDeliLine.length() == 0) {
        return (`The line is currently empty.`) }
        else {
          for (let i = 0; i < katzDeliLine.length; i++) {
            return (`y + ${i+1}, ${katzDeliLine[i]}`);
} }
}
