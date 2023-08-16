console.log("X- 登录页")
function Log() {
    var Name = document.getElementById("name").value
    var Pass = document.getElementById("password").value
    if (Name === "") {
        console.log("昵称为空")
        alert("昵称不能为空!")
        return
    }
    else if (Pass === "") {
        console.log("密码为空")
        alert("密码不能为空!")
        return
    }
    switch (Name) {
        case "Jacky":
            if (Pass === "hello") {
                console.log("昵称密码正确")
                alert("欢迎回来,Jacky!")
                if (confirm("要跳转到主页吗?") === true) {
                    window.location.href = "Main.html"
                }
            } else {
                console.log("密码错误")
                alert("密码输入错误!")
            }
            break

        case "Tim":
            if (Pass === "hiTim") {
                console.log("昵称密码正确")
                alert("欢迎回来,Tim!")
                if (confirm("要跳转到主页吗?") === true) {
                    window.location.href = "Main.html"
                }
            } else {
                console.log("密码错误")
                alert("密码输入错误!")
            }
            break

        default:
            console.log("昵称错误")
            alert("昵称输入错误!")
            break
    }
}