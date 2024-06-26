# Steps to run api

## 1. Pull the branch if not
## 2. Run following commend in order:
<code>cd api/</code><br>
<code>source apivertualenv/bin/activate</code><br>
<code>pip install -r requirements.txt</code><br>
<code>python3 manage.py makemigrations account</code><br>
<code>python3 manage.py makemigrations blog</code><br>
<code>python3 manage.py makemigrations product</code><br>
<code>python3 manage.py migrate account</code><br>
<code>python3 manage.py migrate blog</code><br>
<code>python3 manage.py migrate product</code><br>
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

### 3. GET: api/account/logout/ <br>
Log outs the user.


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

### 5. POST: api/account/send-password-reset-email/ <br>
Checks does user exist with given email or not. If exists, sends a password reset mail with url for forntend. else, gives a errors saying "user not found" <br>
end-point for front-end: http://localhost:5173/account/rest-password/{uid}/{pw_reset_token} <br>
the expiry time of the link is about 15minutes.
<pre><code>
    {
        "email": "email@email.com",
    }
</code></pre>

### 5. POST: api/account/reset-password/uid/token/ <br>
resets the password of the user if the token is valid else throws a error.

<pre><code>
    {
        "password1": "new password",
        "password2: "confirm password"
    }
</code></pre>



### 5. GET: api/account/verify-token/ <br>
Verifies the token is valid/invalid or not set. Returns success with either true or false with token and a message.<br>
If valid -> success : True<br>
else -> success : False<br>

## Blog
### 1. GET: api/blogs/<br>
Returns all blogs available in the database

### 2. POST: api/blogs/ <br>
Creates new blog. Authentication is required and the user should be admin user i.e is_staff = ture. Returns the data of the blog with status and message<br>
title = necessary<br>
url_slug = optional (default is set to title removing spaces with '-')<br>
thumbnail_url = necessary<br>
content = necessary<br>
status = optional (default is set to published, available values are private and published)<br>
<pre><code>
    {
        "title": "Test blog 7",
        "thumbnail_url": "#",
        "content": "test blog 7",
        "status": "private"
    }
</code></pre>

### 3. GET: api/blogs/id/ <br>
Returns data of blog having id = id

### 4. PUT: api/blogs/id <br>
Complete update of a blog having id=id. Returns the data of that blog with status and message<br>
title = necessary<br>
url_slug = optional (default is set to title removing spaces with '-')<br>
thumbnail_url = necessary<br>
content = necessary<br>
status = optional (default is set to published, available values are private and published)<br>
<br>
Note: You need to provide all of the above (necessary) detail to successfully hit PUT requests i.e complete update 
<pre><code>
    {
        "title": "Test blog 7",
        "thumbnail_url": "#",
        "content": "test blog 7",
        "status": "published"
    }
</code></pre>

### 4. PATCH: api/blogs/id <br>
Partial update of a blog having id=id. Returns the data of that blog with status and message<br>
<br>
Note: You do not have to send all data. Just send those data which you want to update and see the magic.<br>
Recommanded to use this instead the PUT request.

<pre><code>
    {
        "content": "test blog 7",
        "status": "private"
    }
</code></pre>

### 4. DELETE: api/blogs/id <br>
Deletes the blog at id. Returns a status set to false with a message


## Category
### 1. GET: api/categories/<br>
Returns all categories available in the database

### 2. POST: api/categories/ <br>
Creates new category. Authentication is required and the user should be admin user i.e is_staff = ture. Returns the data of the category with status and message<br>
name = necessary<br>
url_slug = optional (default is set to title removing spaces with '-')<br>
status = optional (default is set to active and available values are active and inactive)
<pre><code>
    {
        "name": "the heart touching product"
    }
</code></pre>

### 3. GET: api/categories/id/ <br>
Returns data of category having id = id

### 4. PUT: api/categories/id <br>
Complete update of a category having id=id. Returns the data of that category with status and message.<br>
Authentication is required and the user should be admin user i.e is_staff = ture.<br>
<br>
name = necessary<br>
url_slug = optional (default is set to title removing spaces with '-')<br>
status = optional (default is set to active and available values are active and inactive)<br>
<br>
Note: You need to provide all of the above (necessary) detail to successfully hit PUT requests i.e complete update 
<pre><code>
    {
        "name": "the heart touching product"
    }
</code></pre>

