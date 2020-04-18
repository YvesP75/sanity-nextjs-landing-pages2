export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5e9b2d876446ed0ec2988820',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages2-studio-1zhibv9b',
                  apiId: '8326f4e1-2fe5-480c-9d66-4d51221aae7a'
                },
                {
                  buildHookId: '5e9b2d88e348e31434205ff3',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages2-web-e287yohj',
                  apiId: '859a805d-30df-4809-8366-9508d0d84fa1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/YvesP75/sanity-nextjs-landing-pages2',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages2-web-e287yohj.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
