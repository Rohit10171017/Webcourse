function createPhoneNumber(numbers){
  let str = ""
  for(let i = 0 ; i < numbers.length ; i++)
    {
      if(i == 0 || i == 2)
        {
          if(i == 0) str = str+"("+numbers[i];
          if(i == 2) str = str+numbers[2]+")"+" ";
          continue;
        }
      else if(i == 5)
        {
         str = str + numbers[5] + "-";
          continue;
        }
      else {
        str = str + numbers[i];
      }
    }
  return str;
}
const arr = [1,2,3,4,5,6,7,8,9,0];

const s = createPhoneNumber(arr);

console.log(s);