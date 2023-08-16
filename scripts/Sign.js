console.log("X- 注册页")
function Sign() {
    var Name = document.getElementById('name').value
    var Password = document.getElementById('password').value
    var Confirm = document.getElementById('confirm').value
    var Sex = document.getElementById('man').checked
    var Info = document.getElementById('information').value
    var Proto = document.getElementById('protocol').checked

    // 获取注册信息
    if (Name === "") {
        console.log("昵称为空")
        alert("昵称不能为空!")
        return
    }
    else if (Password === "" || Confirm === "") {
        console.log("密码为空")
        alert("密码不能为空!")
        return
    }
    else if (Confirm !== Password) {
        console.log("密码不同")
        alert("前后密码不相同!")
        return
    }
    else if (Info === "") {
        console.log("简介为空")
        alert("简介不能为空!")
        return
    }
    else if (Proto === false) {
        console.log("未勾协议")
        alert("请勾选确认协议!")
        return
    }
    // 检测输入内容是否合规

    var Temp = [Name, Password, Sex, Info, Proto]
    var UserInfo = JSON.stringify(Temp)
    console.log(UserInfo)
    // 将用户信息保存为一个数组并导出

    // window.location.href = "./Main.html"
    // 跳转至主页

}