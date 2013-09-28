# Over the Air Hack Challenge

This is a standalone, static website, currently deployed [on Heroku](http://tnmoc.herokuapp.com). It allows for the creation of media-rich timelines for museum exhibit content. The aims are:

* Simplicity
* Portability
* Ease of maintenance (via Google Spreadsheets)
* Device comptability for lots of stuff!

## Components

## Maintenance

### How to update an existing timeline

You'll need access to the spreadsheet in question, but edits show up real time! Easy peasy, as they say.

### How to add or change overall timeline pages

You'll need to have the app installed locally (see below). Right now, adding a new timeline (or editing/removing an existing one) is handled via these steps:

1. Add metadata about the new timeline to `timelines.json` at the root level of the repo.
2. Create a new `hbt` (Handlebars Template) file in the `src` directory. Follow the guides of the existing files. The only change necessary is to change the `source` of the timeline that gets initialized in the small JavaScript snippet. You are also welcome to put anything in the `hbt` file you'd like (if you want to differentiate the page the timeline is on).
3. Run the `grunt hbt` command.
4. Commit, push, deploy.

Step 2 is lame. I hope to make it better.

### Installing and running locally

#### Running local node (connect) server

This is for development...the grunt task will watch for compass/sass changes and recompile.

1. Make sure you have the grunt CLI. Try `$ npm install -g grunt-cli`
2. `$ npm install`
3. `$ grunt serve`

You can view the site at `localhost:8001`. 

#### Rebuilding HTML pages from HBT files

If you make changes to `timelines.json` or any of the `hbt` or HBT partials in `src`, you want to run:

`$ grunt hbt`

### Running the Rack webserver locally

You need to have Ruby and the Bundler gem installed. See also [documentation on static sites with Rack on Heroku](https://devcenter.heroku.com/articles/static-sites-ruby)

1. `$ bundle install`
2. `$ rackup`

### Deployment

Talk to me.
You can view the site at `localhost:9292`. This is a preview of what the site will look like when deployed (at least at present) on Heroku. This uses `Rack::Static`.

