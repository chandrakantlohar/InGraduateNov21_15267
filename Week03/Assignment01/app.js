

const readline = require('readline').createInterface({
input:process.stdin,
output:process.stdout
});

readline.question('enter occasion',name => {
    switch(name)
    {
        case 'New Year' :
            console.log("happy new year")
            readline.close();
            break
        case 'Chrismas' :
            console.log("Merry Chrismas")
            readline.close();
            break
        case 'Birthday' :
            console.log("happy Birthday")
            readline.close();
            break    
        case 'Anniversary' :
            console.log("happy Anniversary")
            readline.close();
            break    
    }
    
});
