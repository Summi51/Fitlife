# Fitlife

## install process

1. npx create-expo-app AwesomeProject

2. cd AwesomeProject

// web 
3. expo start --web   

or for global
3. npm install -g expo-cli

// mobile - barcode scane
4. expo-cli start --tunnel


5. 
// Expo Go app - in moble play store install


=========================================================================

# Connect MongoDB with Django

1. Step 1
Driver -> python -> Copy string paste in host.

2. Set up basic Django Application

3. pip install djongo

4. pip install dnspython

5. Settings.py -> remove DataBase

6. py
    
    DATABASES = {
       'default': {
           'ENGINE': 'djongo',
           'NAME': 'django',
           'CLIENT':{
               'host':'mongodb+srv://uma:uma@cluster0.g3tcjlo.mongodb.net/{collection-name} ?retryWrites=true&w=majority',
               'username':'uma',
               'password':'uma'
           }
       }
   } 
   
   
7. pip install pymongo==3.12.3

8.  pip install pytz

9. python manage.py migrate