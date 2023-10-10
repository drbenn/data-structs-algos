console.log('test');


function receiver(func: any) {
  console.log('IN RECEIVER');
  


  return func('jabroni') 
}


function sender(keyword: string) {
  console.log(`sender + ${keyword}`);
}

const fInF = receiver(sender)