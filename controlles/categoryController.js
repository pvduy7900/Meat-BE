
const Category = require("../models/categoryModels")

exports.createCategory = async (request, response) => {
    try {
        const { name, code } = request.body
        if (!name || !code) {
            return response.status(400).json({
                status: "no name",
                messages: error.messages
            })
        }

        const newCategory = await Category.create({
            name :name,
            code : code
        })

        response.status(200).json({
            status:"Success",
            data: newCategory
        })


    } catch (error) {
        response.status(400).json({
            status: "Fail",
            messages: error.messages
        })
    }
}

exports.updateCategory = async (request, response) => {
    try {
        const { name, code } = request.body
        if (!name) {
            return response.status(400).json({
                status: "Fail",
                message: "no new name"
            })
        }
        if (!code) {
            return response.status(400).json({
                status: "Fail",
                message: "wrong token"
            })
        }

        const newCategory = await Category.findOne({ code: code })

        if (newCategory) {
            newCategory.name = name
        }
        newCategory.save()

        response.status(200).json({
            status: "Success",
            data: newCategory
        })


    } catch (error) {
        response.status(400).json({
            status: "Fail",
            message: "update is not run"
        })
    }
}