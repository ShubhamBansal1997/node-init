# node-init|(Status: Active Development)

Project template used a 408 solutions Pvt. Ltd. to start a new Project. Optimimzed to make api endpoints with the help of **GraphQL**, **Node.js**, **Express** with deployment to **Heroku** and **EC2 instanaces**.

# Tasks Remaining
- Setup Procfile for Heroku Deployment
- Setup CI and CD for ec2
- Implement pagingation in graphQL
- Setup base documentation to get Started
- Media Storage using [Amazon S3](https://aws.amazon.com/s3/)
- Integrate [Mkdocs](http://www.mkdocs.org/) for documentation
-  `travis.yml` for running isolated tests and deployments to dev/qa/prod environment on Heroku from git branches.
- Add multiple database support(Presently using PostgreSQL)
- [Letsencrypt](https://letsencrypt.org/) Support via [certbot](https://certbot.eff.org/)
- Configure robots.txt and humans.txt
- User level permissions (optimized as per common cases)
- Setup [Mocha](https://mochajs.org/) and [Chai](http://chaijs.com/) for writing tests

## Getting Started

`git clone https://github.com/a408/node-init`
`yarn server`
or 
`npm run server`(if you are using npm)
> The boilerplate it still in highly development you use it carefully or please make a pull request if you complete any of the task

## Release Policy

node-init is a rolling release project. Commit and fixes are added to master branch on regular basis and always have latest stable node and associated packages. You are advised to follow-up with changelogs.

## Changelogs

Refer to [CHANGELOG.md](https://github.com/a408/node-init/blob/master/CHANGELOG.md).

-----
Build with ♥ at [408](https://github.com/a408)
