(function chai()
{
    console.log(`DB CONNECTED`);
})();//named function
((name) => {
    console.log(`DB CONNECTED TO ${name}`);
})('MANUSHA')//unnamed function