'use stric'

const Feedback = require('../models/Feedback')

async function saveFeedback(req, res) {
    const {
        completeName,
        email,
        phone,
        store,
        message
    } = req.body
    const feedback = Feedback({
        completeName,
        email,
        phone,
        store,
        message
    })
    try {
        const feedbackSaved = await feedback.save()
        res.status(201).send({message: feedbackSaved})
    } catch (error) {
        throw error
    }
}
async function getFeedbacks(req, res){
    try {
        const feedbacks = await Feedback.find().lean().exec()
        res.status(200).send({message: feedbacks})
    } catch (error) {
        res.status(500).send({message: error.message})
    }
}
async function getFeedback(req, res) {
    let feedbackId = req.params.feedbackId
    try {
        await Feedback.findOne({_id: feedbackId}, (err, feedback)=>{
            if(err) return res.status(500).send({message: 'An internal server error'})
            if(!feedback) return res.status(404).send({message: 'the feedback not found'})
            res.status(200).send({message: feedback})
        })
    } catch (error) {
        throw error
    }
}

async function updateFeedback(req, res) {
    let feedbackId = req.params.feedbackId
    let updated = req.body
    try {
        await Feedback.findOneAndUpdate({_id: feedbackId}, updated,(err, feedbacks) =>{
            if(err) return res.status(500).send({message: `canot update this feedback because: ${err}`})
            if(!feedbacks) return res.status(404).send({message: 'feefback not found'})
            res.status(200).send({message: 'Feedback updated'})
        })
    } catch (error) {
        throw error
    }
}
async function deleteFeedback(req, res){
    let feedbackId = req.params.feedbackId
    try {
        await Feedback.findOneAndDelete({_id: feedbackId},(err, feedbacks)=>{
            if(err) return res.status(500).send({message: `canot delete this feedback because: ${err}`})
            if(!feedbacks) return res.status(404).send({message: 'feedback not found'})
            res.status(200).send({message: 'this feedback has been deleted'})
        })
    } catch (error) {
        throw error
    }
}
module.exports = {
    saveFeedback,
    getFeedbacks,
    getFeedback,
    updateFeedback,
    deleteFeedback
}