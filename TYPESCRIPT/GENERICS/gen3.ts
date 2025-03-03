interface KeyPair<D,P>{
    key:D,
    value:P
}
let kv1:KeyPair<string,string>={key:"Durga",value:"Prasad"};
let kv2:KeyPair<number,string>={key:501,value:"Prasad"};
console.log(kv1);
console.log(kv2);