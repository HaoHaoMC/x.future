console.log("X- 注册页")
function Sign() {
    let Name = document.getElementById('name').value
    let Password = document.getElementById('password').value
    let Confirm = document.getElementById('confirm').value
    let IsMan = document.getElementById('man').checked
    let Info = document.getElementById('information').value
    let Proto = document.getElementById('protocol').checked

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

    let UInfo = [Name, Password, IsMan, Info, Proto]
    UInfo = JSON.stringify(UInfo)
    console.alert(UInfo)
    // 将用户信息保存为一个数组并导出

    if (confirm("要跳转到主页吗?") === true) {
        window.location.href = "Main.html"
    }
    // 询问是否返回主页

}
