require "pry"
require "sinatra"

get "/" do
  erb :home
end

get "/dailyfemaff" do
  erb :"/dailyfemaff/index"
end

get "/slideshow" do
  erb :"/slideshow/index"
end

get "/tabs" do
  erb :"/tabs/index"
end