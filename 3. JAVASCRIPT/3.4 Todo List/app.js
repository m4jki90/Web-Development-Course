let run = true;
const list = ["Eat Food"];
while (run){
    const choice = prompt("What would you like to do?");
    if (choice=="new") {
        let element = prompt("Enter new todo");
        list.push(element);
        console.log(`${element} added to list`);
    } else if (choice=="list") {
        console.log(`**********`);
        for(let i = 0; i < list.length; i++){
            console.log(`${i} ${list[i]}`);
        }
        console.log(`**********`);
    } else if (choice=="delete") {
        let del = prompt("Enter index of todo to delete");
        list.slice(del);
        console.log("Todo Removed");
    } else if (choice=="quit") {
        run=false;
    } else {
        run=true;
    }
}
console.log("OK, YOU QUIT THE APP");

