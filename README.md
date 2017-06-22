# Readme

* This uses the react rails gem located: https://github.com/reactjs/react-rails
* This installation was simpler than react on rails
* Add the gem react-rails to the gemfile and run rails g react:install
* You can skip webpacker
* the .jsx files are located in app/assets/javascripts/components
* reference these scrips in the views <%= react_component("Comments.NewForm", {post_id: @post.id}) %>
* had to remove server side rendering: app/assets/javascripts/server_rendering.js (deleted contents)
* added jquery