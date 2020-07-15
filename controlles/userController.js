
const bcrypt = require("bcrypt")
const User = require("../models/userModels")
const { loginWithEmail, generateToken } = require("../servies/authenticationServies")


exports.createUser = async (request, response) => {
    try {
        const { name, email, password, role } = request.body
        if (!name || !email || !password) {
            return response.status(400).json({
                message: "name, email, password is required"
            })
        }

        const hashedPassword = await bcrypt.hash(request.body.password, 10)

        const newUser = await User.create({
            name: name,
            email: email,
            password: hashedPassword,
            role
        })

        const token = await generateToken(newUser)

        response.status(200).json({
            status: "create success",
            data: { newUser, token }
        })

    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}

exports.getUserList = async (request, response) => {
    try {

        const userList = await User.find({}) // lấy hết tat ca
        response.status(200).json({
            status: "success",
            data: userList
        })

    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: error.message
        })
    }
}



exports.login = async (request, response) => {
    try {
        // 1.check the validiti of data
        const { email, password } = request.body
        if (!email || !password) throw new Error("email or password are required")

        const user = await loginWithEmail(email, password)
        console.log(user)
        const token = await generateToken(user)

        response.status(200).json({
            status: "success",
            data: { user, token }
        })


    } catch (error) {
        response.status(400).json({
            message: error.message
        })
    }
}



exports.logout = async (request, response) => {
    // 1. lấy và kiễm tra tính khả dụng của thông tin từ clients
    // 2. kiểm tra và update thông tin trong database của mình
    // 3. trả lời lại cho clients
    try {
        const token = request.body.token
        if (!token) {
            response.status(400).json({
                status: "fail",
                message: "No token here"
            })
        }

        const user = await User.findOne({ tokens: token })

        user.tokens = user.tokens.filter(token => token != token)
        await user.save()
        response.status(200).json({
            status: "log out success",
            data: user
        })
    } catch (error) {
        response.status(400).json({
            status: "fail",
            message: " fail log out"
        })
    }

}

exports.updateUser = async (request, response) => {
    const { name, email, password, role, introduction, token } = request.body
    if (!name && !email && !password && !role && !introduction) {
        return response.status(400).json({
            status: "fail",
            message: "sao ko update gi het?"
        })
    }
    if (!token) {
        return response.status(400).json({
            status: "fail",
            message: "khong co token ne!"
        })
    }

    const user = await User.findOne({ tokens: token })

    if (name) {
        user.name = name
    }
    if (email) {
        user.email = email
    }
    if (password) {
        user.password = password
    }
    if (role) {
        user.role = role
    }
    if (introduction) {
        user.introduction = introduction
    }
    user.save()

    response.status(200).json({
        status: "success",
        data: user
    })
}










