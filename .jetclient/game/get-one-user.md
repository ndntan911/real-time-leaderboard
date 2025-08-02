```toml
name = 'get-one-user'
method = 'GET'
url = 'http://localhost:3000/user?email=test@email.com'
sortWeight = 3000000
id = '78a9e5a7-9c5b-46ce-aa44-50cd7b3cfe52'

[[queryParams]]
key = 'email'
value = 'test@email.com'

[body]
type = 'JSON'
raw = '''
{
  "email": "test@email.com",
  "password": "123456"
}'''
```
