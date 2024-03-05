const express = require ('express')
const path = require('path')
const multer = require('multer')

// storage location and filename
 const myStorage = multer.diskStorage({
    destination: (req,file,cb)=> {
        cb(null, "documents/")
    },
    filename:(req,file,cb)=>{
        //cd(null,file.originalname) // original filename
        cb(null,`doc-${new Date().getTime().toString()}${path.extname(file.originalname)}`)  // doc-12345456.pdf
    }
 });

 // multer config 
 const fileConfig = multer({
    storage : myStorage,
    limits :{
        filesize : 10 * 1024 * 1024    //10Mb 
    }
 }).single('mFile')

 module.exports = fileConfig 
