var db = require('./db_base')
var DBBase = db.DBBase
var mongoose = db.mongoose
var Schema = mongoose.Schema

//创建书籍分类数据结构
var foodSchema = new Schema({
    name: String,
    description: String,
    img: String,
    type: String,
    price: Number,
})

var Food = mongoose.model("food", foodSchema)

/**
 * 分类模型
 */
class FoodDal extends DBBase {
    constructor() {
        super(Food)
    }


}

module.exports = {
    Food: Food,
    FoodDal: FoodDal
}