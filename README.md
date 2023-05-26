# Features

- UI polishing
- Completed rspec tests (coverage up to 97%+)
- Completed user story (coverage to 98%+)

# Feature Summary

## Google Oauth

In order to make sure the security and authenticity of users who use our app:

- Only columbia-related personnel can login with Google OAuth

## Post

A post is an advertisement posted by the sellers. The sellers can

- create post
- update the post if they want to
- delete (off-shelf) the goods

## Comment

- Users can leave comments under a post

## Profile

- Users can see their own profile
- Users can update their own profile
- Users can see other people’s profile

## Deal

A deal is created when a buyer requests to purchase. In a deal

- Buyers can create deal requests
- Sellers can confirm one of the requests. If there are several requests to the same good, confirmation of one deal will automatically decline others
- Sellers can also off-shelf the goods without confirming any of the deals. In this case, all the deals will be declined

## Rate

Rating is for buyers to give feedback to the sellers

- After a deal is confirmed, buyers can rate the deals under “Unrated purchases”
- Once the rating is confirmed, the rating will be reflected to sellers’ profile pages

## Search

- User can filter posts by category/title/author
- User can sort posts by category/title/author/create date

# Run

## Run locally

First, we need to install ruby environment

### check ruby version

```sh
# check your ruby version
# if it is not >= 2.6.6, < 2.7.0, please go to install ruby version sesion
ruby -v
```

### install ruby version to use bundle

```sh
# list the available Ruby versions.
rbenv install -l


# rbenv install --verbose 2.6.6 to install a specific version (2.6.6 in this example).
rbenv install --verbose 2.6.6

# Use rbenv global 2.6.6 to set the default Ruby version for your environment.
rbenv global 2.6.6

# Use ruby -v to verify that it is installed correctly.
ruby -v

```

if ruby global does not work, check the following link

- https://stackoverflow.com/questions/24736204/rbenv-cant-change-global-ruby-version/24736330

### Install Gem

Run `bundle install --without production` to make sure all gems are properly installed. NOTE: If Bundler complains that the wrong Ruby version is installed, verify that `rvm` is installed (for example, `rvm --version`) and say `rvm list` to see which Ruby versions are available and rvm useversion to make a particular version active. If no versions satisfying the Gemfile dependency are installed, you can say `rvm install` version to install a new version, then `rvm use` version to use it. Then you can try `bundle install` again.

### Create the initial database schema:

```shell
bundle exec rake db:migrate
bundle exec rake db:test:prepare
```

- You can optionally add some seed data in `db/seeds.rb` and run `rake db:seed` to add it.

## Start server

`rails server -b localhost`

## Google OAuth

Refer to [user manual](manual/google-oauth/README.md)

# How to run user story

User story resides in [features](https://github.com/linxiaow/coms4995-saas-lionslist/tree/main/features) folder

```sh
rake cucumber
```

# How to run rspec

User story resides in [spec](https://github.com/linxiaow/coms4995-saas-lionslist/tree/main/spec) folder

```sh
rake spec
```
