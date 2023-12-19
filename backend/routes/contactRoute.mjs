import express from "express";
import User from "../models/userModel.mjs";

const route = express.Router();

// Function to find user by ID
const findUserById = async (userId) => {
  try {
    const user = await User.findById(userId);
    return user;
  } catch (error) {
    throw new Error("User not found");
  }
};

// Get user's contacts by user ID
route.get("/:id", async function (req, res) {
  try {
    const user = await findUserById(req.params.id);
    res.json({ contact: user.contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

// Add a new contact for a user by user ID
route.post("/:id/addContact", async function (req, res) {
  try {
    const user = await findUserById(req.params.id);
    const newContact = {
      fullName: req.body.fullName,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      notes: req.body.notes,
    };
    user.contact.push(newContact);
    await user.save();
    res.status(201).json({ message: "Contact added successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});
// Get contact by user ID and phone number
route.get("/:id/:phoneNumber", async function (req, res) {
  try {
    const user = await findUserById(req.params.id);
    const contact = user.contact.find(
      (contact) => contact.phoneNumber === req.params.phoneNumber
    );
    if (!contact) {
      return res.status(404).json({ message: "Contact not found" });
    }
    res.status(200).json({ contact: contact });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
});
// Update contact information by user ID and phone number
route.patch("/:id/:phoneNumber", async function (req, res) {
  try {
    const user = await findUserById(req.params.id);
    if (!user) return res.status(404).json({ message: "user not found" });
    const contactToUpdate = user.contact.find(
      (contact) => contact.phoneNumber === req.params.phoneNumber
    );

    if (!contactToUpdate)
      return res.status(404).json({ message: "Contact not found" });
    contactToUpdate.fullName = req.body.fullName || contactToUpdate.fullName;
    contactToUpdate.email = req.body.email || contactToUpdate.email;
    contactToUpdate.notes = req.body.notes || contactToUpdate.notes;

    await user.save();

    res.status(200).json({
      message: "Contact updated successfully",
      contact: contactToUpdate,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

// Delete a contact by user ID and phone number
route.delete("/:id/:phoneNumber", async function (req, res) {
  try {
    const user = await findUserById(req.params.id);

    const contactToDelete = user.contact.find(
      (contact) => contact.phoneNumber === req.params.phoneNumber
    );

    if (!contactToDelete) {
      return res.status(404).json({ message: "Contact not found" });
    }

    user.contact.pull(contactToDelete);
    await user.save();
    res.status(200).json({ message: "Contact deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default route;
