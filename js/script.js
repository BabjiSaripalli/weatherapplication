window.onload = function(){
    //console.log(document.getElementById('username'));
}
function validate(input){
    switch(input){
        case 'usrename':

            let usernameEle = document.getElementById('username');
            let username = usernameEle.value;
            if(username.length >=5){
                let pattern =/\d/;
                if(pattern.test(username)){
                    showError('username')
                }
            }
            else
            {
                showError('username')
            }
            break;
        case 'Email':
            
            let EmailEle = document.getElementById('Email');
            let Emailname= EmailEle.value;
            if(Emailname.length >=5){
                let pattern =/"^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$"/;
                
                if(pattern.test(Emailname)){
                    showError('Emailname')
                }
            }
            else
            {
                showError('Emailname')
            }
            break;
        default:
            console.log("Please enter username and Email");


}
function showError(){
    errorEle.classList.remove('d-none');
    errorEle.innerText = "username must not contain Numbers";

}


































































// let hasNumber=false;
        //for(let i=0;i<= username.length -1;i++){
          //  if(parseInt(username[i])){
            //    hasNumber = true;
              //  break;
            //}
       // }
        //if (hasNumber){
          //  errorEle.classList.remove('d-none');
        //    errorEle.innerText = "username must not contain Numbers"
      //  }else{
          //  errorEle.classList.remove('d-none');

        //}