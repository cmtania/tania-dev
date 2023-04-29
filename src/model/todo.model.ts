export class ToDoModel {
    Title: string = '';
    Stack: string = '';
    Status: string = '';
    GitHubLink?: string = '';
    LiveLink?: string = '';
    Icon?: string = '';
}


export class GetTodo {

    todoList: Array<ToDoModel> = [
    {
        Title: 'Main Portfolio',
        Stack: 'Angular',
        Status:'In Progress',
        GitHubLink: 'https://github.com/cmtania/tania-dev',
        LiveLink: '',
        Icon: 'angular'
    },
    {
        Title: 'Portfolio - Theme Code',
        Stack: 'Angular',
        Status:'In Progress',
        GitHubLink: 'https://github.com/cmtania/portfolio-vscodetheme',
        LiveLink: 'https://cmtania.github.io/portfolio-vscodetheme/main',
        Icon: 'angular'
    },
    {
        Title: 'Jobs Board with CRUD Functionality',
        Stack: 'Angular & NodeJS',
        Status:'In Progress',
        GitHubLink: 'https://github.com/cmtania/jobs-board',
        LiveLink: '',
        Icon: 'angular'
    },
    {
        Title: 'Create Database Using Command Line',
        Stack: 'NodeJs',
        Status:'Completed',
        GitHubLink: 'https://github.com/cmtania/NodeJs-CreateDatabase',
        LiveLink: '',
        Icon: 'node'
    },
    {
        Title: 'Guess Cup Ball Exercise',
        Stack: 'Python',
        Status:'Completed',
        GitHubLink: 'https://github.com/cmtania/BallGuessCup',
        LiveLink: '',
        Icon: 'python'
    },
    {
        Title: 'Education Landing Page',
        Stack: 'HTML & CSS',
        Status:'Completed',
        GitHubLink: '',
        LiveLink: 'https://securranty-development.azurewebsites.net/Education.aspx',
        Icon: 'bootstrap'
    },
    {
        Title: 'Insurance Plan Landing Page',
        Stack: 'HTML & CSS',
        Status:'Completed',
        GitHubLink: '',
        LiveLink: 'https://securranty-development.azurewebsites.net//Student-Device-Insurance-Repairs.aspx',
        Icon: 'bootstrap'
    }
    ];
    
    getList(): Array<ToDoModel> {
        return this.todoList;
    }
}