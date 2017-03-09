var express = require('express')
var router = express.Router()

var FoodDal = require('../../../common/food').FoodDal
var foodDal = new FoodDal()

//使用vue接口练习
router.get('/', (req, res) => {
        var page = 1
        if (req.query.page) {
            page = Number(req.query.page)
        }
        foodDal.getDataByPage(page, {}, data => {
            res.json({
                status: 'y',
                msg: '获取分页数据成功',
                data: data
            })
        })
    })
    //根据id查找
router.get('/:id', (req, res) => {
        foodDal.findByID(req.params.id, data => {
            res.json({
                status: 'y',
                msg: '获取数据成功',
                data: data
            })
        })
    })
    //新建一条记录
router.post('/create', (req, res) => {
        console.log(req.body)
        foodDal.save(req.body, isOk => {
            if (isOk) {
                res.json({
                    status: 'y',
                    msg: '新增记录成功'
                })
            } else {
                res.json({
                    status: 'n',
                    msg: '新增记录失败'
                })
            }
        })
    })
    // 更新一条记录
router.post('/update/:id', (req, res) => {
    foodDal.updateByID(req.params.id, req.body, isOk => {
        console.log(isOk)
        if (isOk) {
            res.json({
                status: 'y',
                msg: '修改记录成功'
            })
        } else {
            res.json({
                status: 'n',
                msg: '修改记录失败'
            })
        }
    })
})

router.post('/delete/:id', (req, res) => {
    foodDal.del(req.params.id, isOk => {
        if (isOk) {
            res.json({
                status: 'y',
                msg: '删除记录成功'
            })
        } else {
            res.json({
                status: 'n',
                msg: '修改记录失败'
            })
        }
    })
})
module.exports = router