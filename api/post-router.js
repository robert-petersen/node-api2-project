const Posts = require("./db-helpers")
const express = require('express')

const router = express.Router()

router.post("/", (req, res) => {
  const newPost = req.body
  if (!newPost.title || !newPost.contents) {
    res.status(400).json({ errorMessage: "Please provide title and contents for the post." })
  }
  Posts.insert(req.body)
  .then( post => {
    res.status(201).json(post)
  })
  .catch( err => {
    res.status(500).json({ error: "There was an error while saving the post to the database" })
  })
})

router.post("/:id/comments", (req, res) => {
  const id = req.params.id
  if (!newPost.text) {
    res.status(400).json({ errorMessage: "Please provide text for the comment." })
  }
  Posts.insertComment(req.body)
})