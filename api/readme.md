# Steps to run api

## 1. Pull the branch if not
## 2. Run following commend in order:
<code>cd api/</code><br>
<code>source apivertualenv/bin/activate</code><br>
<code>pip install -r requirements.txt</code><br>
<code>python3 manage.py makemigrations</code><br>
<code>python3 manage.py migrate</code><br>
<code>python3 manage.py runserver</code>

# API Routes:
## Account
### 1. POST: api/account/register/ <br>
Registering a new user. Returns the token and data of user with a message
<pre><code>
    {
        "email":"example@gmail.com",
        "name":"John Doe (optional) ", 
        "password": "password",
        "password2: "confirm pass"
    }
</code></pre>

### 2. POST: api/account/login/ <br>
Log in a user on the basis of email and password. Returns tokens and data with a message.
<pre><code>
    {
        "email":"example@gmail.com",
        "password": "password",
    }
</code></pre>

### 3. POST: api/account/register/google/ <br>
Registeringa user with google authentication. Returns tokens and data with a message.
<pre><code>
    {
        "email":"example@gmail.com",
        "name":"John Doe",
        "profile_url":"url"
    }
</code></pre>

### 4. POST: api/account/change-password <br>
login required. Changes the user password and returns a message
<pre><code>
    {
        "password1": "pass1",
        "password2": "pass2"
    }
</code></pre>

### 5. GET: api/account/verify-token/ <br>
Verifies the token is valid/invalid or not set. Returns success with either true or false with token and a message.
If valid -> success : True
else -> success : False

## Blog
### 1. GET: api/blogs/<br>
Returns all blogs available in the database

### 2. POST: api/blogs/ <br>
Creates new blog. Authentication is required and the user should be admin user i.e is_staff = ture. Returns the data of the blog with status and message
title = necessary
slug = optional (default is set to title removing spaces with '-')
thumbnail_url = necessary
content = necessary
status = optional (default is set to published)
<pre><code>
    {
        "title": "Test blog 7",
        "slug": "Test-blog-7",
        "thumbnail_url": "#",
        "content": "test blog 7",
        "status": "private"
    }
</code></pre>

### 3. GET: api/blogs/id/ <br>
Returns data of blog having id = id

### 4. PUT: api/blogs/id <br>
Complete update of a blog having id=id. Returns the data of that blog with status and message
title = necessary
slug = optional (default is set to title removing spaces with '-')
thumbnail_url = necessary
content = necessary
status = optional (default is set to published)

Note: You need to provide all of the above detail to successfully hit PUT requests i.e complete update 
<pre><code>
    {
        "title": "Test blog 7",
        "slug": "Test-blog-7",
        "thumbnail_url": "#",
        "content": "test blog 7",
        "status": "published"
    }
</code></pre>

### 4. PATCH: api/blogs/id <br>
Partial update of a blog having id=id. Returns the data of that blog with status and message

Note: You do not have to send all data. Just send those data which you want to update and see the magic.
Recommanded to use this instead the PUT request.

<pre><code>
    {
        "content": "test blog 7",
        "status": "private"
    }
</code></pre>

### 4. DELETE: api/blogs/id <br>
Deletes the blog at id. Returns a status set to false with a message


## Product


## 

## Test
### 1. GET: api/account/test/
Testing route. (Development)