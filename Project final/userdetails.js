var database = [
    {
        username: "Senthil",
        password: "Senthil@06"
    },
    {
        username: "Vaishu",
        password: "Vaishu@06"
    },
    {
        username: "Gayathri",
        password: "Gayu@06"
    },
    {
        username: "Aarthi",
        password: "Aarthi@06"
    }
]
function doIt()
        {
            var un=document.getElementById("UserName").value;
            var ps=document.getElementById("Password").value;
            for(i=0;i<database.length;i++)
            {
                if(un==database[i].username)
                {
                    if(ps==database[i].password)
                    {
                        alert("Welcome "+ un +" You are successfully loged in!!!");
                        window.open('homepage.html','_self');
                        break;
                    }
                    else if(ps!=database[i].password)
                    {
                        alert("Please enter correct password");
                        break;
                    }
                }
                else if((un!=database[i].username && ps!=database[i].password)&&i==database.length-1)
                {
                    alert("Please enter valid input and output");
                    break;
                }
                else if((un!=database[i].username && ps==database[i].password))
                {
                    alert("Please enter valid username");
                    break;
                }
                else{
                    continue;
                }
            }
        }
function openSesame()
{
    window.open('Username and password.html','_self');
}
function signup()
{
    window.open('Signup.html','_self');
}

var a=0;
function total()
{
    if(a==0)
    {
         document.getElementById('total').style.display="block";
             a=1;
    }
    else{
            document.getElementById('total').style.display="none";
            a=0;
         }
}
function paid()
{
    alert("You have successfully paid");
}
function output()
{
    window.open('checkout.html','_self');
}
