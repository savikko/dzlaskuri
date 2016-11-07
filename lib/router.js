// Not found

FlowRouter.notFound = {
  action: () => {
    BlazeLayout.render('layout', {
      top: 'navbar',
      content: 'notFound'
    })
  }
}

var exposed = FlowRouter.group({});

exposed.route('/', {
  name: 'home',
  action: (params, queryParams) => {
    BlazeLayout.render('layout',{ content: 'values'})
  }
})

exposed.route('/:id', {
  name: 'view',
  action: (params, queryParams) => {
    BlazeLayout.render('layout',{ content: 'values' })
  }
})