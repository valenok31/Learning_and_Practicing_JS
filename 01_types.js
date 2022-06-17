class Task{
constructor(title='', normal=false){
    this.title=title,
        this.normal=normal

}
}
let task = new Task('Hello!!', true);

console.log(task.title)