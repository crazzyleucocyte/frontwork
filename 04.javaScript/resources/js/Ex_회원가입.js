

// const login = document.getElementById('login');
function validate(){
    const userId=document.getElementById('userId');
    const userPwd=document.getElementById('userPwd');
    const checkPwd=document.getElementById('checkPwd');
    const name=document.getElementById('name');
    const email=document.getElementById('email');
    const hobby=document.getElementById('hobby');
    const address=document.getElementById('address');

    let output = document.getElementById('output');

    let regExpId =/^[a-zA-Z][a-zA-Z0-9]{3,11}$/;
    
    if(!regExpId.test(userId.value)){
        alert('아이디의 형식이 잘못되었습니다.');
        userId.value ='';
        userId.focus();
        userPwd.value ='';
        checkPwd.value ='';
        return false;
    }
    
    let regExpPwd =/^[a-zA-Z0-9!@#$%^&*]{8,15}$/g;
    if(!regExpPwd.test(userPwd.value)){
        alert('비밀번호의 형식이 잘못되었습니다.')
        userPwd.value ='';
        checkPwd.value ='';
        userPwd.focus();
        return false;
    }
    
    if(userPwd.value!==checkPwd.value){
        alert('비밀번호가 일치하지 않습니다.');
        userPwd.value ='';
        checkPwd.value ='';
        userPwd.focus();
        return false;
    }
    
    let regExpName = /^[가-힣]{2,}$/;
    if(!regExpName.test(name.value)){
        alert('이름 형식이 올바르지 않습니다.');
        return false;
    }
    
    let regExpEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
    // let regExpEmail = /^\w+@\w+\.\w+(\.\w)?$/;
    if(!regExpEmail.test(email.value)){
        alert('이메일 형식이 올바르지 않습니다.');
        return false;
    }

    if(hobby.value==''){
        alert('취미를 입력해주세요')
        return false;
    }
    
    if(address.value=='선택'){
        alert('거주지를 선택해주세요')
        return false;
    }

    alert('회원가입이 완료되었습니다.')








}