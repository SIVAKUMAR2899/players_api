//const { player, player, player } = require('../models')
const { players } = require('../models');
const db = require('../models')

const Players = db.players

//1.post method

const addPlayer = async (req, res) => {
    console.log('hi', req.body);
    let info = {
        id: req.body.id,
        pname: req.body.pname,
        city: req.body.city,
        contact: req.body.contact,
        created_at: "24-08-2022",
        updated_at: "24-08-2022"
    }
    const players = await Players.create(info)
    res.status(200).json({
        code: res.statusCode,
        data: players,
        message: 'success'
    });
    console.log(players)
}

//2.get all method

const getAllPlayer = async (req, res) => {
    let players = await Players.findAll({
        attributes: [
            'id',
            'pname',
            'city',
            'contact'
        ]
    })
    res.status(200).send(players)
}

//3.get by id

const getOnePlayer = async (req, res) => {
    let id = req.params.id
    let players = await Players.findOne({ where: { id: id } })
    res.status(200).send(players)
}

//4.put method

const updatePlayer = async (req, res) => {
    let id = req.params.id
    const players = await Players.update(req.body, { where: { id: id } });
    // .then((result) => res.json({
    //     successCode: result,
    //     data: players,
    //     message: "success"
    // }));

    res.status(200).json({
        data: players,
        code: res.statusCode,
        message: 'success'
    })
}

//5.delete method

const deletePlayer = async (req, res) => {
    let id = req.params.id
    await Players.destroy({ where: { id: id } })
    res.status(200).json({
        code: res.statusCode,
        data: players,
        message: 'Deleted successfully'
    })
}

module.exports = {
    addPlayer,
    getAllPlayer,
    getOnePlayer,
    updatePlayer,
    deletePlayer
};