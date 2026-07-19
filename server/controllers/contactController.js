const Contact = require('../models/Contact');

const submitContactMessage = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const contact = await Contact.create({
      name,
      email,
      subject,
      message
    });

    res.status(201).json({ message: 'Message sent successfully', contact });
  } catch (error) {
    res.status(500).json({ message: 'Failed to send message', error: error.message });
  }
};

const getContactMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve messages', error: error.message });
  }
};

module.exports = { submitContactMessage, getContactMessages };
