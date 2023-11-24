function loginuser(username)
{
    if(!username)
    {
        console.log("Please enter the user name");
        return
    }
    return `${username} is logged in`
}

 console.log(loginuser("Denis"))