const express = require('express')
const { saveFeedback, getFeedback, getFeedbacks, updateFeedback, deleteFeedback} = require('../controllers/feedback.controller')
const apiFeedback = express.Router()

apiFeedback.post('/feedback', saveFeedback)
apiFeedback.get('/feedbacks', getFeedbacks)
apiFeedback.get('/feedback/:feedbackId', getFeedback)
apiFeedback.put('/feedback/:feedbackId', updateFeedback)
apiFeedback.delete('/feedback/:feedbackId', deleteFeedback)

module.exports = apiFeedback