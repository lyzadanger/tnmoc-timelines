use Rack::Static, 
  :urls => ["/css", "/lib"],
  :root => ".",
  :index => "index.html"

run lambda { |env|
  [
    200, 
    {
      'Content-Type'  => 'text/html', 
      'Cache-Control' => 'public, max-age=86400' 
    },
    File.open('.' + env['REQUEST_PATH'], File::RDONLY)
  ]
}