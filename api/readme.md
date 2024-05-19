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
<pre><code>
    {
        "email":"example@gmail.com",
        "name":"John Doe (optional) ", 
        "password": "password",
        "password2: "confirm pass"
    }
</code></pre>

### 1. POST: api/account/login/ <br>
<pre><code>
    {
        "email":"example@gmail.com",
        "password": "password",
    }
</code></pre>

### 1. POST: api/account/register/google/ <br>
<pre><code>
    {
        "email":"example@gmail.com",
        "name":"John Doe",
        "profile_url":"url"
    }
</code></pre>

### 1. POST: api/account/change-password <br>
login required
<pre><code>
    {
        "password1": "pass1",
        "password2": "pass2"
    }
</code></pre>


## Test
### 1. GET: api/account/test/