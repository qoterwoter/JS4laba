let text = "http://example.example/example/example.example?param1=value1&param2=value2, https://www.example.example https://www.google.com http://example.example/example/example.example?param1=value1";
let email = 'name@domen.zone';
console.log(text.search(/(http|https):\/\/(\w+:{0,1})?(\S+)/));
console.log(email.search(/[a-z 0-9 !#$%&'*+/=?^_`{|}~-]+(?:\.[a-z 0-9 !#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z 0-9](?:[a-z 0-9-]*[a-z 0-9])?\.)+[a-z 0-9](?:[a-z 0-9-]*[a-z 0-9])?/))