### 4. PATCH: api/categories/id <br>
Partial update of a category having id=id. Returns the data of that category with status and message.<br>
Authentication is required and the user should be admin user i.e is_staff = ture.<br>
<br>
Note: You do not have to send all data. Just send those data which you want to update and see the magic.<br>
Recommanded to use this instead the PUT request.

<pre><code>
    {
        "name": "name changed"
    }
</code></pre>

### 4. DELETE: api/categories/id <br>
Deletes the category at id. Returns a status set to false with a message<br>
Authentication is required and the user should be admin user i.e is_staff = ture.<br>


## Product
### 1. GET: api/products/<br>
Returns all products available in the database

### 2. POST: api/products/ <br>
Creates new product. Authentication is required and the user should be admin user i.e is_staff = ture. Returns the data of the product with status and message<br>
name = necessary<br>
url_slug = optional (default is set to title removing spaces with '-')<br>
thumbnail_url = necessary<br>
description = necessary<br>
category = optional (default is set to 1 (i.e Uncategorised))<br>
stock_quantity= necessary<br>
status = optional (default is set to active, available valus are active and inactive)
<pre><code>
    {
        "name": "the heart touching product",
        "description": "the best product of all",
        "price": "10.45",
        "stock_quantity": 4,
        "category": 2
    }
</code></pre>

### 3. GET: api/products/id/ <br>
Returns data of product having id = id

### 4. PUT: api/products/id <br>
Complete update of a product having id=id. Returns the data of that product with status and message.<br>
Authentication is required and the user should be admin user i.e is_staff = ture.<br>
<br>
name = necessary<br>
url_slug = optional (default is set to title removing spaces with '-')<br>
thumbnail_url = necessary<br>
description = necessary<br>
category = optional (default is set to 1 (i.e Uncategorised))<br>
stock_quantity= necessary<br>
status = optional (default is set to active, available values are active and inactive)<br>
<br>
Note: You need to provide all of the above (necessary) detail to successfully hit PUT requests i.e complete update 
<pre><code>
    {
        "name": "the heart touching product",
        "description": "the best product of all",
        "price": "10.45",
        "stock_quantity": 20,
        "category": 2
    }
</code></pre>

### 4. PATCH: api/products/id <br>
Partial update of a product having id=id. Returns the data of that product log with status and message.<br>
Authentication is required and the user should be admin user i.e is_staff = ture.<br>
<br>
Note: You do not have to send all data. Just send those data which you want to update and see the magic.<br>
Recommanded to use this instead the PUT request.<br>

<pre><code>
    {
        "stock_quantity": 50
    }
</code></pre>

### 4. DELETE: api/products/id <br>
Deletes the product at id. Returns a status set to false with a message<br>
Authentication is required and the user should be admin user i.e is_staff = ture.<br>

## Cart
### 1. GET: api/core/user/carts/ <br>
Returns all cart items of current logged in user

### 2. POST: api/core/user/carts/ <br>
Creates new cart item.  Returns the data of the product with status and message<br>
product = necessary (product id)<br>
quantity = necessary (no. of item of product to purchase) <br>
user = not required to give (server identifies which user is trying to add new cart item and sets it.)
created_at = not required (automatically added to the data)
updated_at = not required (automatically added to the data)
<pre><code>
    {
        "product": 1,
        "quantity": 4,
    }
</code></pre>

### 3. GET: api/core/user/carts/id/ <br>
Returns data of cart having id = id

### 4. PUT: api/core/user/carts/id <br>
Complete update of a cart item having id=id. Returns the data of that cart item with status and message.<br>
product = necessary (product id)<br>
quantity = necessary (no. of item of product to purchase) <br>
user = not required to give (server identifies which user is trying to add new cart item and sets it.)<br>
created_at = not required (automatically added to the data)<br>
updated_at = not required (automatically added to the data)<br>
<br>
Note: You need to provide all of the above (necessary) detail to successfully hit PUT requests i.e complete update 
<pre><code>
    {
        "product": 2,
        "quantity": 1
    }
</code></pre>

### 4. PATCH: api/core/user/carts/id <br>
Partial update of a cart item having id=id. Returns the data of the cart item with status and message.<br>
<br>
Note: You do not have to send all data. Just send those data which you want to update and see the magic.<br>
Recommanded to use this instead the PUT request.<br>

<pre><code>
    {
        "quantity": 2
    }
</code></pre>

### 4. DELETE: api/products/id <br>
Deletes the cart item at id. Returns a status set to false with a message<br><br>


## Test
### 1. GET: api/account/test/
Testing route. (Development)