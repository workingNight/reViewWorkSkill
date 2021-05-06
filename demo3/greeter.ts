function greeter(person: string): string{
    return "Hello, " + person;
}

let user: string = "Jane User";

document.body.innerHTML = greeter(user);


//greeter 迎宾员
//deprecated 过时、被废弃、不赞成、贬低
// 函数实现重复  问题解决：  tsc --init