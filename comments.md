1.  None of your DB migrations have constraints.  Probably bad.

2.  I think you have a lot of stuff on the Photo model that doesn't go there.
Does a Photo know anything about AWS?  Why does it know so much about your AWS
credentials and S3 configuration?  It seems weird that a `Photo` should know
how to configure your credentials, that should be constants or ENV var stuff or
something like that.  Maybe you could look into using an initializer to store configuration
data?  http://guides.rubyonrails.org/configuring.html#using-initializer-files
Or maybe a YAML based solution:
http://stackoverflow.com/questions/592554/best-way-to-create-custom-config-options-for-my-rails-app

3.  shouldn't sativa.png be in an images directory or something?

4.  I'm impressed with the amount of JS testing present.  Very nice.

5.  On the initial page load you should have a spinner or something.  it feels
too long without user feedback.

6.  I'd add an initializer to test for imagemagick.  basically refuse to kick
up the server unless you have imagemagick.  it would help debugging for peeps.

7.  Def look at using ENV vars to pass config data to your JS app


Overall you've really built a nicely factored OO JS MVC framework for this app.
It's a real achievement.  I'm quite proud of this.
