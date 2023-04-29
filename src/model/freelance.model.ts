export class FreelanceModel {
    Company: string = '';
    Project: string = '';
    LengthExperience: string = '';
    JobTitle: string = '';
    Stack: string = '';
    Duration: string = '';
    Task: Array<string> = [];
}


export class GetFreelance {

    freelanceList: Array<FreelanceModel> = [
    {
        Company: 'OnlineJobs.PH',
        Project: 'Inventory System',
        LengthExperience: '3 months',
        JobTitle:'Front End Developer',
        Duration: 'June 2022 - August 2022',
        Stack: 'C# MVC & jQuery',
        Task: ['Creates transaction page with CRUD functionality and implements the corresponding API per transaction.']
    },
    {
        Company: 'Upwork',
        Project: 'Insurance Plan System',
        LengthExperience: '6 months',
        JobTitle:'ASP.NET Developer',
        Duration: 'June 2022 - August 2022',
        Stack: 'C# MVC Blazor',
        Task: ['Fixing issues on the system, enhance/modified user interface, create html email template, and optimize per page that retrieving data from database.']
    }
    ];
    
    getList(): Array<FreelanceModel> {
        return this.freelanceList;
    }
}