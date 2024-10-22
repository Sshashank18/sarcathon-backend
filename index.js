const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Simulating a list of FAQ questions and answers
const faqData = [
  { id: 1, question: "What is your return policy?", answer: "Our return policy is 30 days from the date of purchase." },
  { id: 2, question: "How can I track my order?", answer: "You can track your order by logging into your account and checking the 'Orders' section." },
  { id: 3, question: "What are your shipping options?", answer: "We offer standard, express, and overnight shipping." },
  // Add more FAQs as needed
];

// Endpoint to return suggested FAQ questions
app.get('/api/faq', (req, res) => {
    res.json(faqData);
});

// Endpoint to handle type-ahead for autocomplete (filtering FAQs)
app.get('/api/faq/search', (req, res) => {
    const { query } = req.query;
    if (!query) {
        return res.json([]);
    }
    const filteredFaqs = faqData.filter(faq => faq.question.toLowerCase().includes(query.toLowerCase()));
    res.json(filteredFaqs);
});

app.listen(port, () => {
    console.log(`FAQ Chatbot backend running at http://localhost:${port}`);
});