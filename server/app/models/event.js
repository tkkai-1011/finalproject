'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/**
 * Mongoose schema for Event object.
 */
let EventSchema = new Schema({
        title: {
            type: String,
            required: "title is missing"
        },
        description: {
            type: String
        },
        StartTime: {
            type: String
        },
        EndTime: {
            type: String
        },
        location:{
                type:String
        },
        createdDate: {
            type: Date,
            default: Date.now()
        },
        modifiedDate: {
            type: Date,
            default: Date.now()
        }
    },
    {
        versionKey: false
    });
// Duplicate the id field as mongoose returns _id field instead of id.
EventSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

// Ensure virtual fields are serialised.
EventSchema.set('toJSON', {
    virtuals: true
});

module.exports = mongoose.model('event', EventSchema);
