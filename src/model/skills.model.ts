export class SkillModel {
    Title: string = '';
    SourceImage: string = '';
}


export class GetSkill {

    skillList: Array<SkillModel> = [
    {
        Title: 'C#',
        SourceImage: 'assets/logo/csharp.svg'
    },
    {
        Title: 'JavaScript',
        SourceImage: 'assets/logo/js.svg'
    },
    {
        Title: 'Python',
        SourceImage: 'assets/logo/python.svg'
    },
    {
        Title: 'Amazon Web Services',
        SourceImage: 'assets/logo/aws.svg'
    },
    {
        Title: 'NodeJS',
        SourceImage: 'assets/logo/nodejs.svg'
    },
    {
        Title: 'AWS Lambda',
        SourceImage: 'assets/logo/lambda.svg'
    },
    {
        Title: 'AWS Serverless',
        SourceImage: 'assets/logo/serverless.svg'
    },
    {
        Title: 'Angular',
        SourceImage: 'assets/logo/angular.svg'
    },
    {
        Title: 'SQL',
        SourceImage: 'assets/logo/sql.svg'
    },
    {
        Title: 'API',
        SourceImage: 'assets/logo/api.svg'
    },
    {
        Title: 'Azure GIT',
        SourceImage: 'assets/logo/azure.svg'
    },
    {
        Title: 'Bootstrap',
        SourceImage: 'assets/logo/bootstrap.svg'
    }
    ];
    
    getList(): Array<SkillModel> {
        return this.skillList;
    }
}