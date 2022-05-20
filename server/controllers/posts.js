import express from 'express';
import mongoose from 'mongoose';
import postMessageModel from '../models/postmessageschema.js';

export const getPosts = async (req, res) => {
    //res.send('This works');
    try{
        const postMessages = await postMessageModel.find();
        //console.log(postMessages);

        res.status(200).json(postMessages)
    } catch(error) {
        res.status(404).json({ message: error.message })
    }
}

export const createPost = async (req, res) => {
    const post = req.body;

    const newPost = new postMessageModel(post);
    try{
        await newPost.save();
        //https://www.restapitutorial.com/httpstatuscodes.html
        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({message: error.message})
    }
    //res.send('post creation');
}

export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that id');

    const updatedPost = await postMessageModel.findByIdAndUpdate(_id, post, { new: true })

    res.json(updatePost)
}