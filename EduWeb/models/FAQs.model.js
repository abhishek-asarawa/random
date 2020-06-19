import mongoose, { mongo } from 'mongoose';


// making schema
const faqSchema = mongoose.Schema;

// defining schema
const faq = new faqSchema({
    question: {
        type: String,
        required: true
    },
    answer: {
        type: String
    },
    createdOn: {
        type: Date,
        default: new Date()
    }
});


const faqs = mongoose.model('faqs', faq);

export default faqs;