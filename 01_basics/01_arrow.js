// function chai() {
//     let username = 'manusha'
//     console.log(this.username);
//     console.log(this);
    
    
// }
const chai = () =>
{
    let username = 'manusha'
    console.log(this.username);
    console.log(this);
}
chai()

const addOne = (num) => (num + 1)
console.log(addOne(5));

const user = () => ({username : 'manusha'})
console.log(user)
