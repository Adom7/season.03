
const str = 'localhost:8080?a=1&b=2&c=3'
const regex = /(\?|\&)([^=]+)\=(?<result>[^&]+)/gm  ;
var result = str.match(regex)

for (let i = 0; i < result.length; i++) {
    const element = result[i];
    const regex2  = /^\W+/gm ; 
    let value =  element.replace(regex2,"");
    console.log(value)
}