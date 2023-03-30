//이메일(userId) 정규식 검사
export const idCheck = (id) => {
    // eslint-disable-next-line
    // let regExp = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    // return regExp.test(id)
    return id;
};

//비밀번호(password) 정규식 검사
export const pwCheck = (pw)=> {
    // let regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^&*()+=-])(?=.*[0-9]).{8,20}$/;
    // return regExp.test(pw)
    return pw;
};