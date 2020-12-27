###
#   This script should only be used once when project is first cloned
#   NOTE: Will not work if dependencies are added or versions are updated
#         For these changes, you must manually run `npm install` in the local
#         directory being updated
###

### Client Dependencies ###
cd ./client
# Checks to make sure the node_modules folder exists
if [ ! -d ./node_modules ]
then
    npm install
else
    echo "Client dependencies already installed!"    
fi

### Server Dependencies ###
cd ../server
# Checks to make sure the node_modules folder exists
if [ ! -d ./node_modules ]
then
    npm install
else
    echo "Server dependencies already installed!"    
fi

# return to root level
cd ..