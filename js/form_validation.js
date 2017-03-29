function myfunction()
{

    var fname=document.Myform.first_name.value;
    var fnumbers=/^[a-z ,.'-]+$/;
    var lname=document.Myform.last_name.value;
    var lnumbers=/^[a-zA-Z]+$/;
    var mail=document.Myform.mail.value;
    var validmail = /^[a-zA-Z0-9\-_]+(\.[a-zA-Z0-9\-_]+)*@[a-z0-9]+(\-[a-z0-9]+)*(\.[a-z0-9]+(\-[a-z0-9]+)*)*\.[a-z]{2,4}$/;
    var pass=document.Myform.pass.value;
    var gender=document.Myform.gender.value;
    var add=document.Myform.add.value;
    var validadd=/^[a-zA-Z0-9]/;
    var country=document.Myform.country.value;
    var pincode=document.Myform.pincode.value;
    var pnumbers=/^[0-9]+$/;
    var mbleno=document.Myform.mbleno.value;
    var mnumbers=/^\d{10}$/;
    var language=document.Myform.language.value;
    var hobbies=document.Myform.hobbies.value;

    if(fname=="")
    {
        alert("Please enter first name");
        document.Myform.first_name.focus();
        return false;
    }
    else if(fnumbers.test(fname)==false)
    {
        alert('Enter valid first name');
        document.Myform.first_name.focus();
    }

    else if (lname=="")
    {
        alert("Please enter last name");
        document.Myform.last_name.focus();
        return false;
    }
    else if(lnumbers.test(lname)==false)
    {
        alert('Enter valid last name');
        document.Myform.last_name.focus();
    }
    else if (mail=="")
    {
        alert("Please enter your Mail Id");
        document.Myform.mail.focus();
        return false;
    }
    else if(validmail.test(mail)==false)
    {
        alert('Enter valid mail');
        document.Myform.mail.focus();
    }
    else if (pass=="")
    {
        alert("Please enter a strong password");
        document.Myform.pass.focus();
        return false;
    }
    else if ((document.getElementById("gender_male").checked==false)&&(document.getElementById("gender_female").checked==false))
    {
        alert("Please select gender");
        document.Myform.gender.focus();
        return false;
    }
    else if (add=="")
    {
        alert("Please type your address");
        document.Myform.add.focus();
        return false;
    }
    else if(validadd.test(add)==false)
    {
        alert("Please enter corret address");
        document.Myform.add.focus();
    }
    else if (document.getElementById("country").value==0)
    {
        alert("Please select your country");
        document.Myform.country.focus();
        return false;
    }
    else if (pincode=="")
    {
        alert("Please enter your pincode");
        document.Myform.pincode.focus();
        return false;
    }
    else if(pnumbers.test(pincode)==false)
    {
        alert('Enter valid pincode');
        document.Myform.pincode.focus();
    }
    else if (mbleno=="")
    {
        alert("Please enter your mobile number");
        document.Myform.mbleno.focus();
        return false;
    }
    else if(mnumbers.test(mbleno)==false)
    {
        alert('Enter valid moble number');
        document.Myform.mobleno.focus();
    }
    else if (document.getElementById("language").value==0)
    {
        alert("Please select language known");
        document.Myform.language.focus();
        return false;
    }
    else
    if((document.getElementById("hobbies_cricket").checked==false)&&(document.getElementById("hobbies_books").checked==false)&&(document.getElementById("hobbies_chess").checked==false)&&(document.getElementById("hobbies_football").checked==false))
    {
        alert("Please select your hobbies");
        document.Myform.hobbies.focus();

    }

    else if(document.getElementById("filename").value=="")
    {
        alert("upload any document");

    }

    else
    {
        window.location = '../html/skills.html';
    }
}

